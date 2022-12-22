import { Websocket } from "./websocket.js"
import { Http } from "./http.js"

// ############################ Types
/**
 * Futures constructor
 * @typedef {Object} FuturesConstructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [reconnectSleep]
 * @property {Number} [recvWindow]
 * @property {Boolean} [isTestNet]
 */

// ################################### API
// ########### ENUM
/**
 * @typedef {"FUTURE"} EnumSymbolType
 */

/**
 * @typedef {"PERPETUAL" | "CURRENT_MONTH" | "CURRENT_MONTH" | "NEXT_MONTH" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL_DELIVERING"} EnumContractType
 */

/**
 * @typedef {"PENDING_TRADING" | "TRADING" | "PRE_DELIVERING" | "DELIVERING" | "DELIVERED" | "PRE_SETTLE" | "SETTLING" | "CLOSE"} EnumContractStatus
 */

/**
 * @typedef {"NEW" | "PARTIALLY_FILLED" | "FILLED" | "CANCELED" | "REJECTED" | "EXPIRED"} EnumOrderStatus
 */

/**
 * @typedef {"LIMIT" | "MARKET" | "STOP" | "STOP_MARKET" | "TAKE_PROFIT" | "TAKE_PROFIT_MARKET" | "TRAILING_STOP_MARKET"} EnumOrderTypes
 */

/**
 * @typedef {"BUY" | "SELL"} EnumOrderSide
 */

/**
 * @typedef {"BOTH" | "LONG" | "SHORT"} EnumPositionSide
 */

/**
 * @typedef {"GTC" | "IOC" | "FOK" | "GTX"} EnumTimeInForce
 */

/**
 * @typedef {"MARK_PRICE" | "CONTRACT_PRICE"} EnumWorkingType
 */

/**
 * @typedef {"ACK" | "RESULT"} EnumNewOrderRespType
 */

/**
 * @typedef {"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M"} EnumIntervals
 */

/**
 * @typedef {"REQUEST_WEIGHT" | "ORDERS"} EnumRateLimitType
 */

/**
 * @typedef {"MINUTE"} EnumRateLimitInterval
 */

/**
 * @typedef {"ISOLATED" | "CROSSED"} EnumMarginType
 */

/**
 * @typedef {"LIQUIDATION" | "ADL"} EnumAutoCloseType
 */
// ########### Public
/**
 * @typedef {Object} FuturesJustRecvWindow
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDepth
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesHistoricalTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [fromId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesAggTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

//###### Add from here
/**
 * @typedef {Object} FuturesKlines
 * @property {String} symbol
 * @property {EnumIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesContinuousKlines
 * @property {String} pair
 * @property {EnumContractType} contractType
 * @property {EnumIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesIndexPriceKlines
 * @property {String} pair
 * @property {EnumIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesMarkPriceKlines
 * @property {String} symbol
 * @property {EnumIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPremiumIndex
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesFundingRate
 * @property {String} [symbol]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} Futures24hr
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesTickerPrice
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesTickerBookTicker
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesOpenInterest
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDataOpenInterestHist
 * @property {String} symbol
 * @property {EnumIntervals} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDataTopLongShortAccountRatio
 * @property {String} symbol
 * @property {EnumIntervals} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDataTopLongShortPositionRatio
 * @property {String} symbol
 * @property {EnumIntervals} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDataGlobalLongShortAccountRatio
 * @property {String} symbol
 * @property {EnumIntervals} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDataTakerLongShortRatio
 * @property {String} symbol
 * @property {EnumIntervals} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesLvtKlines
 * @property {String} symbol
 * @property {EnumIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesIndexInfo
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesAssetIndex
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetPmExchangeInfo
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPmAccountInfo
 * @property {String} asset
 * @property {Number} [recvWindow]
 */

// ########### Private
/**
 * POST: /sapi/v1/futures/transfer
 * @typedef {Object} FuturesPostFuturesTransfer
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} type
 * @property {Number} [recvWindow]
 */

/**
 * GET: /sapi/v1/futures/transfer
 * @typedef {Object} FuturesGetFuturesTransfer
 * @property {String} asset
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostPositionSideDual
 * @property {String} dualSidePosition
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetPositionSideDual
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostMultiAssetsMargin
 * @property {String} multiAssetsMargin
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetMultiAssetsMargin
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostOrder
 * @property {String} symbol
 * @property {EnumOrderSide} side
 * @property {EnumPositionSide} [positionSide]
 * @property {EnumOrderTypes} type
 * @property {EnumTimeInForce} [timeInForce]
 * @property {Number} quantity
 * @property {String} [reduceOnly]
 * @property {Number} [price]
 * @property {String} [newClientOrderId]
 * @property {Number} [stopPrice]
 * @property {String} [closePosition]
 * @property {Number} [activationPrice]
 * @property {Number} [callbackRate]
 * @property {EnumWorkingType} [workingType]
 * @property {String} [priceProtect]
 * @property {EnumNewOrderRespType} [newOrderRespType]
 * @property {Number} [recvWindow]
 *
 * @return {{id: "test"}}
 */

