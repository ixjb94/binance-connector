import { Websocket } from "./websocket.js"
import { Http } from "./http.js"

// ############################ Types
/**
 * CoinM constructor
 * @typedef {Object} CoinMConstructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [recvWindow]
 * @property {Number} [reconnectSleep]
 * @property {Boolean} [isTestNet]
 */
// ################################### API
// ########### ENUM
/**
 * @typedef {"DELIVERY_CONTRACT" | "PERPETUAL_CONTRACT"} EnumCoinmSymbolType
 */

/**
 * @typedef {"PERPETUAL" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "CURRENT_QUARTER_DELIVERING" | "NEXT_QUARTER_DELIVERING" | "PERPETUAL_DELIVERING"} EnumCoinmContractType
 */
 
/**
 * @typedef {"PENDING_TRADING" | "TRADING" | "PRE_DELIVERING" | "DELIVERING" | "DELIVERED"} EnumCoinmContractStatus
 */
 
/**
 * @typedef {"NEW" | "PARTIALLY_FILLED" | "FILLED" | "CANCELED" | "EXPIRED"} EnumCoinmOrderStatus
 */

/**
 * @typedef {"LIMIT" | "MARKET" | "STOP" | "STOP_MARKET" | "TAKE_PROFIT" | "TAKE_PROFIT_MARKET" | "TRAILING_STOP_MARKET"} EnumCoinmOrderType
 */
 
/**
 * @typedef {"BUY" | "SELL"} EnumCoinmOrderSide
 */

/**
 * @typedef {"BOTH" | "LONG" | "SHORT"} EnumCoinmPositionSide
 */
 
/**
 * @typedef {"GTC" | "IOC" | "FOK" | "GTX"} EnumCoinmTimeInForce
 */
 
/**
 * @typedef {"MARK_PRICE" | "CONTRACT_PRICE"} EnumCoinmWorkingType
 */
 
/**
 * @typedef {"ACK" | "RESULT"} EnumCoinmNewOrderRespType
 */

/**
 * @typedef {"1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M"} EnumCoinmIntervals
 */


/**
 * @typedef {"REQUEST_WEIGHT" | "ORDERS"} EnumCoinmRateLimitType
 */

/**
 * @typedef {"MINUTE"} EnumCoinmRateLimitInterval
 */
// ########### Market Data
/**
 * @typedef {Object} CoinmPing
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmExchangeInfo
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmDepth
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmHistoricalTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [fromId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmAggTrades
 * @property {String} symbol
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPremiumIndex
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFundingRate
 * @property {String} symbol
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmKlines
 * @property {String} symbol
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmContinuousKlines
 * @property {String} pair
 * @property {EnumCoinmContractType} contractType
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmIndexPriceKlines
 * @property {String} pair
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmMarkPriceKlines
 * @property {String} symbol
 * @property {EnumCoinmIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTicker24hr
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTickerPrice
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmTickerBookTicker
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmOpenInterest
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataOpenInterestHist
 * @property {String} pair
 * @property {EnumCoinmContractType} contractType
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataTopLongShortAccountRatio
 * @property {String} pair
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataTopLongShortPositionRatio
 * @property {String} pair
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataGlobalLongShortAccountRatio
 * @property {String} pair
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataTakerBuySellVol
 * @property {String} pair
 * @property {"ALL" | "CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL"} contractType
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmFuturesDataBasis
 * @property {String} pair
 * @property {"CURRENT_QUARTER" | "NEXT_QUARTER" | "PERPETUAL"} contractType
 * @property {"5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "12h" | "1d"} period
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */
// ########### Account/Trades Endpoints
/**
 * @typedef {Object} CoinmPostPositionSideDual
 * @property {"true" | "false"} dualSidePosition "true": Hedge Mode; "false": One-way Mode
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPositionSideDual
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPostOrder
 * @property {String} symbol
 * @property {EnumCoinmOrderSide} side
 * @property {EnumCoinmPositionSide} [positionSide]
 * @property {EnumCoinmOrderType} type
 * @property {EnumCoinmTimeInForce} [timeInForce]
 * @property {Number} quantity
 * @property {"true" | "false"} [reduceOnly]
 * @property {Number} [price]
 * @property {String} [newClientOrderId]
 * @property {Number} [stopPrice]
 * @property {"true" | "false"} [closePosition]
 * @property {Number} [activationPrice]
 * @property {Number} [callbackRate]
 * @property {EnumCoinmWorkingType} [workingType]
 * @property {String} [priceProtect]
 * @property {EnumCoinmNewOrderRespType} [newOrderRespType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPutOrder
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {String} symbol
 * @property {EnumCoinmOrderSide} side
 * @property {Number} [quantity]
 * @property {Number} [price]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPostBatchOrders
 * @property {CoinmPostOrder} batchOrders
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPutBatchOrders
 * @property {CoinmPutOrder} batchOrders
 * @property {Number} [recvWindow]
 */


