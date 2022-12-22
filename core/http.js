import CryptoJS from "crypto-js"
import https from "https"

// ############################ Types
/**
 * @typedef {Object} HttpConstructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [recvWindow]
 * @property {Boolean} [isTestNet]
 * 
 * @property {String} [baseURL]
 * @property {String} [baseURLTest]
 * @property {String} [wsAuthURL]
 * @property {String} [wsBaseURL]
 * @property {String} [wsBaseURLTest]
 * @property {Number} [timestamp]
 * 
 */

/**
 * Request
 * @callback HttpRequest
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method
 * @param {String} address https://fapi.binance.com/fapi/v1/ping
 * @param {Object} params
 * @param {Boolean} isPrivate
 * @param {Boolean} noTimestampAndRecvWindow
 * @returns {Promise}
 */

/**
 * @callback HttpPublicRequest
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method
 * @param {String} address Example: /fapi/v1/exchangeInfo
 * @param {Object} params Example: {symbol: "BTCUSDT", limit: 10}
 * @returns {Promise}
 */

/**
 * @callback HttpPrivateRequest
 * @param {"GET" | "POST" | "PUT" | "DELETE"} method Example: GET
 * @param {String} address Example: /fapi/v1/listenKey
 * @param {Object} params Example: {symbol: "BTCUSDT", limit: 10}
 * @returns {Promise}
 */

/**
 * @callback HttpPublic
 * @param {String} address Example: /fapi/v1/exchangeInfo
 * @param {Object} params Example: {symbol: "BTCUSDT", limit: 10}
 * @returns {Promise}
 */

/**
 * @callback HttpPrivate
 * @param {String} address Example: /fapi/v1/listenKey
 * @param {Object} params Example: {symbol: "BTCUSDT", limit: 10}
 * @returns {Promise}
 */


// ############################ Types

/**
 * @namespace
 */
export class Http {
    HmacSHA256 = CryptoJS.HmacSHA256

    /**
     * @param {HttpConstructor} options
     */
    constructor(options) {
        this.api_key = options.api_key
        this.api_secret = options.api_secret
        this.isTestNet = options.isTestNet
        this.recvWindow = options.recvWindow

        this.baseURL = options.baseURL
        this.baseURLTest = options.baseURLTest
        this.timestamp = options.timestamp
    }

    /**
     * @param {String} hostname example: catfact.ninja
     * @param {String} [path] example: /fact
     * @param {Object} options 
     * @param {"GET" | "POST" | "PUT" | "DELETE" | "OPTIONS"} [options.method] or anything else
     * @param {Object} [options.headers]
     * @param {String} [options.body] if its object, it should be JSON.stringify
     * @returns {Promise<Buffer | JSON>}
     */
    async httpRequest(hostname, path="", options) {

        return new Promise((resolve, reject) => {

            function callback(res) {
                // if (res.statusCode < 200 || res.statusCode >= 300) {
                //     return reject(new Error(res.statusCode))
                // }

                let resBody = []
                
                res.on('data', function(chunk) {
                    resBody.push(chunk)
                })

                res.on('end', function() {
                    try {
                        resBody = Buffer.concat(resBody)
 
                        let contentType = res.headers['content-type']
                        if (contentType) {
                            if (contentType.includes("application/json")) {
                                resBody = JSON.parse(resBody)
                            }
                        }

                        // else Buffer
                        resolve({
                            body: resBody,
                            statusCode: res.statusCode,
                            statusMessage: res.statusMessage,
                            headers: res.headers,
                        })
                    } catch(error) {
                        reject(error)
                    }
                })    
            }
            
            // remove https:// OR http:// from hostname
            if (hostname.startsWith("https://")) {
                hostname = hostname.replace("https://", "")
            } else if (hostname.startsWith("http://")) {
                hostname = hostname.replace("http://", "")
            }

            let criteria = {}

            criteria.hostname = hostname

            if (path) {
                criteria.path = path
            }

            if (options?.headers) {
                criteria.headers = options.headers
            }

            if (options?.method) {
                criteria.method = options.method
            } else {
                criteria.method = "GET"
            }
            
            const req = https.request({...criteria}, callback)
            
            req.on('error', (error) => {
                reject(error.message)
            })

            if (options?.body) {
                req.write(options.body)
            }

            req.end()
        })
    }

    /**
     * @type {HttpRequest}
     */
    async request(method, address, params = {}, isPrivate = false, noTimestampAndRecvWindow=false) {
        try {

            let hostname = this.baseURL 
            if (this.isTestNet) {
                console.log("## Test Net Request ##")
                hostname = this.baseURLTest
            }

            let recvWindow = this.recvWindow
            if (params.recvWindow) {
                recvWindow = params.recvWindow
                delete params.recvWindow
            }

            let queries = {
                ...params,
                timestamp: this.timestamp,
                recvWindow,
            }

            if (noTimestampAndRecvWindow) {
                delete queries.timestamp
                delete queries.recvWindow
            }

            let queryToString = Object.keys(queries)
                .map((key) => {
                    let value = queries[key]

                    if (value instanceof Array) {
                        value = JSON.stringify(value)
                        value = encodeURI(value)
                    }
                    return `${key}=${value}`
                })
                .join("&");

            let headers = {}
            
            if (method != "GET") {
                headers["Accept"] = "application/x-www-form-urlencoded"
            }

            if (isPrivate && this.api_secret) {
                const signature = this.HmacSHA256(
                    queryToString,
                    this.api_secret
                ).toString()

                address = address + "?" + queryToString + "&signature=" + signature
            } else {
                address = address + "?" + queryToString
            }

            if (this.api_key) {
                headers["X-MBX-APIKEY"] = this.api_key
            }
            
            let req = await this.httpRequest(hostname, address, {
                method,
                headers,
            })
            // console.log("BODY:", req.body)
            // console.log("Status Code:", req.statusCode)
            // console.log("Status Message:", req.statusMessage)
            // console.log("Headers:", req.headers)

            if (req.status == 404) {
                throw new Error("404 not found")
            } else if (req.status == 406) {
                throw new Error("Client error 406: something you should fix")
            }
            
            return req.body
        } catch (error) {
            let errorMessage = {
                name: error.name,
                message: error.message,
                stack: error.stack,
            }

            return errorMessage
        }
    }