/**
 * @typedef {Object} FuturesPostBatchOrders
 * @property {Array<FuturesPostOrder>} batchOrders
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetOrder
 * @property {String} symbol
 * @property {Number} orderId
 * @property {String} origClientOrderId
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDeleteOrder
 * @property {String} symbol
 * @property {Number} orderId
 * @property {String} origClientOrderId
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDeleteAllOpenOrders
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDeleteBatchOrders
 * @property {String} symbol
 * @property {Array<Number>} [orderIdList]
 * @property {Array<String>} [origClientOrderIdList]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostCountDownCancelAll
 * @property {String} symbol
 * @property {Number} countdownTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetOpenOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetOpenOrders
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetAllOrders
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetBalance
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostLeverage
 * @property {String} symbol
 * @property {Number} leverage
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostMarginType
 * @property {String} symbol
 * @property {EnumMarginType} marginType
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostPositionMargin
 * @property {String} symbol
 * @property {EnumPositionSide} [positionSide]
 * @property {Number} [amount]
 * @property {Number} [type]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetPositionMarginHistory
 * @property {String} symbol
 * @property {String} [type]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetPositionRisk
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetUserTrades
 * @property {String} symbol
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [fromId]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetIncome
 * @property {String} symbol
 * @property {String} incomeType
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetLeverageBracket
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetADLQuantile
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetForceOrders
 * @property {String} [symbol]
 * @property {EnumAutoCloseType} [autoCloseType]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetApiTradingStatus
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetCommissionRate
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetIncomeAsyn
 * @property {Number} startTime
 * @property {Number} endTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesGetIncomeAsynId
 * @property {String} downloadId
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPostListenKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesPutListenKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} FuturesDeleteListenKey
 * @property {Number} [recvWindow]
 */
// ############################ Types

/**
 * @namespace
 */
export class Futures {
    
    ApiMap = {
        baseURL: "https://fapi.binance.com",
        baseURLTest: "https://testnet.binancefuture.com",
        wsAuthURL: "wss://fstream-auth.binance.com",
        wsBaseURL: "wss://fstream.binance.com",
        wsBaseURLTest: "wss://stream.binancefuture.com",
    }

    timestamp = Date.now()

    /**
     * @param {FuturesConstructor} options
     */
    constructor(options = {}) {

        let OPTIONS = {
            ...options,
            ...this.ApiMap,
            timestamp: this.timestamp,
        }

        // Coming from constructor
        this.api_key    = options.api_key
        this.api_secret = options.api_secret
        this.recvWindow = options.recvWindow
        this.isTestNet  = options.isTestNet

        // Default values
        this.recvWindow = this.recvWindow ?? 5000
        this.isTestNet  = this.isTestNet  ?? false
        
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
     * @param {FuturesJustRecvWindow} [params] - ping time
     */
    async ping(params) {
        return await this.http.publicGET("/fapi/v1/ping", params)
    }

    /**
     * @param {FuturesJustRecvWindow} [params]
     */
    async time(params) {
        return await this.http.publicGET("/fapi/v1/time", params)
    }

    /**
     * @param { FuturesJustRecvWindow } [params]
     */
     async exchangeInfo(params) {
        return await this.http.publicGET("/fapi/v1/exchangeInfo", params)
    }

    /**
     * @param {FuturesDepth} params 
     */
    async depth(params) {
        return await this.http.publicGET("/fapi/v1/depth", params)
    }

    /**
     * @param {FuturesTrades} params 
     */
     async trades(params) {
        return await this.http.publicGET("/fapi/v1/trades", params)
    }

    /**
     * @param {FuturesHistoricalTrades} params 
     */
    async historicalTrades(params) {
        return await this.http.publicGET("/fapi/v1/historicalTrades", params)
    }

    /**
     * @param {FuturesAggTrades} params 
     */
    async aggTrades(params) {
        return await this.http.publicGET("/fapi/v1/aggTrades", params)
    }

    /**
     * @param {FuturesKlines} params 
     */
    async klines(params) {
        return await this.http.publicGET("/fapi/v1/klines", params)
    }

    /**
     * @param {FuturesContinuousKlines} params 
     */
    async continuousKlines(params) {
        return await this.http.publicGET("/fapi/v1/continuousKlines", params)
    }

    /**
     * @param {FuturesIndexPriceKlines} params 
     */
    async indexPriceKlines(params) {
        return await this.http.publicGET("/fapi/v1/indexPriceKlines", params)
    }

    /**
     * @param {FuturesMarkPriceKlines} params 
     */
    async markPriceKlines(params) {
        return await this.http.publicGET("/fapi/v1/markPriceKlines", params)
    }

    /**
     * @param {FuturesPremiumIndex} params 
     */
    async premiumIndex(params) {
        return await this.http.publicGET("/fapi/v1/premiumIndex", params)
    }

    /**
     * @param {FuturesFundingRate} params 
     */
    async fundingRate(params) {
        return await this.http.publicGET("/fapi/v1/fundingRate", params)
    }

    /**
     * @param {Futures24hr} params 
     */
    async ticker24hr(params) {
        return await this.http.publicGET("/fapi/v1/ticker/24hr", params)
    }

    /**
     * @param {FuturesTickerPrice} params 
     */
    async tickerPrice(params) {
        return await this.http.publicGET("/fapi/v1/ticker/price", params)
    }

    /**
     * @param {FuturesTickerBookTicker} params 
     */
    async tickerBookTicker(params) {
        return await this.http.publicGET("/fapi/v1/ticker/bookTicker", params)
    }

    /**
     * @param {FuturesOpenInterest} params 
     */
    async openInterest(params) {
        return await this.http.publicGET("/fapi/v1/openInterest", params)
    }

    /**
     * @param {FuturesDataOpenInterestHist} params 
     */
    async dataOpenInterestHist(params) {
        return await this.http.publicGET("/futures/data/openInterestHist", params)
    }

    /**
     * @param {FuturesDataTopLongShortAccountRatio} params 
     */
    async dataTopLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortAccountRatio", params)
    }

