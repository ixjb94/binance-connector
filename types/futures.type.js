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