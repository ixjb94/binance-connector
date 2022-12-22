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