    /**
     * @param {FuturesDataTopLongShortPositionRatio} params 
     */
    async dataTopLongShortPositionRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortPositionRatio", params)
    }

    /**
     * @param {FuturesDataGlobalLongShortAccountRatio} params 
     */
    async dataGlobalLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/globalLongShortAccountRatio", params)
    }

    /**
     * @param {FuturesDataTakerLongShortRatio} params 
     */
    async dataTakerLongShortRatio(params) {
        return await this.http.publicGET("/futures/data/takerlongshortRatio", params)
    }

    /**
     * @param {FuturesLvtKlines} params 
     */
    async lvtKlines(params) {
        return await this.http.publicGET("/fapi/v1/lvtKlines", params)
    }

    /**
     * @param {FuturesIndexInfo} params 
     */
    async indexInfo(params) {
        return await this.http.publicGET("/fapi/v1/indexInfo", params)
    }

    /**
     * @param {FuturesAssetIndex} params 
     */
    async assetIndex(params) {
        return await this.http.publicGET("/fapi/v1/assetIndex", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * @param {FuturesPostPositionSideDual} params 
     */
    async updatePositionSideDual(params) {
        return await this.http.privatePOST("/fapi/v1/positionSide/dual", params)
    }

    /**
     * @param {FuturesGetPositionSideDual} [params] 
     */
    async positionSideDual(params) {
        return await this.http.privateGET("/fapi/v1/positionSide/dual", params)
    }

    /**
     * @param {FuturesPostMultiAssetsMargin} params 
     */
    async updateMultiAssetsMargin(params) {
        return await this.http.privatePOST("/fapi/v1/multiAssetsMargin", params)
    }

    /**
     * @param {FuturesGetMultiAssetsMargin} [params] 
     */
    async multiAssetsMargin(params) {
        return await this.http.privateGET("/fapi/v1/multiAssetsMargin", params)
    }

    /**
     * @param {FuturesPostOrder} params 
     */
    async newOrder(params) {
        return await this.http.privatePOST("/fapi/v1/order", params)
    }

    /**
     * @param {FuturesPostBatchOrders} params
     */
    async newBatchOrders(params) {
        return await this.http.privatePOST("/fapi/v1/batchOrders", params)
    }

    /**
     * @param {FuturesGetOrder} params 
     */
    async order(params) {
        return await this.http.privateGET("/fapi/v1/order", params)
    }

    /**
     * @param {FuturesDeleteOrder} params 
     */
    async deleteOrder(params) {
        return await this.http.privateDELETE("/fapi/v1/order", params)
    }

    /**
     * @param {FuturesDeleteAllOpenOrders} params 
     */
    async deleteAllOpenOrders(params) {
        return await this.http.privateDELETE("/fapi/v1/allOpenOrders", params)
    }

    /**
     * @param {FuturesDeleteBatchOrders} params 
     */
    async deleteBatchOrders(params) {
        return await this.http.privateDELETE("/fapi/v1/batchOrders", params)
    }

    /**
     * @param {FuturesPostCountDownCancelAll} params 
     */
    async deleteCountDownCancelAll(params) {
        return await this.http.privatePOST("/fapi/v1/countdownCancelAll", params)
    }

    /**
     * @param {FuturesGetOpenOrder} params 
     */
    async openOrder(params) {
        return await this.http.privateGET("/fapi/v1/openOrder", params)
    }
    
    /**
     * @param {FuturesGetOpenOrders} params 
     */
     async openOrders(params) {
        return await this.http.privateGET("/fapi/v1/openOrders", params)
    }
    
    /**
     * @param {FuturesGetAllOrders} params 
     */
     async allOrders(params) {
        return await this.http.privateGET("/fapi/v1/allOrders", params)
    }
    
    /**
     * @param {FuturesGetBalance} [params] 
     */
     async balance(params) {
        return await this.http.privateGET("/fapi/v2/balance", params)
    }
    
    /**
     * @param { FuturesGetAccount } [params]
     */
     async account(params) {
        return await this.http.privateGET("/fapi/v2/account", params)
    }
    
    /**
     * @param {FuturesPostLeverage} params 
     */
     async updateLeverage(params) {
        return await this.http.privatePOST("/fapi/v1/leverage", params)
    }

    /**
     * @param { FuturesPostMarginType } params 
     */
     async updateMarginType(params) {
        return await this.http.privatePOST("/fapi/v1/marginType", params)
    }

    /**
     * @param {FuturesPostPositionMargin} params 
     */
     async updatePositionMargin(params) {
        return await this.http.privatePOST("/fapi/v1/positionMargin", params)
    }
    
    /**
     * @param {FuturesGetPositionMarginHistory} params 
     */
     async positionMarginHistory(params) {
        return await this.http.privateGET("/fapi/v1/positionMargin/history", params)
    }
    
    /**
     * @param {FuturesGetPositionRisk} params 
     */
     async positionRisk(params) {
        return await this.http.privateGET("/fapi/v2/positionRisk", params)
    }
    
    /**
     * @param {FuturesGetUserTrades} params 
     */
     async userTrades(params) {
        return await this.http.privateGET("/fapi/v1/userTrades", params)
    }
    
    /**
     * @param {FuturesGetIncome} params 
     */
     async income(params) {
        return await this.http.privateGET("/fapi/v1/income", params)
    }
    
    /**
     * @param {FuturesGetLeverageBracket} params 
     */
     async leverageBracket(params) {
        return await this.http.privateGET("/fapi/v1/leverageBracket", params)
    }
    
    /**
     * @param {FuturesGetADLQuantile} params 
     */
     async adlQuantile(params) {
        return await this.http.privateGET("/fapi/v1/adlQuantile", params)
    }
    
    /**
     * @param {FuturesGetForceOrders} params 
     */
     async forceOrders(params) {
        return await this.http.privateGET("/fapi/v1/forceOrders", params)
    }
    
    /**
     * @param {FuturesGetApiTradingStatus} params 
     */
     async apiTradingStatus(params) {
        return await this.http.privateGET("/fapi/v1/apiTradingStatus", params)
    }
    
    /**
     * @param {FuturesGetCommissionRate} params 
     */
     async commissionRate(params) {
        return await this.http.privateGET("/fapi/v1/commissionRate", params)
    }
    
    /**
     * @param {FuturesGetIncomeAsyn} params 
     */
     async incomeAsyn(params) {
        return await this.http.privateGET("/fapi/v1/income/asyn", params)
    }
    
    /**
     * @param {FuturesGetIncomeAsynId} params 
     */
     async incomeAsynId(params) {
        return await this.http.privateGET("/fapi/v1/income/asyn/id", params)
    }
    
    /**
     * @param { FuturesPostListenKey } [params]
     */
    async newListenKey(params) {
        return await this.http.privatePOST("/fapi/v1/listenKey", params)
    }

    /**
     * @param { FuturesPutListenKey } [params]
     */
    async keepAliveListenKey(params) {
        return await this.http.privatePUT("/fapi/v1/listenKey", params)
    }

    /**
     * @param { FuturesDeleteListenKey } [params]
     */
    async deleteListenKey(params) {
        return await this.http.privateDELETE("/fapi/v1/listenKey", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Public
    /**
     * @param { FuturesGetPmExchangeInfo } params
     */
     async pmExchangeInfo(params) {
        return await this.http.publicGET("/fapi/v1/pmExchangeInfo", params)
    }

    /**
     * @param { FuturesPmAccountInfo } params
     */
    async pmAccountInfo(params) {
        return await this.http.publicGET("/fapi/v1/pmAccountInfo", params)
    }
}