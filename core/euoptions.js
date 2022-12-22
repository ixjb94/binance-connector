import { Websocket } from "./websocket.js"
import { Http } from "./http.js"

// ############################ Types
/**
 * CoinM constructor
 * @typedef {Object} EuOptionsConstructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [reconnectSleep]
 * @property {Number} [recvWindow]
 */
// ########### ENUM
/**
 * @typedef {"CALL" | "PUT"} EnumEuOptionsContractType
 */
 
/**
 * @typedef {"BUY" | "SELL"} EnumEuOptionsOrderSide
 */

/**
 * @typedef {"LONG" | "SHORT"} EnumEuOptionsPositionSide
 */

/**
 * @typedef {"GTC" | "IOC" | "FOK"} EnumEuOptionsTimeInForce
 */

/**
 * @typedef {"ACK" | "RESULT"} EnumEuOptionsNewOrderRespType
 */

/**
 * @typedef {"LIMIT"} EnumEuOptionsOrderType
 */

/**
 * @typedef {"ACCEPTED" | "REJECTED" | "PARTIALLY_FILLED" | "FILLED" | "CANCELLED"} EnumEuOptionsOrderStatus
 */

/**
 * @typedef {"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M"} EnumEuOptionsIntervals
 */

/**
 * @typedef {"REQUEST_WEIGHT" | "ORDERS"} EnumEuOptionsRateLimitType
 */

/**
 * @typedef {"MINUTE"} EnumEuOptionsRateLimitInterval
 */
// ########### Market Data
/**
 * @typedef {Object} EuOptionsPing
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsExchangeInfo
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsDepth
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsHistoricalTrades
 * @property {String} symbol
 * @property {Number} [fromId]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsKlines
 * @property {String} symbol
 * @property {EnumEuOptionsIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsMark
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsTicker
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsIndex
 * @property {String} underlying
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsExerciseHistory
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsOpenInterest
 * @property {String} underlyingAsset
 * @property {String} expiration
 * @property {Number} [recvWindow]
 */
// ########### Account/Trades
/**
 * @typedef {Object} EuOptionsAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionPostTransfer
 * @property {String} currency
 * @property {"IN" | "OUT"} type
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsPostOrder
 * @property {String} symbol
 * @property {EnumEuOptionsOrderSide} side
 * @property {EnumEuOptionsOrderType} type
 * @property {Number} quantity
 * @property {Number} [price]
 * @property {Number} [timeInForce]
 * @property {Boolean} [reduceOnly]
 * @property {Boolean} [postOnly]
 * @property {EnumEuOptionsNewOrderRespType} [newOrderRespType]
 * @property {String} [clientOrderId]
 * @property {Boolean} [isMmp]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsPostBatchOrders 
 * @property {EuOptionsPostOrder} orders
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsDeleteOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [clientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsDeleteOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [clientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsDeleteBatchOrders
 * @property {String} symbol
 * @property {Array<Number>} [orderIds]
 * @property {Array<String>} [clientOrderIds]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsDeleteAllOpenOrder
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsDeleteAllOpenOrdersByUnderlying
 * @property {String} underlying
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsOpenOrders
 * @property {String} [symbol]
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsHistoryOrders
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsPosition
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsUserTrades
 * @property {String} [symbol]
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsExerciseRecord
 * @property {String} [symbol]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsBill
 * @property {String} currency
 * @property {Number} [recordId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Market Maker
/**
 * @typedef {Object} EuOptionsMarginAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuPostOptionsMmpSet 
 * @property {String} underlying
 * @property {Number} windowTimeInMilliseconds
 * @property {Number} frozenTimeInMilliseconds
 * @property {Number} qtyLimit
 * @property {Number} deltaLimit
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsMmp
 * @property {String} underlying
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsPostMmpReset
 * @property {String} underlying
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsPostCountdownCancelAll
 * @property {String} underlying
 * @property {Number} countdownTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsCountdownCancelAll
 * @property {String} [underlying]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsPostCountdownCancelAllHeartBeat
 * @property {String} underlyings
 * @property {Number} [recvWindow]
 */