/**
 * @typedef {Object} CoinmOrderAmendment
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmDeleteOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmDeleteAllOpenOrders
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmDeleteBatchOrders
 * @property {String} symbol
 * @property {Array<Number>} [orderIdList]
 * @property {Array<String>} [origClientOrderIdList]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPostCountDownCancelAll
 * @property {String} symbol
 * @property {Number} countdownTime
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmOpenOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmOpenOrders
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmAllOrders
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmBalance
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPostLeverage
 * @property {String} symbol
 * @property {Number} leverage
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPostMarginType
 * @property {String} symbol
 * @property {"ISOLATED" | "CROSSED"} marginType
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPostPositionMargin
 * @property {String} symbol
 * @property {EnumCoinmPositionSide} [positionSide]
 * @property {Number} amount
 * @property {1 | 2} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPositionMarginHistory
 * @property {String} symbol
 * @property {1 | 2} [type]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPositionRisk
 * @property {String} [marginAsset]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmUserTrades
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [fromId]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmIncome
 * @property {String} [symbol]
 * @property {"TRANSFER" | "WELCOME_BONUS" | "FUNDING_FEE" | "REALIZED_PNL" | "COMMISSION" | "INSURANCE_CLEAR" | "DELIVERED_SETTELMENT"} [incomeType]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmLeverageBracket
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmLeverageBracket
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmForceOrders
 * @property {String} [symbol]
 * @property {"LIQUIDATION" | "ADL"} [autoCloseType]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmAdlQuantile
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmCommissionRate
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */
// ########### Portfolio Margin Endpoints
/**
 * @typedef {Object} CoinmPmExchangeInfo
 * @property {String} [symbol]
 * @property {String} [pair]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPmAccountInfo
 * @property {String} asset
 * @property {Number} [recvWindow]
 */

// ############# Listen Key
/**
 * @typedef {Object} CoinmPostListenKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmPutListenKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} CoinmDeleteListenKey
 * @property {Number} [recvWindow]
 */
// ############################ Types

/**
 * @namespace
 */
export class CoinM {
    
    ApiMap = {
        baseURL: "https://dapi.binance.com",
        baseURLTest: "https://testnet.binancefuture.com",
        wsBaseURL: "wss://dstream.binance.com",
        wsBaseURLTest: "wss://dstream.binancefuture.com",
    }

    timestamp = Date.now()

    /**
     * @param { CoinMConstructor } options
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
     * @param {CoinmPing} [params]
     */
    async ping(params) {
        return await this.http.publicGET("/dapi/v1/ping", params)
    }

    /**
     * @param {CoinmTime} [params]
     */
    async time(params) {
        return await this.http.publicGET("/dapi/v1/time", params)
    }

    /**
     * @param {CoinmExchangeInfo} [params]
     */
    async exchangeInfo(params) {
        return await this.http.publicGET("/dapi/v1/exchangeInfo", params)
    }

    /**
     * @param {CoinmDepth} params
     */
    async depth(params) {
        return await this.http.publicGET("/dapi/v1/depth", params)
    }
    
    /**
     * @param {CoinmTrades} params
     */
    async trades(params) {
        return await this.http.publicGET("/dapi/v1/trades", params)
    }
    
    /**
     * @param {CoinmHistoricalTrades} params
     */
    async historicalTrades(params) {
        return await this.http.publicGET("/dapi/v1/historicalTrades", params)
    }
    
    /**
     * @param {CoinmAggTrades} params
     */
    async aggTrades(params) {
        return await this.http.publicGET("/dapi/v1/aggTrades", params)
    }
    
    /**
     * @param {CoinmPremiumIndex} params
     */
    async premiumIndex(params) {
        return await this.http.publicGET("/dapi/v1/premiumIndex", params)
    }
    
