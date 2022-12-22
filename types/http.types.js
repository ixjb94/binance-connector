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