// ############# Listen Key
/**
 * @typedef {Object} EuOptionsPostListenKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsPutListenKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} EuOptionsDeleteListenKey
 * @property {Number} [recvWindow]
 */
// ############################ Types

/**
 * @namespace
 */
export class EuOptions {
    
    ApiMap = {
        baseURL: "https://eapi.binance.com",
        wsBaseURL: "wss://nbstream.binance.com/eoptions",
    }

    timestamp = Date.now()

    /**
     * @param { EuOptionsConstructor } options
     */
    constructor(options = {}) {

        options.isTestNet = false

        let OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.api_key    = options.api_key
        this.api_secret = options.api_secret
        this.recvWindow = options.recvWindow

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        
        if (!OPTIONS.recvWindow) {
            OPTIONS.recvWindow = this.recvWindow
        }

        // Websocket
        this.ws = new Websocket(OPTIONS)
        
        // Utils
        this.http = new Http(OPTIONS)
    }

    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * @param {EuOptionsPing} [params]
     */
    async ping(params) {
        return await this.http.publicGET("/eapi/v1/ping", params)
    }

    /**
     * @param {EuOptionsTime} [params]
     */
    async time(params) {
        return await this.http.publicGET("/eapi/v1/time", params)
    }

    /**
     * @param {EuOptionsExchangeInfo} [params]
     */
    async exchangeInfo(params) {
        return await this.http.publicGET("/eapi/v1/exchangeInfo", params)
    }

    /**
     * @param {EuOptionsDepth} params
     */
    async depth(params) {
        return await this.http.publicGET("/eapi/v1/depth", params)
    }

    /**
     * @param {EuOptionsTrades} params
     */
    async trades(params) {
        return await this.http.publicGET("/eapi/v1/trades", params)
    }

    /**
     * @param {EuOptionsHistoricalTrades} params
     */
    async historicalTrades(params) {
        return await this.http.publicGET("/eapi/v1/historicalTrades", params)
    }

    /**
     * @param {EuOptionsKlines} params
     */
    async klines(params) {
        return await this.http.publicGET("/eapi/v1/klines", params)
    }

    /**
     * @param {EuOptionsMark} params
     */
    async mark(params) {
        return await this.http.publicGET("/eapi/v1/mark", params)
    }

    /**
     * @param {EuOptionsTicker} params
     */
    async ticker(params) {
        return await this.http.publicGET("/eapi/v1/ticker", params)
    }

    /**
     * @param {EuOptionsIndex} params
     */
    async index(params) {
        return await this.http.publicGET("/eapi/v1/index", params)
    }

    /**
     * @param {EuOptionsExerciseHistory} params
     */
    async exerciseHistory(params) {
        return await this.http.publicGET("/eapi/v1/exerciseHistory", params)
    }