    /**
     * @param {CoinmFundingRate} params
     */
    async fundingRate(params) {
        return await this.http.publicGET("/dapi/v1/fundingRate", params)
    }
    
    /**
     * @param {CoinmKlines} params
     */
    async klines(params) {
        return await this.http.publicGET("/dapi/v1/klines", params)
    }
    
    /**
     * @param {CoinmContinuousKlines} params
     */
    async continuousKlines(params) {
        return await this.http.publicGET("/dapi/v1/continuousKlines", params)
    }
    
    /**
     * @param {CoinmIndexPriceKlines} params
     */
    async indexPriceKlines(params) {
        return await this.http.publicGET("/dapi/v1/indexPriceKlines", params)
    }
    
    /**
     * @param {CoinmMarkPriceKlines} params
     */
    async markPriceKlines(params) {
        return await this.http.publicGET("/dapi/v1/markPriceKlines", params)
    }
    
    /**
     * @param {CoinmTicker24hr} params
     */
    async ticker24hr(params) {
        return await this.http.publicGET("/dapi/v1/ticker/24hr", params)
    }
    
    /**
     * @param {CoinmTickerPrice} params
     */
    async tickerPrice(params) {
        return await this.http.publicGET("/dapi/v1/ticker/price", params)
    }
   
    /**
     * @param {CoinmTickerBookTicker} params
     */
    async tickerBookTicker(params) {
        return await this.http.publicGET("/dapi/v1/ticker/bookTicker", params)
    }
    
    /**
     * @param {CoinmOpenInterest} params
     */
    async openInterest(params) {
        return await this.http.publicGET("/dapi/v1/openInterest", params)
    }
    
    /**
     * @param {CoinmFuturesDataOpenInterestHist} params
     */
    async dataOpenInterestHist(params) {
        return await this.http.publicGET("/futures/data/openInterestHist", params)
    }
    