    /**
     * it's using fetch module which is available on node 18.0.0 and higher
     * so due to compatibility we are disabling it.
     * so this is PRAISE (opposite of DEPRECATE)
     * @type {HttpRequest}
     */
    async PRAISE_request(method, address, params = {}, isPrivate = false, noTimestampAndRecvWindow=false) {
        try {
            if (this.isTestNet) {
                console.log("## Test Net Request ##")
                address = this.baseURLTest + address
            } else {
                address = this.baseURL + address
            }

            let recvWindow = this.recvWindow
            if (params.recvWindow) {
                recvWindow = params.recvWindow
                delete params.recvWindow
            }

            let queries = {
                ...params,
                timestamp: this.timestamp,
                recvWindow,
            }

            if (noTimestampAndRecvWindow) {
                delete queries.timestamp
                delete queries.recvWindow
            }

            let queryToString = Object.keys(queries)
                .map((key) => {
                    let value = queries[key]

                    if (value instanceof Array) {
                        value = JSON.stringify(value)
                        value = encodeURI(value)
                    }
                    return `${key}=${value}`
                })
                .join("&");

            let headers = {}
            
            if (method != "GET") {
                headers["Accept"] = "application/x-www-form-urlencoded"
            }

            if (isPrivate && this.api_secret) {
                const signature = this.HmacSHA256(
                    queryToString,
                    this.api_secret
                ).toString()

                address = address + "?" + queryToString + "&signature=" + signature
            } else {
                address = address + "?" + queryToString
            }

            if (this.api_key) {
                headers["X-MBX-APIKEY"] = this.api_key
            }

            let data = await fetch(address, {
                method,
                headers,
            })

            if (data.status == 404) {
                throw new Error("404 not found")
            } else if (data.status == 406) {
                throw new Error("Client error 406: something you should fix")
            }

            let body = await data.json()
            // console.log(body)
            return body

        } catch (error) {
            let errorMessage = {
                name: error.name,
                message: error.message,
                stack: error.stack,
            }

            return errorMessage
        }
    }

    // ############## Requests without timestamp & recvWindow
    /**
     * @type {HttpPublic}
     */
    async simplePublicGET(address, params = {}) {
        return await this.request("GET", address, params, false, true)
    }

    /**
     * @type {HttpPublic}
     */
    async simplePublicPOST(address, params = {}) {
        return await this.request("POST", address, params, false, true)
    }

    /**
     * @type {HttpPublic}
     */
    async simplePublicPUT(address, params = {}) {
        return await this.request("PUT", address, params, false, true)
    }

    /**
     * @type {HttpPublic}
     */
    async simplePublicDELETE(address, params = {}) {
        return await this.request("DELETE", address, params, false, true)
    }


    /**
     * @type {HttpPrivate}
     */
    async simplePrivateGET(address, params={}) {
        return await this.request("GET", address, params, true, true)
    }

    /**
     * @type {HttpPrivate}
     */
    async simplePrivatePOST(address, params={}) {
        return await this.request("POST", address, params, true, true)
    }

    /**
     * @type {HttpPrivate}
     */
    async simplePrivatePUT(address, params={}) {
        return await this.request("PUT", address, params, true, true)
    }

    /**
     * @type {HttpPrivate}
     */
    async simplePrivateDELETE(address, params={}) {
        return await this.request("DELETE", address, params, true, true)
    }
    // ############## Full Requests
    /**
     * @type {HttpPublic}
     */
    async publicGET(address, params = {}) {
        return await this.request("GET", address, params, false)
    }

    /**
     * @type {HttpPublic}
     */
    async publicPOST(address, params = {}) {
        return await this.request("POST", address, params, false)
    }

    /**
     * @type {HttpPublic}
     */
    async publicPUT(address, params = {}) {
        return await this.request("PUT", address, params, false)
    }

    /**
     * @type {HttpPublic}
     */
    async publicDELETE(address, params = {}) {
        return await this.request("DELETE", address, params, false)
    }

    /**
     * @type {HttpPrivate}
     */
    async privateGET(address, params={}) {
        return await this.request("GET", address, params, true)
    }

    /**
     * @type {HttpPrivate}
     */
    async privatePOST(address, params={}) {
        return await this.request("POST", address, params, true)
    }

    /**
     * @type {HttpPrivate}
     */
    async privatePUT(address, params={}) {
        return await this.request("PUT", address, params, true)
    }

    /**
     * @type {HttpPrivate}
     */
    async privateDELETE(address, params={}) {
        return await this.request("DELETE", address, params, true)
    }

    /**
     * @type {HttpPublicRequest}
     */
    async publicRequest(method, address, params = {}) {
        return await this.request(method, address, params, false)
    }

    /**
     * @type {HttpPrivateRequest}
     */
    async privateRequest(method, address, params = {}) {
        return await this.request(method, address, params, true)
    }
}