    /**
     * @param {EuOptionsOpenInterest} params
     */
    async openInterest(params) {
        return await this.http.publicGET("/eapi/v1/openInterest", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * @param {EuOptionsAccount} [params]
     */
     async account(params) {
        return await this.http.privateGET("/eapi/v1/account", params)
    }

    /**
     * @param {EuOptionPostTransfer} params
     */
     async newTransfer(params) {
        return await this.http.privatePOST("/eapi/v1/transfer", params)
    }

    /**
     * @param {EuOptionsPostOrder} params
     */
     async newOrder(params) {
        return await this.http.privatePOST("/eapi/v1/order", params)
    }

    /**
     * @param {EuOptionsPostBatchOrders} params
     */
     async newBatchOrders(params) {
        return await this.http.privatePOST("/eapi/v1/batchOrders", params)
    }

    /**
     * @param {EuOptionsDeleteOrder} params
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/eapi/v1/order", params)
    }

    /**
     * @param {EuOptionsDeleteBatchOrders} params
     */
     async deleteBatchOrders(params) {
        return await this.http.privateDELETE("/eapi/v1/batchOrders", params)
    }

    /**
     * @param {EuOptionsDeleteAllOpenOrdersByUnderlying} params
     */
     async deleteAllOpenOrders(params) {
        return await this.http.privateDELETE("/eapi/v1/allOpenOrders", params)
    }

    /**
     * @param {EuOptionsDeleteAllOpenOrdersByUnderlying} params
     */
     async deleteAllOpenOrdersByUnderlying(params) {
        return await this.http.privateDELETE("/eapi/v1/allOpenOrdersByUnderlying", params)
    }

    /**
     * @param {EuOptionsOpenOrders} params
     */
     async openOrders(params) {
        return await this.http.privateGET("/eapi/v1/openOrders", params)
    }

    /**
     * @param {EuOptionsHistoryOrders} params
     */
     async historyOrders(params) {
        return await this.http.privateGET("/eapi/v1/historyOrders", params)
    }

    /**
     * @param {EuOptionsPosition} params
     */
     async position(params) {
        return await this.http.privateGET("/eapi/v1/position", params)
    }

    /**
     * @param {EuOptionsUserTrades} params
     */
     async userTrades(params) {
        return await this.http.privateGET("/eapi/v1/userTrades", params)
    }

    /**
     * @param {EuOptionsExerciseRecord} params
     */
     async exerciseRecord(params) {
        return await this.http.privateGET("/eapi/v1/exerciseRecord", params)
    }

    /**
     * @param {EuOptionsBill} params
     */
     async bill(params) {
        return await this.http.privateGET("/eapi/v1/bill", params)
    }
    // ########################################### Market Maker Endpoints
    // ########### Private
    /**
     * @param {EuOptionsMarginAccount} [params]
     */
     async marginAccount(params) {
        return await this.http.privateGET("/eapi/v1/marginAccount", params)
    }
    
    /**
     * @param {EuOptionsPostMmpReset} params
     */
     async newMmpSet(params) {
        return await this.http.privatePOST("/eapi/v1/mmpSet", params)
    }
    
    /**
     * @param {EuOptionsMmp} params
     */
     async mmp(params) {
        return await this.http.privateGET("/eapi/v1/mmp", params)
    }
    
    /**
     * @param {EuOptionsPostMmpReset} params
     */
     async newMmpReset(params) {
        return await this.http.privatePOST("/eapi/v1/mmpReset", params)
    }
    
    /**
     * @param {EuOptionsPostCountdownCancelAll} params
     */
     async newCountdownCancelAll(params) {
        return await this.http.privatePOST("/eapi/v1/countdownCancelAll", params)
    }
    
    /**
     * @param {EuOptionsCountdownCancelAll} params
     */
     async countdownCancelAll(params) {
        return await this.http.privateGET("/eapi/v1/countdownCancelAll", params)
    }
    
    /**
     * @param {EuOptionsPostCountdownCancelAllHeartBeat} params
     */
     async newCountdownCancelAllHeartBeat(params) {
        return await this.http.privateGET("/eapi/v1/countdownCancelAllHeartBeat", params)
    }

    // ####################### ListenKey
    /**
     * @param { EuOptionsPostListenKey } [params]
     */
     async newListenKey(params) {
        return await this.http.privatePOST("/eapi/v1/listenKey", params)
    }

    /**
     * @param { EuOptionsPutListenKey } [params]
     */
    async keepAliveListenKey(params) {
        return await this.http.privatePUT("/eapi/v1/listenKey", params)
    }

    /**
     * @param { EuOptionsDeleteListenKey } [params]
     */
    async deleteListenKey(params) {
        return await this.http.privateDELETE("/eapi/v1/listenKey", params)
    }
}