    /**
     * @param {CoinmFuturesDataTopLongShortAccountRatio} params
     */
    async dataTopLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortAccountRatio", params)
    }
    
    /**
     * @param {CoinmFuturesDataTopLongShortPositionRatio} params
     */
    async dataTopLongShortPositionRatio(params) {
        return await this.http.publicGET("/futures/data/topLongShortPositionRatio", params)
    }
    
    /**
     * @param {CoinmFuturesDataGlobalLongShortAccountRatio} params
     */
    async dataGlobalLongShortAccountRatio(params) {
        return await this.http.publicGET("/futures/data/globalLongShortAccountRatio", params)
    }
    
    /**
     * @param {CoinmFuturesDataTakerBuySellVol} params
     */
    async dataTakerBuySellVol(params) {
        return await this.http.publicGET("/futures/data/takerBuySellVol", params)
    }
    
    /**
     * @param {CoinmFuturesDataBasis} params
     */
    async dataBasis(params) {
        return await this.http.publicGET("/futures/data/basis", params)
    }
    // ########################################### Account/Trades Endpoints
    // ########### Private
    /**
     * @param {CoinmPostPositionSideDual} params
     */
     async updatePositionSideDual(params) {
        return await this.http.privatePOST("/dapi/v1/positionSide/dual", params)
    }

    /**
     * @param {CoinmPositionSideDual} [params]
     */
     async positionSideDual(params) {
        return await this.http.privateGET("/dapi/v1/positionSide/dual", params)
    }

    /**
     * @param {CoinmPostOrder} params
     */
     async newOrder(params) {
        return await this.http.privatePOST("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmPutOrder} params
     */
     async updateOrder(params) {
        return await this.http.privatePUT("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmPostBatchOrders} params
     */
     async newBatchOrders(params) {
        return await this.http.privatePOST("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {CoinmPutBatchOrders} params
     */
     async updateBatchOrders(params) {
        return await this.http.privatePUT("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {CoinmOrderAmendment} params
     */
     async orderAmendment(params) {
        return await this.http.privateGET("/dapi/v1/orderAmendment", params)
    }

    /**
     * @param {CoinmOrder} params
     */
     async order(params) {
        return await this.http.privateGET("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmDeleteOrder} params
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/dapi/v1/order", params)
    }

    /**
     * @param {CoinmDeleteAllOpenOrders} params
     */
     async deleteAllOpenOrders(params) {
        return await this.http.privateDELETE("/dapi/v1/allOpenOrders", params)
    }

    /**
     * @param {CoinmDeleteBatchOrders} params
     */
     async deleteBatchOrders(params) {
        return await this.http.privateDELETE("/dapi/v1/batchOrders", params)
    }

    /**
     * @param {CoinmPostCountDownCancelAll} params
     */
     async newCountDownCancelAll(params) {
        return await this.http.privatePOST("/dapi/v1/countdownCancelAll", params)
    }

    /**
     * @param {CoinmOpenOrder} params
     */
     async openOrder(params) {
        return await this.http.privateGET("/dapi/v1/openOrder", params)
    }

    /**
     * @param {CoinmOpenOrders} params
     */
     async openOrders(params) {
        return await this.http.privateGET("/dapi/v1/openOrders", params)
    }

    /**
     * @param {CoinmAllOrders} params
     */
     async allOrders(params) {
        return await this.http.privateGET("/dapi/v1/allOrders", params)
    }

    /**
     * @param {CoinmBalance} [params]
     */
     async balance(params) {
        return await this.http.privateGET("/dapi/v1/balance", params)
    }

    /**
     * @param {CoinmAccount} [params]
     */
     async account(params) {
        return await this.http.privateGET("/dapi/v1/account", params)
    }

    /**
     * @param {CoinmPostLeverage} params
     */
     async updateLeverage(params) {
        return await this.http.privatePOST("/dapi/v1/leverage", params)
    }

    /**
     * @param {CoinmPostMarginType} params
     */
     async updateMarginType(params) {
        return await this.http.privatePOST("/dapi/v1/marginType", params)
    }

    /**
     * @param {CoinmPostPositionMargin} params
     */
     async updatePositionMargin(params) {
        return await this.http.privatePOST("/dapi/v1/positionMargin", params)
    }

    /**
     * @param {CoinmPositionMarginHistory} params
     */
     async positionMarginHistory(params) {
        return await this.http.privateGET("/dapi/v1/positionMargin/history", params)
    }

    /**
     * @param {CoinmPositionRisk} params
     */
     async positionRisk(params) {
        return await this.http.privateGET("/dapi/v1/positionRisk", params)
    }

    /**
     * @param {CoinmUserTrades} params
     */
     async userTrades(params) {
        return await this.http.privateGET("/dapi/v1/userTrades", params)
    }

    /**
     * @param {CoinmIncome} params
     */
     async income(params) {
        return await this.http.privateGET("/dapi/v1/income", params)
    }

    /**
     * @param {CoinmLeverageBracket} params
     */
     async leverageBracket(params) {
        return await this.http.privateGET("/dapi/v1/leverageBracket", params)
    }

    /**
     * @param {CoinmLeverageBracket} params
     */
     async leverageBracket(params) {
        return await this.http.privateGET("/dapi/v2/leverageBracket", params)
    }

    /**
     * @param {CoinmForceOrders} params
     */
     async forceOrders(params) {
        return await this.http.privateGET("/dapi/v1/forceOrders", params)
    }

    /**
     * @param {CoinmAdlQuantile} params
     */
     async adlQuantile(params) {
        return await this.http.privateGET("/dapi/v1/adlQuantile", params)
    }

    /**
     * @param {CoinmCommissionRate} params
     */
     async commissionRate(params) {
        return await this.http.privateGET("/dapi/v1/commissionRate", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Private
    /**
     * @param {CoinmPmExchangeInfo} params
     */
     async pmExchangeInfo(params) {
        return await this.http.publicGET("/dapi/v1/pmExchangeInfo", params)
    }
 
    /**
     * @param {CoinmPmAccountInfo} params
     */
     async pmAccountInfo(params) {
        return await this.http.publicGET("/dapi/v1/pmAccountInfo", params)
    }

    // ####################### ListenKey
    /**
     * @param { CoinmPostListenKey } [params]
     */
    async newListenKey(params) {
        return await this.http.privatePOST("/dapi/v1/listenKey", params)
    }

    /**
     * @param { CoinmPutListenKey } [params]
     */
    async keepAliveListenKey(params) {
        return await this.http.privatePUT("/dapi/v1/listenKey", params)
    }

    /**
     * @param { CoinmDeleteListenKey } [params]
     */
    async deleteListenKey(params) {
        return await this.http.privateDELETE("/dapi/v1/listenKey", params)
    }
}