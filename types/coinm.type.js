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