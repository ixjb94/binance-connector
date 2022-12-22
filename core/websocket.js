import { EventEmitter } from "events"
import { WebSocket as WsClient } from "ws"

// ############################ Types
/**
 * @typedef {Object} Constructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [reconnectSleep] in milliseconds (second * 1000)
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
// ############################ Types

/**
 * @namespace
 * @extends EventEmitter
 */
export class Websocket extends EventEmitter {

    // for subscribing
    wsTopics = new Map()

    // for connecting
    wsLists = new Map()

    /**
     * @param {Constructor} options
     */
    constructor(options = {}) {
        super()
        this.api_key        = options.api_key
        this.api_secret     = options.api_secret
        this.wsBaseURL      = options.wsBaseURL
        this.wsBaseURLTest  = options.wsBaseURLTest
        this.wsAuthURL      = options.wsAuthURL
        this.isTestNet      = options.isTestNet
        this.reconnectSleep = options.reconnectSleep

        // Default
        if (!this.reconnectSleep) {
            this.reconnectSleep = 3000
        }
    }
    
    // ######################################## Overwrite addListener & on JSDoc
    /**
     * @typedef WsApiOptions
     * @property {String} api_key
     * @property {String} api_secret
     */

    /**
     * @callback WS
     * @param {WsClient} socket
     * @param {WsApiOptions} options
     */

    /**
     * @param {"USER_DATA" | "DATA"} eventName or anything else
     * @param {WS} callback
     */
     addListener(eventName, callback) {
        super.addListener(eventName, callback)
    }

    /**
     * @param {"USER_DATA" | "DATA"} eventName or anything else
     * @param {WS} callback
     */
    on(eventName, callback) {
        super.on(eventName, callback)
    }
    // ############################################

    /**
     * @param {Number} ms milliseconds
     */
    async sleep(ms) {
        try {
            return new Promise(resolve => setTimeout(resolve, ms))
        } catch {}
    }

    /**
     * @param {Number} wsID Example: 311
     */
    unsubscribe(wsID) {
        let topic = this.wsTopics.get(wsID)

        if (topic) {
            
            let ws      = topic.ws
            let request = topic.request

            console.log(`Unsubscribe to ${request.params}`)
            
            request.method = "UNSUBSCRIBE"

            ws.send(JSON.stringify(request))
            ws.close(1000, `Unsubscribed: ${request.params}`)
            this.wsTopics.delete(wsID)
        }
    }
    
    /**
     * 
     * @param {Array<String>} params Example: ["btcusdt@kline_1m", "etcusdt@kline_3m"]
     * @param {Number} id Example: 316
     * @param {"DATA"} eventName Example: "BTC" or anything else
     */
    subscribe(params, id, eventName="DATA") {
        let URL = this.wsBaseURL
        if (this.isTestNet) {
            console.log("## Websocket: Test Net ##")
            URL = this.wsBaseURLTest
        }

        let ws = new WsClient(URL + "/ws")

        let request = {
            method: "SUBSCRIBE",
            params,
            id,
        }

        ws.on("ping", (data) => {
            ws.ping()
            ws.pong()
        })

        ws.on("open", (event) => {

            console.log(`Subscribed to ${request.params}`)

            // Ask binance for subscription
            ws.send(JSON.stringify(request))

            // Add to subscribe list
            this.wsTopics.set(request.id, { ws, request })

            this.emit(eventName, ws, {
                api_key: this.api_key,
                api_secret: this.api_secret,
            })
        })

        ws.on("close", (code, reason) => {
            console.log(`Websocket Closed - Code: ${code} - Reason: ${reason}`)
            
            let wsReference = this.wsTopics.get(request.id)
            if (wsReference) {
                console.log(`Reconnecting after ${this.reconnectSleep} ms`)
                this.sleep(this.reconnectSleep).then(() => {
                    this.subscribe(params, request.id, eventName)
                })
            }
        })

        ws.on("error", (error) => console.log("Error Happens", error))
    }

    /**
     * @param {String} path Example: "/ws/bnbusdt@aggTrade"
     */
    disconnect(path) {
        let wsRef = this.wsLists.get(path)
        if (wsRef.ws) {
            let ws = wsRef.ws
            ws.close()
            this.wsLists.delete(path)
        }
    }

    /**
     * @param {String} path Example: "/ws/bnbusdt@aggTrade"
     * @param {String} eventName Example: "BTC" or anything else
     */
    connect(path, eventName="DATA") {

        let URL = this.wsBaseURL
        if (this.isTestNet) {
            console.log("## Websocket: Test Net ##")
            URL = this.wsBaseURLTest
        }

        let ws = new WsClient(URL + path)

        ws.on("open", (event) => {
            console.log(`Connection Opened for: ${path}`)

            // Add to connection list
            this.wsLists.set(path, {ws, eventName})
            
            this.emit(eventName, ws, {
                api_key: this.api_key,
                api_secret: this.api_secret,
            })
        })
        
        ws.on("close", (code, reason) => {
            console.log(`Connection closed for: ${path} - Code: ${code} - Reason: ${reason}`)

            let wsReference = this.wsLists.get(path)
            if (wsReference) {
                console.log(`Reconnecting after ${this.reconnectSleep} ms`)
                this.sleep(this.reconnectSleep).then(() => {
                    this.connect(path, eventName)
                })
            }
        })

        ws.on("error", (error) => console.log("Error Happens", error))
    }

    /**
     * @param {String} listenKey
     * @param {"USER_DATA"} eventName Example: USER_DATA or anything else
     */
    async userStream(listenKey, eventName) {
        let path = "/ws/" + listenKey
        this.connect(path, eventName)
    }
}