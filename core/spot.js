import { Websocket } from "./websocket.js"
import { Http } from "./http.js"

// ############################ Types
/**
 * Spot constructor
 * @typedef {Object} SpotConstructor
 * @property {String} [api_key]
 * @property {String} [api_secret]
 * @property {Number} [reconnectSleep]
 * @property {Number} [recvWindow]
 * @property {Boolean} [isTestNet]
 * @property {1 | 2 | 3} [changeBaseURL]
 * @property {Boolean} [changeWsStream]
 */

// ################################### API
// ########### ENUM
/**
 * @typedef {"MAIN_UMFUTURE" | "MAIN_CMFUTURE" | "MAIN_MARGIN" | "UMFUTURE_MAIN" | "UMFUTURE_MARGIN" | "CMFUTURE_MAIN" | "CMFUTURE_MARGIN" | "MARGIN_MAIN" | "MARGIN_UMFUTURE" | "MARGIN_CMFUTURE" | "ISOLATEDMARGIN_MARGIN" | "MARGIN_ISOLATEDMARGIN" | "ISOLATEDMARGIN_ISOLATEDMARGIN" | "MAIN_FUNDING" | "FUNDING_MAIN" | "FUNDING_UMFUTURE" | "UMFUTURE_FUNDING" | "MARGIN_FUNDING" | "FUNDING_MARGIN" | "FUNDING_CMFUTURE" | "CMFUTURE_FUNDING"} EnumSpotTransferTypes
 */

/**
 * @typedef {"PRE_TRADING" |"TRADING" | "POST_TRADING" | "END_OF_DAY" | "HALT" | "AUCTION_MATCH" | "BREAK"} EnumSpotSymbolStatus
 */
 
/**
 * @typedef {"SPOT" | "MARGIN" | "LEVERAGED" | "TRD_GRP_002" | "TRD_GRP_003" | "TRD_GRP_004" | "TRD_GRP_005"} EnumSpotPermissions
 */

/**
 * @typedef {"NEW" | "PARTIALLY_FILLED" | "FILLED" | "CANCELED" | "PENDING_CANCEL" | "REJECTED" | "EXPIRED"} EnumSpotOrderStatus
 */

/**
 * @typedef {"RESPONSE" | "EXEC_STARTED" | "ALL_DONE"} EnumSpotListStatusType
 */

/**
 * @typedef {"EXECUTING" | "ALL_DONE" | "REJECT"} EnumSpotListOrderStatus
 */

/**
 * @typedef {"OCO"} EnumSpotContingencyType
 */
 
/**
 * @typedef {"LIMIT" | "MARKET" | "STOP_LOSS" | "STOP_LOSS_LIMIT" | "TAKE_PROFIT" | "TAKE_PROFIT_LIMIT" | "LIMIT_MAKER"} EnumSpotOrderTypes
 */

/**
 * @typedef {"ACK" | "RESULT" | "FULL"} EnumSpotNewOrderRespType
 */

/**
 * @typedef {"BUY" | "SELL"} EnumSpotOrderSide
 */

/**
 * @typedef {"GTC" | "IOC" | "FOK"} EnumSpotTimeInForce
 */

/**
 * @typedef {"1s" | "1m" | "3m" | "5m" | "15m" | "30m" | "1h" | "2h" | "4h" | "6h" | "8h" | "12h" | "1d" | "3d" | "1w" | "1M"} EnumSpotIntervals
 */

/**
 * @typedef {"REQUEST_WEIGHT" | "ORDERS" | "RAW_REQUESTS"} EnumSpotRateLimitType
 */
 
/**
 * @typedef {"SECOND" | "MINUTE" | "DAY"} EnumSpotRateLimitIntervals
 */
// ########### no class
/**
 * @typedef {Object} SpotJustRecvWindow
 * @property {Number} [recvWindow]
 */

// ########### Wallet Endpoints
/**
 * @typedef {Object} SpotSystemStatus
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalConfigGetall
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccountSnapshot
 * @property {"SPOT" | "MARGIN" | "FUTURES"} type
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAccountDisableFastWithdrawSwitch
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAccountEnableFastWithdrawSwitch
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostCapitalWithdrawApply
 * @property {String} coin
 * @property {String} withdrawOrderId
 * @property {String} [network]
 * @property {String} address
 * @property {String} [addressTag]
 * @property {Number} amount
 * @property {Boolean} [transactionFeeFlag]
 * @property {String} [name]
 * @property {0 | 1} [walletType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositHisrec
 * @property {String} [coin]
 * @property {0 | 1 | 6} [status]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [offset]
 * @property {Number} [limit]
 * @property {String} [txId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalWithdrawHistory
 * @property {String} [coin]
 * @property {String} [withdrawOrderId]
 * @property {0 | 1 | 2 | 3 | 4 | 5 | 6} [status]
 * @property {Number} [offset]
 * @property {Number} [limit]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositAddress
 * @property {String} coin
 * @property {String} [network]
 * @property {Number} [recvWindow]
 */
/**
 * @typedef {Object} SpotAccountStatus
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccountApiTradingStatus
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetDribblet
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetDustBtc
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetDust
 * @property {Array} asset
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetAssetDividend
 * @property {String} [asset]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetAssetDetail
 * @property {String} [asset]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetTradeFee
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetTransfer
 * @property {EnumSpotTransferTypes} type
 * @property {String} asset
 * @property {Number} amount
 * @property {String} [fromSymbol]
 * @property {String} [toSymbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetTransfer
 * @property {EnumSpotTransferTypes} type
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {String} [fromSymbol]
 * @property {String} [toSymbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetGetFundingAsset
 * @property {String} [asset]
 * @property {true | false} [needBtcValuation] String true | false
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetGetUserAsset
 * @property {String} [asset]
 * @property {Boolean} [needBtcValuation]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAssetConvertTransfer
 * @property {String} clientTranId
 * @property {String} asset
 * @property {Number} amount
 * @property {String} targetAsset
 * @property {"MAIN" | "CARD"} [accountType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetConvertTransferQueryByPage
 * @property {Number} [tranId]
 * @property {String} [clientTranId]
 * @property {String} [asset]
 * @property {Number} startTime
 * @property {Number} endTime
 * @property {"MAIN" | "CARD"} [accountType]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAssetLedgerTransferCloudMiningQueryByPag
 * @property {Number} [tranId]
 * @property {String} [clientTranId]
 * @property {String} [asset]
 * @property {Number} startTime
 * @property {Number} endTime
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccountApiRestrictions
 * @property {Number} [recvWindow]
 */
// ########### Sub-Account
/**
 * @typedef {Object} SpotPostSubAccountVirtualSubAccount
 * @property {String} subAccountString
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountList
 * @property {String} [email]
 * @property {true | false} [isFreeze] String true | false
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountSubTransferHistory
 * @property {String} [fromEmail]
 * @property {String} [toEmail]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesInternalTransfer
 * @property {String} email
 * @property {1 | 2} futuresType
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountFuturesInternalTransfer
 * @property {String} fromEmail
 * @property {String} toEmail
 * @property {1 | 2} futuresType
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountAssets
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountSpotSummary
 * @property {String} [email]
 * @property {Number} [page]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositSubAddress
 * @property {String} email
 * @property {String} coin
 * @property {String} [network]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotCapitalDepositSubHisrec
 * @property {String} email
 * @property {String} [coin]
 * @property {0 | 1 | 6} [status]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [offset]
 * @property {String} [txId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountStatus
 * @property {String} [email]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountMarginEnable
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountMarginAccount
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountMarginAccountSummary
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountFuturesEnable
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccount
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccountSummary
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesPositionRisk
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountFuturesTransfer
 * @property {String} email
 * @property {String} asset
 * @property {Number} amount
 * @property {1 | 2 | 3 | 4} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountMarginTransfer
 * @property {String} email
 * @property {String} asset
 * @property {Number} amount
 * @property {1 | 2} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountTransferSubToSub
 * @property {String} toEmail
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountTransferSubToMaster
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountTransferSubUserHistory
 * @property {String} [asset]
 * @property {1 | 2} [type]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
 
/**
 * @typedef {Object} SpotPostSubAccountUniversalTransfer
 * @property {String} [fromEmail]
 * @property {String} [toEmail]
 * @property {"SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN"} fromAccountType
 * @property {"SPOT" | "USDT_FUTURE" | "COIN_FUTURE" | "MARGIN" | "ISOLATED_MARGIN"} toAccountType
 * @property {String} [clientTranId]
 * @property {String} [symbol]
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountUniversalTransfer
 * @property {String} [fromEmail]
 * @property {String} [toEmail]
 * @property {String} [clientTranId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccount
 * @property {Number} email
 * @property {1 | 2} futuresType
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesAccountSummary
 * @property {1 | 2} futuresType
 * @property {Number} [page]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountFuturesPositionRisk
 * @property {String} email
 * @property {1 | 2} futuresType
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountBlvtEnable
 * @property {String} email
 * @property {Boolean} enableBlvt
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountSubAccountApiIpRestriction
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {Boolean} ipRestrict
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountSubAccountApiIpRestrictionIpList
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {String} [ipAddress]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountSubAccountApiIpRestriction
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteSubAccountSubAccountApiIpRestrictionIpList
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {String} [ipAddress]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotSubAccountApiRestrictionsIpRestrictionThirdPartyList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostSubAccountSubAccountApiIpRestriction
 * @property {String} email
 * @property {String} subAccountApiKey
 * @property {"1" | "2" | "3"} status
 * @property {String} [thirdPartyName]
 * @property {String} [ipAddress]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostManagedSubaccountDeposit
 * @property {String} toEmail
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotManagedSubaccountAsset
 * @property {String} email
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostManagedSubaccountWithdraw
 * @property {String} fromEmail
 * @property {String} asset
 * @property {Number} amount
 * @property {Number} [transferDate]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotManagedSubaccountAccountSnapshot
 * @property {String} email
 * @property {"SPOT" | "MARGIN" | "FUTURES"} type
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Market Data
/**
 * @typedef {Object} SpotPing
 */

/**
 * @typedef {Object} SpotTime
 */

/**
 * @typedef {Object} SpotExchangeInfo
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {String} [permissions]
 */

/**
 * @typedef {Object} SpotDepth
 * @property {String} symbol
 * @property {Number} [limit]
 */
 
/**
 * @typedef {Object} SpotTrades
 * @property {String} symbol
 * @property {Number} [limit]
 */

/**
 * @typedef {Object} SpotHistoricalTrades
 * @property {String} symbol
 * @property {Number} [limit]
 * @property {Number} [fromId]
 */

/**
 * @typedef {Object} SpotAggTrades
 * @property {String} symbol
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 */

/**
 * @typedef {Object} SpotKlines
 * @property {String} symbol
 * @property {EnumSpotIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 */

/**
 * @typedef {Object} SpotUiKlines
 * @property {String} symbol
 * @property {EnumSpotIntervals} interval
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 */

/**
 * @typedef {Object} SpotAvgPrice
 * @property {String} symbol
 */

/**
 * @typedef {Object} SpotTicker24hr
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {"FULL" | "MINI"} [type]
 */

/**
 * @typedef {Object} SpotTickerPrice
 * @property {String} [symbol]
 * @property {String} [symbols]
 */

/**
 * @typedef {Object} SpotTickerBookTicker
 * @property {String} [symbol]
 * @property {String} [symbols]
 */

/**
 * one of symbol | symbols should send
 * @typedef {Object} SpotTicker
 * @property {String} [symbol]
 * @property {String} [symbols]
 * @property {String} [windowSize] 1m,2m....59m for minutes, 1h, 2h....23h - for hours, 1d...7d - for days
 * @property {"FULL" | "MINI"} [type]
 */
// ########### Spot Account/Trade
/**
 * @typedef {SpotPostOrder} SpotPostOrderTest
 */

/**
 * @typedef {Object} SpotPostOrder
 * @property {String} symbol
 * @property {EnumSpotOrderSide} side
 * @property {EnumSpotOrderTypes} type
 * @property {EnumSpotTimeInForce} [timeInForce]
 * @property {Number} quantity
 * @property {Number} [quoteOrderQty]
 * @property {Number} [price]
 * @property {String} [newClientOrderId]
 * @property {Number} [strategyId]
 * @property {Number} [strategyType]
 * @property {Number} [stopPrice]
 * @property {Number} [trailingDelta]
 * @property {Number} [icebergQty]
 * @property {EnumSpotNewOrderRespType} [newOrderRespType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteOpenOrders
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOrder
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostOrderCancelReplace
 * @property {String} symbol
 * @property {EnumSpotOrderSide} side
 * @property {EnumSpotOrderTypes} type
 * @property {"STOP_ON_FAILURE" | "ALLOW_FAILURE"} cancelReplaceMode
 * @property {EnumSpotTimeInForce} [timeInForce]
 * @property {Number} quantity
 * @property {Number} [quoteOrderQty]
 * @property {Number} [price]
 * @property {String} [cancelNewClientOrderId]
 * @property {String} [cancelOrigClientOrderId]
 * @property {String} [cancelOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [strategyId]
 * @property {Number} [strategyType]
 * @property {Number} [stopPrice]
 * @property {Number} [trailingDelta]
 * @property {Number} [icebergQty]
 * @property {EnumSpotNewOrderRespType} [newOrderRespType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOpenOrders
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAllOrders
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostOrderOco
 * @property {String} symbol
 * @property {String} [listClientOrderId]
 * @property {EnumSpotOrderSide} side
 * @property {Number} quantity
 * @property {String} [limitClientOrderId]
 * @property {Number} [limitStrategyId]
 * @property {Number} [limitStrategyType]
 * @property {Number} price
 * @property {Number} [limitIcebergQty]
 * @property {Number} [trailingDelta]
 * @property {String} [stopClientOrderId]
 * @property {Number} stopPrice
 * @property {Number} [stopStrategyId]
 * @property {Number} [stopStrategyType]
 * @property {Number} [stopLimitPrice]
 * @property {Number} [stopIcebergQty]
 * @property {EnumSpotTimeInForce} [stopLimitTimeInForce]
 * @property {EnumSpotNewOrderRespType} [newOrderRespType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteOrderList
 * @property {String} symbol
 * @property {Number} [orderListId]
 * @property {String} [listClientOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOrderList
 * @property {Number} [orderListId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAllOrderList
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotOpenOrderList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMyTrades
 * @property {String} symbol
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [fromId]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotRateLimitOrder
 * @property {Number} [recvWindow]
 */
// ########### Margin Account/Trade
/**
 * @typedef {Object} SpotPostMarginTransfer
 * @property {String} asset
 * @property {Number} amount
 * @property {1 | 2} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginLoa
 * @property {String} asset
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [symbol]
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginRepay
 * @property {String} asset
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [symbol]
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAsset
 * @property {String} asset
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginPair
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllAssets
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllPairs
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginPriceIndex
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginOrder
 * @property {Number} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {EnumSpotOrderSide} side
 * @property {EnumSpotOrderTypes} type
 * @property {Number} [quantity]
 * @property {Number} [quoteOrderQty]
 * @property {Number} [price]
 * @property {Number} [stopPrice]
 * @property {String} [newClientOrderId]
 * @property {Number} [icebergQty]
 * @property {EnumSpotNewOrderRespType} [newOrderRespType]
 * @property {"NO_SIDE_EFFECT" | "MARGIN_BUY" | "AUTO_REPAY"} [sideEffectType]
 * @property {EnumSpotTimeInForce} [timeInForce]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteMarginOrder
 * @property {String} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [recvWindow]
 */
/**
 * @typedef {Object} SpotDeleteMarginOpenOrders
 * @property {String} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginTransfer
 * @property {String} [asset]
 * @property {"ROLL_IN" | "ROLL_OUT"} [type]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {String} [archived] Default: false. Set to true for archived data from 6 months ago
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginLoan
 * @property {String} asset
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {String} [symbol]
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginLoan
 * @property {String} asset
 * @property {String} [isolatedSymbol]
 * @property {Number} [txId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {String} [archived] Default: false. Set to true for archived data from 6 months
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginRepay
 * @property {String} asset
 * @property {String} [isolatedSymbol]
 * @property {Number} [txId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {String} [archived] Default: false. Set to true for archived data from 6 months
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginInterestHistory
 * @property {String} [asset]
 * @property {String} [isolatedSymbol]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {String} [archived] Default: false. Set to true for archived data from 6 months
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginForceLiquidationRec
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {String} [isolatedSymbol]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOrder
 * @property {String} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [orderId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOpenOrders
 * @property {String} [symbol]
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllOrders
 * @property {String} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginOrderOco
 * @property {String} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {String} [listClientOrderId]
 * @property {EnumSpotOrderSide} side
 * @property {Number} quantity
 * @property {String} [limitClientOrderId]
 * @property {Number} price
 * @property {Number} [limitIcebergQty]
 * @property {String} [stopClientOrderId]
 * @property {Number} stopPrice
 * @property {Number} [stopLimitPrice]
 * @property {Number} [stopIcebergQty]
 * @property {EnumSpotTimeInForce} [stopLimitTimeInForce]
 * @property {EnumSpotNewOrderRespType} [newOrderRespType]
 * @property {"NO_SIDE_EFFECT" | "MARGIN_BUY" | "AUTO_REPAY"} [sideEffectType]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteMarginOrderList
 * @property {String} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [orderListId]
 * @property {String} [listClientOrderId]
 * @property {String} [newClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOrderList
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {String} [symbol]
 * @property {Number} [orderListId]
 * @property {String} [origClientOrderId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginAllOrderList
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {String} [symbol]
 * @property {Number} [fromId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginOpenOrderList
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginMyTrades
 * @property {String} symbol
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {Number} [orderId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [fromId]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginMaxBorrowable
 * @property {String} asset
 * @property {String} [isolatedSymbol]
 * @property {Number} [recvWindow]
 */
/**
 * @typedef {Object} SpotMarginMaxTransferable
 * @property {String} asset
 * @property {String} [isolatedSymbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginTradeCoeff
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginIsolatedTransfer
 * @property {String} [asset]
 * @property {String} [symbol]
 * @property {"SPOT" | "ISOLATED_MARGIN"} [transFrom]
 * @property {"SPOT" | "ISOLATED_MARGIN"} [transTo]
 * @property {Number} [amount]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedTransfer
 * @property {String} [asset]
 * @property {String} symbol
 * @property {"SPOT" | "ISOLATED_MARGIN"} [transFrom]
 * @property {"SPOT" | "ISOLATED_MARGIN"} [transTo]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {String} [archived] Default: false. Set to true for archived data from 6 months ago
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedAccount
 * @property {String} [symbols]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteMarginIsolatedAccount
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMarginIsolatedAccount
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedAccountLimit
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedPair
 * @property {String} symbol
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedAllPairs
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBnbBurn
 * * @property {"true" | "false"} [spotBNBBurn] "true" or "false"; Determines whether to use BNB to pay for trading fees on SPOT
 * @property {"true" | "false"} [interestBNBBurn] "true" or "false"; Determines whether to use BNB to pay for margin loan's interest
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBnbBurn
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginInterestRateHistory
 * @property {String} asset
 * @property {Number} [vipLevel]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginCrossMarginData
 * @property {Number} [vipLevel]
 * @property {String} [coin]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedMarginData
 * @property {Number} [vipLevel]
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginIsolatedMarginTier
 * @property {String} symbol
 * @property {Number} [tier]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginRateLimitOrder
 * @property {"TRUE" | "FALSE"} [isIsolated]
 * @property {String} [symbol]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMarginDribblet
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [recvWindow]
 */
// ########### Saving
/**
 * @typedef {Object} SpotLendingDailyProductList
 * @property {"ALL" | "SUBSCRIBABLE" | "UNSUBSCRIBABLE"} [status]
 * @property {"ALL" | "TRUE"} [featured]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingDailyUserLeftQuota
 * @property {String} productId
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLendingDailyPurchase
 * @property {String} productId
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingDailyUserRedemptionQuota
 * @property {String} productId
 * @property {"FAST" | "NORMAL"} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLendingDailyRedeem
 * @property {String} productId
 * @property {Number} amount
 * @property {"FAST" | "NORMAL"} type
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingDailyTokenPosition
 * @property {String} [asset]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingProjectList
 * @property {String} [asset]
 * @property {"ACTIVITY" | "CUSTOMIZED_FIXED"} type
 * @property {"ALL" | "SUBSCRIBABLE" | "UNSUBSCRIBABLE"} [status]
 * @property {Boolean} [isSortAsc]
 * @property {"START_TIME" | "LOT_SIZE" | "INTEREST_RATE" | "DURATION"} [sortBy]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLendingCustomizedFixedPurchase
 * @property {String} projectId
 * @property {Number} lot
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingProjectPositionList
 * @property {String} [asset]
 * @property {String} [projectId]
 * @property {"HOLDING" | "REDEEMED"} [status]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingUnionAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingUnionPurchaseRecord
 * @property {"DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED"} lendingType
 * @property {String} [asset]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingUnionRedemptionRecord
 * @property {"DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED"} lendingType
 * @property {String} [asset]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLendingUnionInterestHistory
 * @property {"DAILY" | "ACTIVITY" | "CUSTOMIZED_FIXED"} lendingType
 * @property {String} [asset]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLendingPositionChanged
 * @property {String} projectId
 * @property {Number} lot
 * @property {Number} [positionId]
 * @property {Number} [recvWindow]
 */
// ########### Staking
/**
 * @typedef {Object} SpotStakingProductList
 * @property {"STAKING" | "F_DEFI" | "L_DEFI"} product
 * @property {String} [asset]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostStakingPurchase
 * @property {"STAKING" | "F_DEFI" | "L_DEFI"} product
 * @property {String} productId
 * @property {Number} amount
 * @property {String} [renewable] true or false, default false. Active if product is "STAKING" or "L_DEFI"
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostStakingRedeem
 * @property {"STAKING" | "F_DEFI" | "L_DEFI"} product
 * @property {String} [positionId]
 * @property {String} productId
 * @property {Number} [amount]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotStakingPosition
 * @property {"STAKING" | "F_DEFI" | "L_DEFI"} product
 * @property {String} [productId]
 * @property {String} [asset]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotStakingStakingRecord
 * @property {"STAKING" | "F_DEFI" | "L_DEFI"} product
 * @property {"SUBSCRIPTION" | "REDEMPTION" | "INTEREST"} txnType
 * @property {String} [asset]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostStakingSetAutoStaking
 * @property {"STAKING" | "L_DEFI"} product there isn't any document for "F_DEFI"
 * @property {String} positionId
 * @property {String} renewable true or false
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotStakingPersonalLeftQuota
 * @property {"STAKING" | "F_DEFI" | "L_DEFI"} product
 * @property {String} productId
 * @property {Number} [recvWindow]
 */
// ########### Mining
/**
 * @typedef {Object} SpotMiningPubAlgoList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningPubCoinList
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningWorkerDetail
 * @property {String} algo
 * @property {String} userName
 * @property {String} workerName
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningWorkerList
 * @property {String} algo
 * @property {String} userName
 * @property {Number} [pageIndex]
 * @property {Number} [sort]
 * @property {1 | 2 | 3 | 4 | 5} [sortColumn]
 * @property {0 | 1 | 2 | 3} [workerStatus]
 * @property {Number} [recvWindow]
 */	

/**
 * @typedef {Object} SpotMiningPaymentList
 * @property {String} algo
 * @property {String} userName
 * @property {String} [coin]
 * @property {Number} [startDate]
 * @property {Number} [endDate]
 * @property {Number} [pageIndex]
 * @property {Number} [pageSize]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningPaymentOther
 * @property {String} algo
 * @property {String} userName
 * @property {String} [coin]
 * @property {Number} [startDate]
 * @property {Number} [endDate]
 * @property {Number} [pageIndex]
 * @property {Number} [pageSize]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningHashTransferConfigDetailsList
 * @property {Number} [pageIndex]
 * @property {Number} [pageSize]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningHashTransferProfitDetails
 * @property {Number} configId
 * @property {String} userName
 * @property {Number} [pageIndex]
 * @property {Number} [pageSize]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMiningHashTransferConfig
 * @property {String} userName
 * @property {String} algo
 * @property {Number} endDate
 * @property {Number} startDate
 * @property {String} toPoolUser
 * @property {Number} hashRate
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostMiningHashTransferConfigCancel
 * @property {Number} configId
 * @property {String} userName
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningStatisticsUserStatus
 * @property {String} algo
 * @property {String} userName
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningStatisticsUserList
 * @property {String} algo
 * @property {String} userName
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotMiningPaymentUid
 * @property {String} algo
 * @property {Number} [startDate]
 * @property {Number} [endDate]
 * @property {Number} [pageIndex]
 * @property {Number} [pageSize]
 * @property {Number} [recvWindow]
 */
// ########### Futures
/**
 * @typedef {Object} SpotPostFuturesTransfer
 * @property {String} asset
 * @property {Number} amount
 * @property {1 | 2 | 3 | 4} type
 * @property {Number} [recvWindow]
 */
 
/**
 * @typedef {Object} SpotFuturesTransfer
 * @property {String} asset
 * @property {Number} startTime
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [size]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotFuturesLoanBorrowHistory
 * @property {String} [coin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotFuturesLoanRepayHistory
 * @property {String} [coin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotFuturesLoanWallet
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotFuturesLoanAdjustCollateralHistory
 * @property {String} [loanCoin]
 * @property {String} [collateralCoin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotFuturesLoanLiquidationHistory
 * @property {String} [loanCoin]
 * @property {String} [collateralCoin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotFuturesLoanInterestHistory
 * @property {String} [collateralCoin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Futures Algo
/**
 * @typedef {Object} SpotPostAlgoFuturesNewOrderVp
 * @property {String} symbol
 * @property {"BUY" | "SELL"} side
 * @property {"BOTH" | "LONG" | "SHORT"} [positionSide]
 * @property {Number} quantity
 * @property {"LOW" | "MEDIUM" | "HIGH"} urgency
 * @property {String} [clientAlgoId]
 * @property {Boolean} [reduceOnly]
 * @property {Number} [limitPrice]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostAlgoFuturesNewOrderTwap
 * @property {String} symbol
 * @property {"BUY" | "SELL"} side
 * @property {"BOTH" | "LONG" | "SHORT"} [positionSide]
 * @property {Number} quantity
 * @property {Number} duration
 * @property {String} [clientAlgoId]
 * @property {Boolean} [reduceOnly]
 * @property {Number} [limitPrice]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotDeleteAlgoFuturesOrder
 * @property {Number} algoId
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAlgoFuturesOpenOrders
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAlgoFuturesHistoricalOrders
 * @property {String} [symbol]
 * @property {"BUY" | "SELL"} [side]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [pageSize]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotAlgoFuturesSubOrders
 * @property {Number} algoId
 * @property {Number} [page]
 * @property {Number} [pageSize]
 * @property {Number} [recvWindow]
 */
// ########### Portfolio
/**
 * @typedef {Object} SpotPortfolioAccount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPortfolioCollateralRate
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPortfolioPmLoan
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostPortfolioRepay
 * @property {Number} [recvWindow]
 */
// ########### BLVT
/**
 * @typedef {Object} SpotBlvtTokenInfo
 * @property {String} [tokenName]
 * @property {Number} [recvWindow]
 */

/**
 * Historical BLVT NAV Kline/Candlestick
 * @typedef {Object} SpotNoneNone
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBlvtSubscribe
 * @property {String} tokenName
 * @property {Number} cost
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBlvtSubscribeRecord
 * @property {String} [tokenName]
 * @property {Number} [id]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBlvtRedeem
 * @property {String} tokenName
 * @property {Number} [amount]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBlvtRedeemRecord
 * @property {String} [tokenName]
 * @property {Number} [id]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBlvtUserLimit
 * @property {String} [tokenName]
 * @property {Number} [recvWindow]
 */
// ########### BSwap
/**
 * @typedef {Object} SpotBswapPools
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapLiquidity
 * @property {Number} [poolId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBswapLiquidityAdd
 * @property {Number} poolId
 * @property {"COMBINATION" | "SINGLE"} [type]
 * @property {String} asset
 * @property {Number} quantity
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBswapLiquidityRemove
 * @property {Number} poolId
 * @property {"COMBINATION" | "SINGLE"} type
 * @property {Array} [asset]
 * @property {Number} shareAmount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapLiquidityOps
 * @property {Number} [operationId]
 * @property {Number} [poolId]
 * @property {"ADD" | "REMOVE"} [operation]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapQuote
 * @property {String} quoteAsset
 * @property {String} baseAsset
 * @property {Number} quoteQty
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBswapSwap
 * @property {String} quoteAsset
 * @property {String} baseAsset
 * @property {Number} quoteQty
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapSwap
 * @property {Number} [swapId]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {0 | 1 | 2} [status]
 * @property {String} [quoteAsset]
 * @property {String} [baseAsset]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapPoolConfigure
 * @property {Number} [poolId]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapAddLiquidityPreview
 * @property {Number} poolId
 * @property {"SINGLE" | "COMBINATION"} type
 * @property {String} quoteAsset
 * @property {Number} quoteQty
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapRemoveLiquidityPreview
 * @property {Number} poolId
 * @property {"SINGLE" | "COMBINATION"} type
 * @property {String} quoteAsset
 * @property {Number} shareAmount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapUnclaimedRewards
 * @property {0 | 1} [type]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostBswapClaimRewards
 * @property {0 | 1} [type]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotBswapClaimedHistory
 * @property {Number} [poolId]
 * @property {String} [assetRewards]
 * @property {0 | 1} [type]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Fiat
/**
 * @typedef {Object} SpotFiatOrders
 * @property {"0" | "1"} transactionType
 * @property {Number} [beginTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [rows]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotFiatPayments
 * @property {"0" | "1"} transactionType
 * @property {Number} [beginTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [rows]
 * @property {Number} [recvWindow]
 */
// ########### C2C
/**
 * @typedef {Object} SpotC2cOrderMatchListUserOrderHistory
 * @property {"BUY" | "SELL"} tradeType
 * @property {Number} [startTimestamp]
 * @property {Number} [endTimestamp]
 * @property {Number} [page]
 * @property {Number} [rows]
 * @property {Number} [recvWindow]
 */
// ########### VIP Loans
/**
 * @typedef {Object} SpotLoanVipOngoingOrders
 * @property {Number} [orderId]
 * @property {Number} [collateralAccountId]
 * @property {String} [loanCoin]
 * @property {String} [collateralCoin]
 * @property {Number} [current]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLoanVipRepay
 * @property {Number} orderId
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanVipRepayHistory
 * @property {Number} [orderId]
 * @property {String} [loanCoin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Crypto Loans
/**
 * @typedef {Object} SpotLoanIncome
 * @property {Number} [asset]
 * @property {"borrowIn" | "collateralSpent" | "repayAmount" | "collateralReturn" | "addCollateral" | "removeCollateral" | "collateralReturnAfterLiquidation"} [type]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLoanBorrow
 * @property {String} loanCoin
 * @property {Number} [loanAmount]
 * @property {String} collateralCoin
 * @property {Number} [collateralAmount]
 * @property {7 | 14 | 30 | 90 |180} loanTerm // 7/14/30/90/180 days
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanBorrowHistory
 * @property {Number} [orderId]
 * @property {String} [loanCoin]
 * @property {String} [collateralCoin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanOngoingOrders
 * @property {Number} [orderId]
 * @property {String} [loanCoin]
 * @property {String} [collateralCoin]
 * @property {Number} [current]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLoanRepay
 * @property {Number} orderId
 * @property {Number} amount
 * @property {1 | 2} [type]
 * @property {Boolean} [collateralReturn]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanRepayHistory
 * @property {Number} [orderId]
 * @property {String} [loanCoin]
 * @property {String} [collateralCoin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLoanAdjustLtv
 * @property {Number} orderId
 * @property {Number} amount
 * @property {"ADDITIONAL" | "REDUCED"} direction
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanLtvAdjustmentHistory
 * @property {Number} [orderId]
 * @property {String} [loanCoin]
 * @property {String} [collateralCoin]
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [current]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanLoanableData
 * @property {String} [loanCoin]
 * @property {Number} [vipLevel]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanCollateralData
 * @property {String} [collateralCoin]
 * @property {Number} [vipLevel]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotLoanRepayCollateralRate
 * @property {String} loanCoin
 * @property {String} collateralCoin
 * @property {Number} repayAmount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostLoanCustomizeMarginCall
 * @property {Number} [orderId]
 * @property {String} [collateralCoin]
 * @property {Number} marginCall
 * @property {Number} [recvWindow]
 */
// ########### Pay
/**
 * @typedef {Object} SpotPayTransactions
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Convert
/**
 * @typedef {Object} SpotConvertExchangeInfo
 * @property {String} [fromAsset]
 * @property {String} [toAsset]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotConvertAssetInfo
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostConvertGetQuote
 * @property {String} fromAsset
 * @property {String} toAsset
 * @property {Number} [fromAmount]
 * @property {Number} [toAmount]
 * @property {"10s" | "30s" | "1m" | "2m"} [validTime]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostConvertAcceptQuote
 * @property {String} quoteId
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotConvertOrderStatus
 * @property {String} orderId
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotConvertTradeFlow
 * @property {Number} startTime
 * @property {Number} endTime
 * @property {Number} [limit]
 * @property {Number} [recvWindow]
 */
// ########### Rebate
/**
 * @typedef {Object} SpotRebateTaxQuery
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [page]
 * @property {Number} [recvWindow]
 */
// ########### NFT
/**
 * @typedef {Object} SpotNftHistoryTransactions
 * @property {0 | 1 | 2 | 3 | 4} orderType
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [page]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotNftHistoryDeposit
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [page]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotNftHistoryWithdraw
 * @property {Number} [startTime]
 * @property {Number} [endTime]
 * @property {Number} [limit]
 * @property {Number} [page]
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotNftUserGetAsset
 * @property {Number} [limit]
 * @property {Number} [page]
 * @property {Number} [recvWindow]
 */
// ########### Binance Code
/**
 * @typedef {Object} SpotPostGiftcardCreateCode
 * @property {String} token
 * @property {Number} amount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostGiftcardRedeemCode
 * @property {String} code
 * @property {String} [externalUid]
 * @property {Number} [recvWindow]
 */
/**
 * @typedef {Object} SpotGiftcardVerify
 * @property {String} referenceNo
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotGiftcardCryptographyRsaPublicKey
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotPostGiftcardBuyCode
 * @property {String} baseToken
 * @property {String} faceToken
 * @property {Number} baseTokenAmount
 * @property {Number} [recvWindow]
 */

/**
 * @typedef {Object} SpotGiftcardBuyCodeTokenLimit
 * @property {String} baseToken
 * @property {Number} [recvWindow]
 */

// #################### Listen Key
// ########### Spot
/**
 * @typedef {Object} SpotPostListenKeySPOT
 */

/**
 * @typedef {Object} SpotPutListenKeySPOT
 * @property {String} listenKey
 */

/**
 * @typedef {Object} SpotDeleteListenKeySPOT
 * @property {String} listenKey
 */
// ########### Margin
/**
 * @typedef {Object} SpotPostListenKeyMARGIN
 */

/**
 * @typedef {Object} SpotPutListenKeyMARGIN
 * @property {String} listenKey
 */

/**
 * @typedef {Object} SpotDeleteListenKeyMARGIN
 * @property {String} listenKey
 */
// ########### Isolated Margin
/**
 * @typedef {Object} SpotPostListenKeyISOMARGIN
 * @property {String} symbol
 */

/**
 * @typedef {Object} SpotPutListenKeyISOMARGIN
 * @property {String} symbol
 * @property {String} listenKey
 */

/**
 * @typedef {Object} SpotDeleteListenKeyISOMARGIN
 * @property {String} symbol
 * @property {String} listenKey
 */
// ############################ Types

/**
 * @namespace
 */
export class Spot {
    
    ApiMap = {
        baseURL: "https://api.binance.com",
        baseURLTest: "https://testnet.binance.vision",
        wsBaseURL: "wss://stream.binance.com:443",
        wsBaseURLTest: "wss://testnet.binance.vision",
    }

    timestamp = Date.now()

    /**
     * @param {SpotConstructor} options
     */
    constructor(options = {}) {

        switch (options.changeBaseURL) {
            case 1:
                this.ApiMap.baseURL = "https://api1.binance.com"
                break;
            case 2:
                this.ApiMap.baseURL = "https://api2.binance.com"
                break;
            case 3:
                this.ApiMap.baseURL = "https://api3.binance.com"
                break;
            default:
                break;
        }

        if (options.changeWsStream) {
            this.ApiMap.wsBaseURL = "wss://stream.binance.com:9443"
        }

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

    // ########################################### Wallet Endpoints
    // ########### Public
    /**
     * @param {SpotSystemStatus} [params]
     */
    async systemStatus(params) {
        return await this.http.publicGET("/sapi/v1/system/status", params)
    }
    
    // ########### Private
    /**
     * @param {SpotCapitalConfigGetall} [params]
     */
    async capitalConfigGetAll(params) {
        return await this.http.privateGET("/sapi/v1/capital/config/getall", params)
    }


    /**
     * @param {SpotAccountSnapshot} params
     */
    async accountSnapshot(params) {
        return await this.http.privateGET("/sapi/v1/accountSnapshot", params)
    }

    /**
     * @param {SpotPostAccountDisableFastWithdrawSwitch} [params]
     */
    async accountDisableFastWithdrawSwitch(params) {
        return await this.http.privatePOST("/sapi/v1/account/disableFastWithdrawSwitch", params)
    }

    /**
     * @param {SpotPostAccountEnableFastWithdrawSwitch} [params]
     */
    async newAccountEnableFastWithdrawSwitch(params) {
        return await this.http.privatePOST("/sapi/v1/account/enableFastWithdrawSwitch", params)
    }

    /**
     * @param {SpotPostCapitalWithdrawApply} params
     */
    async newCapitalWithdrawApply(params) {
        return await this.http.privatePOST("/sapi/v1/capital/withdraw/apply", params)
    }

    /**
     * @param {SpotCapitalDepositHisrec} params
     */
    async capitalDepositHisrec(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/hisrec", params)
    }

    /**
     * @param {SpotCapitalWithdrawHistory} params
     */
    async capitalWithdrawHistory(params) {
        return await this.http.privateGET("/sapi/v1/capital/withdraw/history", params)
    }

    /**
     * @param {SpotCapitalDepositAddress} params
     */
    async capitalDepositAddress(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/address", params)
    }

    /**
     * @param {SpotAccountStatus} [params]
     */
    async accountStatus(params) {
        return await this.http.privateGET("/sapi/v1/account/status", params)
    }

    /**
     * @param {SpotAccountApiTradingStatus} [params]
     */
    async accountApiTradingStatus(params) {
        return await this.http.privateGET("/sapi/v1/account/apiTradingStatus", params)
    }

    /**
     * @param {SpotAssetDribblet} params
     */
    async assetDribblet(params) {
        return await this.http.privateGET("/sapi/v1/asset/dribblet", params)
    }

    /**
     * @param {SpotPostAssetDustBtc} [params]
     */
    async newAssetDustBTC(params) {
        return await this.http.privatePOST("/sapi/v1/asset/dust-btc", params)
    }

    /**
     * @param {SpotPostAssetDust} params
     */
    async newAssetDust(params) {
        return await this.http.privatePOST("/sapi/v1/asset/dust", params)
    }

    /**
     * @param {SpotAssetAssetDividend} params
     */
    async assetAssetDividend(params) {
        return await this.http.privateGET("/sapi/v1/asset/assetDividend", params)
    }
    
    /**
     * @param {SpotAssetAssetDetail} params
     */
    async assetAssetDetail(params) {
        return await this.http.privateGET("/sapi/v1/asset/assetDetail", params)
    }

    /**
     * @param {SpotAssetTradeFee} params
     */
    async assetTradeFee(params) {
        return await this.http.privateGET("/sapi/v1/asset/tradeFee", params)
    }

    /**
     * @param {SpotPostAssetTransfer} params
     */
    async newAssetTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/asset/transfer", params)
    }

    /**
     * @param {SpotAssetTransfer} params
     */
    async assetTransfer(params) {
        return await this.http.privateGET("/sapi/v1/asset/transfer", params)
    }

    /**
     * @param {SpotPostAssetGetFundingAsset} params
     */
    async assetGetFundingAsset(params) {
        return await this.http.privatePOST("/sapi/v1/asset/get-funding-asset", params)
    }

    /**
     * @param {SpotPostAssetGetUserAsset} params
     */
    async assetGetUserAsset(params) {
        return await this.http.privatePOST("/sapi/v3/asset/getUserAsset", params)
    }

    /**
     * @param {SpotPostAssetConvertTransfer} params
     */
    async newAssetConvertTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/asset/convert-transfer", params)
    }

    /**
     * @param {SpotAssetConvertTransferQueryByPage} params
     */
    async assetConvertTransferQueryByPage(params) {
        return await this.http.privateGET("/sapi/v1/asset/convert-transfer/queryByPage", params)
    }

    /**
     * @param {SpotAssetLedgerTransferCloudMiningQueryByPag} params
     */
    async assetLedgerTransferCloudMiningQueryByPage(params) {
        return await this.http.privateGET("/sapi/v1/asset/ledger-transfer/cloud-mining/queryByPage", params)
    }

    /**
     * @param {SpotAccountApiRestrictions} [params]
     */
    async accountApiRestrictions(params) {
        return await this.http.privateGET("/sapi/v1/account/apiRestrictions", params)
    }
    
    // ########################################### Sub-Account Endpoints
    // ########### Public
    // ########### Private
    /**
     * @param {SpotPostSubAccountVirtualSubAccount} params
     */
    async newSubAccountVirtualSubAccount(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/virtualSubAccount", params)
    }

    /**
     * @param {SpotSubAccountList} params
     */
    async subAccountList(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/list", params)
    }
 
    /**
     * @param {SpotSubAccountSubTransferHistory} params
     */
    async subAccountSubTransferHistory(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/sub/transfer/history", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesInternalTransfer} params
     */
    async subAccountFuturesInternalTransfer(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/internalTransfer", params)
    }
 
    /**
     * @param {SpotPostSubAccountFuturesInternalTransfer} params
     */
    async newSubAccountFuturesInternalTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/internalTransfer", params)
    }
 
    /**
     * @param {SpotSubAccountAssets} params
     */
    async subAccountAssets(params) {
        return await this.http.privateGET("/sapi/v3/sub-account/assets", params)
    }
 
    /**
     * @param {SpotSubAccountSpotSummary} params
     */
    async subAccountSpotSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/spotSummary", params)
    }
 
    /**
     * @param {SpotCapitalDepositSubAddress} params
     */
    async capitalDepositSubAddress(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subAddress", params)
    }
 
    /**
     * @param {SpotCapitalDepositSubHisrec} params
     */
    async capitalDepositSubHisrec(params) {
        return await this.http.privateGET("/sapi/v1/capital/deposit/subHisrec", params)
    }
 
    /**
     * @param {SpotSubAccountStatus} params
     */
    async subAccountStatus(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/status", params)
    }
 
    /**
     * @param {SpotPostSubAccountMarginEnable} params
     */
    async newSubAccountMarginEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/enable", params)
    }
 
    /**
     * @param {SpotSubAccountMarginAccount} params
     */
    async subAccountMarginAccount(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/account", params)
    }
 
    /**
     * @param {SpotSubAccountMarginAccountSummary} [params]
     */
    async subAccountMarginAccountSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/margin/accountSummary", params)
    }
 
    /**
     * @param {SpotPostSubAccountFuturesEnable} params
     */
    async newSubAccountFuturesEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/enable", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesAccount} params
     */
    async subAccountFuturesAccount(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/account", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesAccountSummary} [params]
     */
    async subAccountFuturesAccountSummary(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/accountSummary", params)
    }
 
    /**
     * @param {SpotSubAccountFuturesPositionRisk} params
     */
    async subAccountFuturesPositionRisk(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/futures/positionRisk", params)
    }
   
    /**
     * @param {SpotPostSubAccountFuturesTransfer} params
     */
    async newSubAccountFuturesTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/futures/transfer", params)
    }
   
    /**
     * @param {SpotPostSubAccountMarginTransfer} params
     */
    async newSubAccountMarginTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/margin/transfer", params)
    }
   
    /**
     * @param {SpotPostSubAccountTransferSubToSub} params
     */
    async newSubAccountTransferSubToSub(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToSub", params)
    }
   
    /**
     * @param {SpotPostSubAccountTransferSubToMaster} params
     */
    async newSubAccountTransferSubToMaster(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/transfer/subToMaster", params)
    }
   
    /**
     * @param {SpotSubAccountTransferSubUserHistory} params
     */
    async subAccountTransferSubUserHistory(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/transfer/subUserHistory", params)
    }
   
    /**
     * @param {SpotPostSubAccountUniversalTransfer} params
     */
    async newSubAccountUniversalTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/universalTransfer", params)
    }
   
    /**
     * @param {SpotSubAccountUniversalTransfer} params
     */
    async subAccountUniversalTransfer(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/universalTransfer", params)
    }
   
    /**
     * @param {SpotSubAccountFuturesAccount} params
     */
    async subAccountFuturesAccount(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/account", params)
    }
   
    /**
     * @param {SpotSubAccountFuturesAccountSummary} [params]
     */
    async subAccountFuturesAccountSummary(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/accountSummary", params)
    }
   
    /**
     * @param {SpotSubAccountFuturesPositionRisk} params
     */
    async subAccountFuturesPositionRisk(params) {
        return await this.http.privateGET("/sapi/v2/sub-account/futures/positionRisk", params)
    }
   
    /**
     * @param {SpotPostSubAccountBlvtEnable} params
     */
    async newSubAccountBlvtEnable(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/blvt/enable", params)
    }
   
    /**
     * @param {SpotPostSubAccountSubAccountApiIpRestriction} params
     */
    async newSubAccountSubAccountApiIpRestriction(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {SpotPostSubAccountSubAccountApiIpRestrictionIpList} params
     */
    async newSubAccountSubAccountApiIpRestrictionIpList(params) {
        return await this.http.privatePOST("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }
   
    /**
     * @param {SpotSubAccountSubAccountApiIpRestriction} params
     */
    async subAccountSubAccountApiIpRestriction(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {SpotDeleteSubAccountSubAccountApiIpRestrictionIpList} params
     */
    async deleteSubAccountSubAccountApiIpRestrictionIpList(params) {
        return await this.http.privateDELETE("/sapi/v1/sub-account/subAccountApi/ipRestriction/ipList", params)
    }
   
    /**
     * @param {SpotSubAccountApiRestrictionsIpRestrictionThirdPartyList} [params]
     */
    async subAccountApiRestrictionsIpRestrictionThirdPartyList(params) {
        return await this.http.privateGET("/sapi/v1/sub-account/apiRestrictions/ipRestriction/thirdPartyList", params)
    }
   
    /**
     * @param {SpotPostSubAccountSubAccountApiIpRestriction} params
     */
    async updateSubAccountSubAccountApiIpRestriction(params) {
        return await this.http.privatePOST("/sapi/v2/sub-account/subAccountApi/ipRestriction", params)
    }
   
    /**
     * @param {SpotPostManagedSubaccountDeposit} params
     */
    async newManagedSubaccountDeposit(params) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/deposit", params)
    }

    /**
     * @param {SpotManagedSubaccountAsset} params
     */
    async managedSubaccountAsset(params) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/asset", params)
    }

    /**
     * @param {SpotPostManagedSubaccountWithdraw} params
     */
    async newManagedSubaccountWithdraw(params) {
        return await this.http.privatePOST("/sapi/v1/managed-subaccount/withdraw", params)
    }

    /**
     * @param {SpotManagedSubaccountAccountSnapshot} params
     */
    async managedSubaccountAccountSnapshot(params) {
        return await this.http.privateGET("/sapi/v1/managed-subaccount/accountSnapshot", params)
    }
    // ########################################### Market Data Endpoints
    // ########### Public
    /**
     * @param {SpotPing} [params]
     */
     async ping() {
        return await this.http.simplePublicGET("/api/v3/ping", {})
    }

    /**
     * @param {SpotTime} [params]
     */
     async time() {
        return await this.http.simplePublicGET("/api/v3/time", {})
    }

    /**
     * @param {SpotExchangeInfo} params
     */
     async exchangeInfo(params) {
        return await this.http.simplePublicGET("/api/v3/exchangeInfo", params)
    }

    /**
     * @param {SpotDepth} params
     */
     async depth(params) {
        return await this.http.simplePublicGET("/api/v3/depth", params)
    }

    /**
     * @param {SpotTrades} params
     */
     async trades(params) {
        return await this.http.simplePublicGET("/api/v3/trades", params)
    }

    /**
     * @param {SpotHistoricalTrades} params
     */
     async historicalTrades(params) {
        return await this.http.simplePublicGET("/api/v3/historicalTrades", params)
    }

    /**
     * @param {SpotAggTrades} params
     */
     async aggTrades(params) {
        return await this.http.simplePublicGET("/api/v3/aggTrades", params)
    }

    /**
     * @param {SpotKlines} params
     */
     async klines(params) {
        return await this.http.simplePublicGET("/api/v3/klines", params)
    }

    /**
     * @param {SpotUiKlines} params
     */
     async uiKlines(params) {
        return await this.http.simplePublicGET("/api/v3/uiKlines", params)
    }

    /**
     * @param {SpotAvgPrice} params
     */
     async avgPrice(params) {
        return await this.http.simplePublicGET("/api/v3/avgPrice", params)
    }

    /**
     * @param {SpotTicker24hr} params
     */
     async ticker24hr(params) {
        return await this.http.simplePublicGET("/api/v3/ticker/24hr", params)
    }

    /**
     * @param {SpotTickerPrice} params
     */
     async tickerPrice(params) {
        return await this.http.simplePublicGET("/api/v3/ticker/price", params)
    }

    /**
     * @param {SpotTickerBookTicker} params
     */
     async tickerBookTicker(params) {
        return await this.http.simplePublicGET("/api/v3/ticker/bookTicker", params)
    }

    /**
     * @param {SpotTicker} params
     */
     async ticker(params) {
        return await this.http.simplePublicGET("/api/v3/ticker", params)
    }
    // ########################################### Spot Account/Trade
    // ########### Private
    /**
     * @param {SpotPostOrderTest} params
     */
     async newOrderTest(params) {
        return await this.http.privatePOST("/api/v3/order/test", params)
    }

    /**
     * @param {SpotPostOrder} params
     */
     async newOrder(params) {
        return await this.http.privatePOST("/api/v3/order", params)
    }

    /**
     * @param {SpotDeleteOrder} params
     */
     async deleteOrder(params) {
        return await this.http.privateDELETE("/api/v3/order", params)
    }

    /**
     * @param {SpotDeleteOpenOrders} params
     */
     async deleteOpenOrders(params) {
        return await this.http.privateDELETE("/api/v3/openOrders", params)
    }

    /**
     * @param {SpotOrder} params
     */
     async order(params) {
        return await this.http.privateGET("/api/v3/order", params)
    }

    /**
     * @param {SpotPostOrderCancelReplace} params
     */
     async newOrderCancelReplace(params) {
        return await this.http.privatePOST("/api/v3/order/cancelReplace", params)
    }

    /**
     * @param {SpotOpenOrders} params
     */
     async openOrders(params) {
        return await this.http.privateGET("/api/v3/openOrders", params)
    }

    /**
     * @param {SpotAllOrders} params
     */
     async allOrders(params) {
        return await this.http.privateGET("/api/v3/allOrders", params)
    }

    /**
     * @param {SpotPostOrderOco} params
     */
     async newOrderOco(params) {
        return await this.http.privatePOST("/api/v3/order/oco", params)
    }

    /**
     * @param {SpotDeleteOrderList} params
     */
     async deleteOrderList(params) {
        return await this.http.privateDELETE("/api/v3/orderList", params)
    }

    /**
     * @param {SpotOrderList} params
     */
     async orderList(params) {
        return await this.http.privateGET("/api/v3/orderList", params)
    }

    /**
     * @param {SpotAllOrderList} params
     */
     async allOrderList(params) {
        return await this.http.privateGET("/api/v3/allOrderList", params)
    }

    /**
     * @param {SpotOpenOrderList} [params]
     */
     async openOrderList(params) {
        return await this.http.privateGET("/api/v3/openOrderList", params)
    }

    /**
     * @param {SpotAccount} [params]
     */
     async account(params) {
        return await this.http.privateGET("/api/v3/account", params)
    }

    /**
     * @param {SpotMyTrades} params
     */
     async myTrades(params) {
        return await this.http.privateGET("/api/v3/myTrades", params)
    }

    /**
     * @param {SpotRateLimitOrder} params
     */
     async rateLimitOrder(params) {
        return await this.http.privateGET("/api/v3/rateLimit/order", params)
    }
    // ########################################### Margin Account/Trade
    // ########### Private
    /**
     * @param {SpotPostMarginTransfer} params
     */
     async newMarginTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/margin/transfer", params)
    }
    
    /**
     * @param {SpotPostMarginLoan} params
     */
     async newMarginLoan(params) {
        return await this.http.privatePOST("/sapi/v1/margin/loan", params)
    }
    
    /**
     * @param {SpotPostMarginRepay} params
     */
     async newMarginRepay(params) {
        return await this.http.privatePOST("/sapi/v1/margin/repay", params)
    }
    
    /**
     * @param {SpotMarginAsset} params
     */
     async marginAsset(params) {
        return await this.http.privateGET("/sapi/v1/margin/asset", params)
    }
    
    /**
     * @param {SpotMarginPair} params
     */
     async marginPair(params) {
        return await this.http.privateGET("/sapi/v1/margin/pair", params)
    }
    
    /**
     * @param {SpotMarginAllAssets} [params]
     */
     async marginAllAssets(params) {
        return await this.http.privateGET("/sapi/v1/margin/allAssets", params)
    }
    
    /**
     * @param {SpotMarginAllPairs} [params]
     */
     async marginAllPairs(params) {
        return await this.http.privateGET("/sapi/v1/margin/allPairs", params)
    }
    
    /**
     * @param {SpotMarginPriceIndex} params
     */
     async marginPriceIndex(params) {
        return await this.http.privateGET("/sapi/v1/margin/priceIndex", params)
    }
    
    /**
     * @param {SpotPostMarginOrder} params
     */
     async newMarginOrder(params) {
        return await this.http.privatePOST("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {SpotDeleteMarginOrder} params
     */
     async deleteMarginOrder(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {SpotDeleteMarginOpenOrders} params
     */
     async deleteMarginOpenOrders(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/openOrders", params)
    }
    
    /**
     * @param {SpotMarginTransfer} params
     */
     async marginTransfer(params) {
        return await this.http.privateGET("/sapi/v1/margin/transfer", params)
    }
    
    /**
     * @param {SpotMarginLoan} params
     */
     async marginLoan(params) {
        return await this.http.privateGET("/sapi/v1/margin/loan", params)
    }
    
    /**
     * @param {SpotMarginRepay} params
     */
     async marginRepay(params) {
        return await this.http.privateGET("/sapi/v1/margin/repay", params)
    }
    
    /**
     * @param {SpotMarginInterestHistory} params
     */
     async marginInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/margin/interestHistory", params)
    }
    
    /**
     * @param {SpotMarginForceLiquidationRec} params
     */
     async marginForceLiquidationRec(params) {
        return await this.http.privateGET("/sapi/v1/margin/forceLiquidationRec", params)
    }
    
    /**
     * @param {SpotMarginAccount} [params]
     */
     async marginAccount(params) {
        return await this.http.privateGET("/sapi/v1/margin/account", params)
    }
    
    /**
     * @param {SpotMarginOrder} params
     */
     async marginOrder(params) {
        return await this.http.privateGET("/sapi/v1/margin/order", params)
    }
    
    /**
     * @param {SpotMarginOpenOrders} params
     */
     async marginOpenOrders(params) {
        return await this.http.privateGET("/sapi/v1/margin/openOrders", params)
    }
    
    /**
     * @param {SpotMarginAllOrders} params
     */
     async marginAllOrders(params) {
        return await this.http.privateGET("/sapi/v1/margin/allOrders", params)
    }
    
    /**
     * @param {SpotPostMarginOrderOco} params
     */
     async newMarginOrderOco(params) {
        return await this.http.privatePOST("/sapi/v1/margin/order/oco", params)
    }
    
    /**
     * @param {SpotDeleteMarginOrderList} params
     */
     async deleteMarginOrderList(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/orderList", params)
    }
    
    /**
     * @param {SpotMarginOrderList} params
     */
     async marginOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/orderList", params)
    }
    
    /**
     * @param {SpotMarginAllOrderList} params
     */
     async marginAllOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/allOrderList", params)
    }
    
    /**
     * @param {SpotMarginOpenOrderList} params
     */
     async marginOpenOrderList(params) {
        return await this.http.privateGET("/sapi/v1/margin/openOrderList", params)
    }
    
    /**
     * @param {SpotMarginMyTrades} params
     */
     async marginMyTrades(params) {
        return await this.http.privateGET("/sapi/v1/margin/myTrades", params)
    }
    
    /**
     * @param {SpotMarginMaxBorrowable} params
     */
     async marginMaxBorrowable(params) {
        return await this.http.privateGET("/sapi/v1/margin/maxBorrowable", params)
    }
    
    /**
     * @param {SpotMarginMaxTransferable} params
     */
     async marginMaxTransferable(params) {
        return await this.http.privateGET("/sapi/v1/margin/maxTransferable", params)
    }
    
    /**
     * @param {SpotMarginTradeCoeff} [params]
     */
     async marginTradeCoeff(params) {
        return await this.http.privateGET("/sapi/v1/margin/tradeCoeff", params)
    }
    
    /**
     * @param {SpotPostMarginIsolatedTransfer} params
     */
     async newMarginIsolatedTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/transfer", params)
    }
    
    /**
     * @param {SpotMarginIsolatedTransfer} params
     */
     async marginIsolatedTransfer(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/transfer", params)
    }
    
    /**
     * @param {SpotMarginIsolatedAccount} params
     */
     async marginIsolatedAccount(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {SpotDeleteMarginIsolatedAccount} params
     */
     async deleteMarginIsolatedAccount(params) {
        return await this.http.privateDELETE("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {SpotPostMarginIsolatedAccount} params
     */
     async newMarginIsolatedAccount(params) {
        return await this.http.privatePOST("/sapi/v1/margin/isolated/account", params)
    }
    
    /**
     * @param {SpotMarginIsolatedAccountLimit} [params]
     */
     async marginIsolatedAccountLimit(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/accountLimit", params)
    }
    
    /**
     * @param {SpotMarginIsolatedPair} params
     */
     async marginIsolatedPair(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/pair", params)
    }
    
    /**
     * @param {SpotMarginIsolatedAllPairs} [params]
     */
     async marginIsolatedAllPairs(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolated/allPairs", params)
    }
    
    /**
     * @param {SpotPostBnbBurn} params
     */
     async newBnbBurn(params) {
        return await this.http.privatePOST("/sapi/v1/bnbBurn", params)
    }
    
    /**
     * @param {SpotBnbBurn} [params]
     */
     async bnbBurn(params) {
        return await this.http.privateGET("/sapi/v1/bnbBurn", params)
    }
    
    /**
     * @param {SpotMarginInterestRateHistory} params
     */
     async marginInterestRateHistory(params) {
        return await this.http.privateGET("/sapi/v1/margin/interestRateHistory", params)
    }
    
    /**
     * @param {SpotMarginCrossMarginData} params
     */
     async marginCrossMarginData(params) {
        return await this.http.privateGET("/sapi/v1/margin/crossMarginData", params)
    }
    
    /**
     * @param {SpotMarginIsolatedMarginData} params
     */
     async marginIsolatedMarginData(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginData", params)
    }
    
    /**
     * @param {SpotMarginIsolatedMarginTier} params
     */
     async marginIsolatedMarginTier(params) {
        return await this.http.privateGET("/sapi/v1/margin/isolatedMarginTier", params)
    }
    
    /**
     * @param {SpotMarginRateLimitOrder} params
     */
     async marginRateLimitOrder(params) {
        return await this.http.privateGET("/sapi/v1/margin/rateLimit/order", params)
    }
    
    /**
     * @param {SpotMarginDribblet} params
     */
     async marginDribblet(params) {
        return await this.http.privateGET("/sapi/v1/margin/dribblet", params)
    }
    // ########################################### Savings Endpoints
    // ########### Private
    /**
     * @param {SpotLendingDailyProductList} params
     */
     async lendingDailyProductList(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/product/list", params)
    }

    /**
     * @param {SpotLendingDailyUserLeftQuota} params
     */
     async lendingDailyUserLeftQuota(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userLeftQuota", params)
    }

    /**
     * @param {SpotPostLendingDailyPurchase} params
     */
     async newLendingDailyPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/purchase", params)
    }

    /**
     * @param {SpotLendingDailyUserRedemptionQuota} params
     */
     async lendingDailyUserRedemptionQuota(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/userRedemptionQuota", params)
    }

    /**
     * @param {SpotPostLendingDailyRedeem} params
     */
     async newLendingDailyRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/lending/daily/redeem", params)
    }

    /**
     * @param {SpotLendingDailyTokenPosition} params
     */
     async lendingDailyTokenPosition(params) {
        return await this.http.privateGET("/sapi/v1/lending/daily/token/position", params)
    }

    /**
     * @param {SpotLendingProjectList} params
     */
     async lendingProjectList(params) {
        return await this.http.privateGET("/sapi/v1/lending/project/list", params)
    }

    /**
     * @param {SpotPostLendingCustomizedFixedPurchase} params
     */
     async newLendingCustomizedFixedPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/lending/customizedFixed/purchase", params)
    }

    /**
     * @param {SpotLendingProjectPositionList} params
     */
     async lendingProjectPositionList(params) {
        return await this.http.privateGET("/sapi/v1/lending/project/position/list", params)
    }

    /**
     * @param {SpotLendingUnionAccount} [params]
     */
     async lendingUnionAccount(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/account", params)
    }

    /**
     * @param {SpotLendingUnionPurchaseRecord} params
     */
     async lendingUnionPurchaseRecord(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/purchaseRecord", params)
    }

    /**
     * @param {SpotLendingUnionRedemptionRecord} params
     */
     async lendingUnionRedemptionRecord(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/redemptionRecord", params)
    }

    /**
     * @param {SpotLendingUnionInterestHistory} params
     */
     async lendingUnionInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/lending/union/interestHistory", params)
    }

    /**
     * @param {SpotPostLendingPositionChanged} params
     */
     async newLendingPositionChanged(params) {
        return await this.http.privatePOST("/sapi/v1/lending/positionChanged", params)
    }
    // ########################################### Stacking Endpoints
    // ########### Private
    /**
     * @param {SpotStakingProductList} params
     */
     async stakingProductList(params) {
        return await this.http.privateGET("/sapi/v1/staking/productList", params)
    }

    /**
     * @param {SpotPostStakingPurchase} params
     */
     async newStakingPurchase(params) {
        return await this.http.privatePOST("/sapi/v1/staking/purchase", params)
    }

    /**
     * @param {SpotPostStakingRedeem} params
     */
     async newStakingRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/staking/redeem", params)
    }

    /**
     * @param {SpotStakingPosition} params
     */
     async stakingPosition(params) {
        return await this.http.privateGET("/sapi/v1/staking/position", params)
    }

    /**
     * @param {SpotStakingStakingRecord} params
     */
     async stakingStakingRecord(params) {
        return await this.http.privateGET("/sapi/v1/staking/stakingRecord", params)
    }

    /**
     * @param {SpotPostStakingSetAutoStaking} params
     */
     async newStakingSetAutoStaking(params) {
        return await this.http.privatePOST("/sapi/v1/staking/setAutoStaking", params)
    }

    /**
     * @param {SpotStakingPersonalLeftQuota} params
     */
     async stakingPersonalLeftQuota(params) {
        return await this.http.privateGET("/sapi/v1/staking/personalLeftQuota", params)
    }
    // ########################################### Mining Endpoints
    // ########### Private
    /**
     * @param {SpotMiningPubAlgoList} [params]
     */
     async miningPubAlgoList(params) {
        return await this.http.privateGET("/sapi/v1/mining/pub/algoList", params)
    }

    /**
     * @param {SpotMiningPubCoinList} [params]
     */
     async miningPubCoinList(params) {
        return await this.http.privateGET("/sapi/v1/mining/pub/coinList", params)
    }

    /**
     * @param {SpotMiningWorkerDetail} params
     */
     async miningWorkerDetail(params) {
        return await this.http.privateGET("/sapi/v1/mining/worker/detail", params)
    }

    /**
     * @param {SpotMiningWorkerList} params
     */
     async miningWorkerList(params) {
        return await this.http.privateGET("/sapi/v1/mining/worker/list", params)
    }

    /**
     * @param {SpotMiningPaymentList} params
     */
     async miningPaymentList(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/list", params)
    }

    /**
     * @param {SpotMiningPaymentOther} params
     */
     async miningPaymentOther(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/other", params)
    }

    /**
     * @param {SpotMiningHashTransferConfigDetailsList} params
     */
     async miningHashTransferConfigDetailsList(params) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/config/details/list", params)
    }

    /**
     * @param {SpotMiningHashTransferProfitDetails} params
     */
     async miningHashTransferProfitDetails(params) {
        return await this.http.privateGET("/sapi/v1/mining/hash-transfer/profit/details", params)
    }

    /**
     * @param {SpotPostMiningHashTransferConfig} params
     */
     async newMiningHashTransferConfig(params) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config", params)
    }

    /**
     * @param {SpotPostMiningHashTransferConfigCancel} params
     */
     async deleteMiningHashTransferConfigCancel(params) {
        return await this.http.privatePOST("/sapi/v1/mining/hash-transfer/config/cancel", params)
    }

    /**
     * @param {SpotMiningStatisticsUserStatus} params
     */
     async miningStatisticsUserStatus(params) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/status", params)
    }

    /**
     * @param {SpotMiningStatisticsUserList} params
     */
     async miningStatisticsUserList(params) {
        return await this.http.privateGET("/sapi/v1/mining/statistics/user/list", params)
    }

    /**
     * @param {SpotMiningPaymentUid} params
     */
     async miningPaymentUid(params) {
        return await this.http.privateGET("/sapi/v1/mining/payment/uid", params)
    }
    // ########################################### Futures
    // ########### Private
    /**
     * @param {SpotPostFuturesTransfer} params
     */
     async newFuturesTransfer(params) {
        return await this.http.privatePOST("/sapi/v1/futures/transfer", params)
    }

    /**
     * @param {SpotFuturesTransfer} params
     */
     async futuresTransfer(params) {
        return await this.http.privateGET("/sapi/v1/futures/transfer", params)
    }

    /**
     * @param {SpotFuturesLoanBorrowHistory} params
     */
     async futuresLoanBorrowHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/borrow/history", params)
    }

    /**
     * @param {SpotFuturesLoanRepayHistory} params
     */
     async futuresLoanRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/repay/history", params)
    }

    /**
     * @param {SpotFuturesLoanWallet} [params]
     */
     async futuresLoanWallet(params) {
        return await this.http.privateGET("/sapi/v2/futures/loan/wallet", params)
    }

    /**
     * @param {SpotFuturesLoanAdjustCollateralHistory} params
     */
     async futuresLoanAdjustCollateralHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/adjustCollateral/history", params)
    }

    /**
     * @param {SpotFuturesLoanLiquidationHistory} params
     */
     async futuresLoanLiquidationHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/liquidationHistory", params)
    }

    /**
     * @param {SpotFuturesLoanInterestHistory} params
     */
     async futuresLoanInterestHistory(params) {
        return await this.http.privateGET("/sapi/v1/futures/loan/interestHistory", params)
    }
    // ########################################### Futures Algo Endpoints
    // ########### Private
    /**
     * @param {SpotPostAlgoFuturesNewOrderVp} params
     */
     async newAlgoFuturesNewOrderVp(params) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderVp", params)
    }

    /**
     * @param {SpotPostAlgoFuturesNewOrderTwap} params
     */
     async newAlgoFuturesNewOrderTwap(params) {
        return await this.http.privatePOST("/sapi/v1/algo/futures/newOrderTwap", params)
    }

    /**
     * @param {SpotDeleteAlgoFuturesOrder} params
     */
     async deleteAlgoFuturesOrder(params) {
        return await this.http.privateDELETE("/sapi/v1/algo/futures/order", params)
    }

    /**
     * @param {SpotAlgoFuturesOpenOrders} [params]
     */
     async algoFuturesOpenOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/openOrders", params)
    }

    /**
     * @param {SpotAlgoFuturesHistoricalOrders} params
     */
     async algoFuturesHistoricalOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/historicalOrders", params)
    }

    /**
     * @param {SpotAlgoFuturesSubOrders} params
     */
     async algoFuturesSubOrders(params) {
        return await this.http.privateGET("/sapi/v1/algo/futures/subOrders", params)
    }
    // ########################################### Portfolio Margin Endpoints
    // ########### Private
    /**
     * @param {SpotPortfolioAccount} [params]
     */
     async portfolioAccount(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/account", params)
    }

    /**
     * @param {SpotPortfolioCollateralRate} [params]
     */
     async portfolioCollateralRate(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/collateralRate", params)
    }

    /**
     * @param {SpotPortfolioPmLoan} [params]
     */
     async portfolioPmLoan(params) {
        return await this.http.privateGET("/sapi/v1/portfolio/pmLoan", params)
    }

    /**
     * @param {SpotPostPortfolioRepay} [params]
     */
     async newPortfolioRepay(params) {
        return await this.http.privatePOST("/sapi/v1/portfolio/repay", params)
    }
    // ########################################### BLVT Endpoints
    // ########### Private
    /**
     * @param {SpotBlvtTokenInfo} params
     */
     async blvtTokenInfo(params) {
        return await this.http.privateGET("/sapi/v1/blvt/tokenInfo", params)
    }

    /**
     * @param {SpotPostBlvtSubscribe} params
     */
     async newBlvtSubscribe(params) {
        return await this.http.privatePOST("/sapi/v1/blvt/subscribe", params)
    }

    /**
     * @param {SpotBlvtSubscribeRecord} params
     */
     async blvtSubscribeRecord(params) {
        return await this.http.privateGET("/sapi/v1/blvt/subscribe/record", params)
    }

    /**
     * @param {SpotPostBlvtRedeem} params
     */
     async newBlvtRedeem(params) {
        return await this.http.privatePOST("/sapi/v1/blvt/redeem", params)
    }

    /**
     * @param {SpotBlvtRedeemRecord} params
     */
     async blvtRedeemRecord(params) {
        return await this.http.privateGET("/sapi/v1/blvt/redeem/record", params)
    }

    /**
     * @param {SpotBlvtUserLimit} params
     */
     async blvtUserLimit(params) {
        return await this.http.privateGET("/sapi/v1/blvt/userLimit", params)
    }
    // ########################################### BSwap Endpoints
    // ########### Private
    /**
     * @param {SpotBswapPools} [params]
     */
     async bswapPools(params) {
        return await this.http.privateGET("/sapi/v1/bswap/pools", params)
    }

    /**
     * @param {SpotBswapLiquidity} params
     */
     async bswapLiquidity(params) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidity", params)
    }

    /**
     * @param {SpotPostBswapLiquidityAdd} params
     */
     async newBswapLiquidityAdd(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityAdd", params)
    }

    /**
     * @param {SpotPostBswapLiquidityRemove} params
     */
     async deleteBswapLiquidityRemove(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/liquidityRemove", params)
    }

    /**
     * @param {SpotBswapLiquidityOps} params
     */
     async bswapLiquidityOps(params) {
        return await this.http.privateGET("/sapi/v1/bswap/liquidityOps", params)
    }

    /**
     * @param {SpotBswapQuote} params
     */
     async bswapQuote(params) {
        return await this.http.privateGET("/sapi/v1/bswap/quote", params)
    }

    /**
     * @param {SpotPostBswapSwap} params
     */
     async newBswapSwap(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/swap", params)
    }

    /**
     * @param {SpotBswapSwap} params
     */
     async bswapSwap(params) {
        return await this.http.privateGET("/sapi/v1/bswap/swap", params)
    }

    /**
     * @param {SpotBswapPoolConfigure} params
     */
     async bswapPoolConfigure(params) {
        return await this.http.privateGET("/sapi/v1/bswap/poolConfigure", params)
    }

    /**
     * @param {SpotBswapAddLiquidityPreview} params
     */
     async bswapAddLiquidityPreview(params) {
        return await this.http.privateGET("/sapi/v1/bswap/addLiquidityPreview", params)
    }

    /**
     * @param {SpotBswapRemoveLiquidityPreview} params
     */
     async bswapRemoveLiquidityPreview(params) {
        return await this.http.privateGET("/sapi/v1/bswap/removeLiquidityPreview", params)
    }

    /**
     * @param {SpotBswapUnclaimedRewards} params
     */
     async bswapUnclaimedRewards(params) {
        return await this.http.privateGET("/sapi/v1/bswap/unclaimedRewards", params)
    }

    /**
     * @param {SpotPostBswapClaimRewards} params
     */
     async newBswapClaimRewards(params) {
        return await this.http.privatePOST("/sapi/v1/bswap/claimRewards", params)
    }

    /**
     * @param {SpotBswapClaimedHistory} params
     */
     async bswapClaimedHistory(params) {
        return await this.http.privateGET("/sapi/v1/bswap/claimedHistory", params)
    }
    // ########################################### Fiat Endpoints
    // ########### Private
    /**
     * @param {SpotFiatOrders} params
     */
     async fiatOrders(params) {
        return await this.http.privateGET("/sapi/v1/fiat/orders", params)
    }

    /**
     * @param {SpotFiatPayments} params
     */
     async fiatPayments(params) {
        return await this.http.privateGET("/sapi/v1/fiat/payments", params)
    }
    // ########################################### C2C Endpoints
    // ########### Private
    /**
     * @param {SpotC2cOrderMatchListUserOrderHistory} params
     */
     async c2cOrderMatchListUserOrderHistory(params) {
        return await this.http.privateGET("/sapi/v1/c2c/orderMatch/listUserOrderHistory", params)
    }
    // ########################################### VIP Loans Endpoints
    // ########### Private
    /**
     * @param {SpotLoanVipOngoingOrders} params
     */
     async loanVipOngoingOrders(params) {
        return await this.http.privateGET("/sapi/v1/loan/vip/ongoing/orders", params)
    }

    /**
     * @param {SpotPostLoanVipRepay} params
     */
     async newLoanVipRepay(params) {
        return await this.http.privatePOST("/sapi/v1/loan/vip/repay", params)
    }

    /**
     * @param {SpotLoanVipRepayHistory} params
     */
     async loanVipRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/vip/repay/history", params)
    }
    // ########################################### Crypto Loans Endpoints
    // ########### Private
    /**
     * @param {SpotLoanIncome} params
     */
     async loanIncome(params) {
        return await this.http.privateGET("/sapi/v1/loan/income", params)
    }

    /**
     * @param {SpotPostLoanBorrow} params
     */
     async newLoanBorrow(params) {
        return await this.http.privatePOST("/sapi/v1/loan/borrow", params)
    }

    /**
     * @param {SpotLoanBorrowHistory} params
     */
     async loanBorrowHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/borrow/history", params)
    }

    /**
     * @param {SpotLoanOngoingOrders} params
     */
     async loanOngoingOrders(params) {
        return await this.http.privateGET("/sapi/v1/loan/ongoing/orders", params)
    }

    /**
     * @param {SpotPostLoanRepay} params
     */
     async newLoanRepay(params) {
        return await this.http.privatePOST("/sapi/v1/loan/repay", params)
    }

    /**
     * @param {SpotLoanRepayHistory} params
     */
     async loanRepayHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/repay/history", params)
    }

    /**
     * @param {SpotPostLoanAdjustLtv} params
     */
     async newLoanAdjustLtv(params) {
        return await this.http.privatePOST("/sapi/v1/loan/adjust/ltv", params)
    }

    /**
     * @param {SpotLoanLtvAdjustmentHistory} params
     */
     async loanLtvAdjustmentHistory(params) {
        return await this.http.privateGET("/sapi/v1/loan/ltv/adjustment/history", params)
    }

    /**
     * @param {SpotLoanLoanableData} params
     */
     async loanLoanableData(params) {
        return await this.http.privateGET("/sapi/v1/loan/loanable/data", params)
    }

    /**
     * @param {SpotLoanCollateralData} params
     */
     async loanCollateralData(params) {
        return await this.http.privateGET("/sapi/v1/loan/collateral/data", params)
    }

    /**
     * @param {SpotLoanRepayCollateralRate} params
     */
     async loanRepayCollateralRate(params) {
        return await this.http.privateGET("/sapi/v1/loan/repay/collateral/rate", params)
    }

    /**
     * @param {SpotPostLoanCustomizeMarginCall} params
     */
     async newLoanCustomizeMarginCall(params) {
        return await this.http.privatePOST("/sapi/v1/loan/customize/margin_call", params)
    }
    // ########################################### Pay Endpoints
    // ########### Private
    /**
     * @param {SpotPayTransactions} params
     */
     async payTransactions(params) {
        return await this.http.privateGET("/sapi/v1/pay/transactions", params)
    }
    // ########################################### Convert Endpoints
    // ########### Private
    /**
     * @param {SpotConvertExchangeInfo} params
     */
     async convertExchangeInfo(params) {
        return await this.http.privateGET("/sapi/v1/convert/exchangeInfo", params)
    }

    /**
     * @param {SpotConvertAssetInfo} [params]
     */
     async convertAssetInfo(params) {
        return await this.http.privateGET("/sapi/v1/convert/assetInfo", params)
    }

    /**
     * @param {SpotPostConvertGetQuote} params
     */
     async newConvertGetQuote(params) {
        return await this.http.privatePOST("/sapi/v1/convert/getQuote", params)
    }

    /**
     * @param {SpotPostConvertAcceptQuote} params
     */
     async newConvertAcceptQuote(params) {
        return await this.http.privatePOST("/sapi/v1/convert/acceptQuote", params)
    }

    /**
     * @param {SpotConvertOrderStatus} params
     */
     async convertOrderStatus(params) {
        return await this.http.privateGET("/sapi/v1/convert/orderStatus", params)
    }

    /**
     * @param {SpotConvertTradeFlow} params
     */
     async convertTradeFlow(params) {
        return await this.http.privateGET("/sapi/v1/convert/tradeFlow", params)
    }
    // ########################################### Rebate Endpoints
    // ########### Private
    /**
     * @param {SpotRebateTaxQuery} params
     */
     async rebateTaxQuery(params) {
        return await this.http.privateGET("/sapi/v1/rebate/taxQuery", params)
    }
    // ########################################### NFT Endpoints
    // ########### Private
    /**
     * @param {SpotNftHistoryTransactions} params
     */
     async nftHistoryTransactions(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/transactions", params)
    }

    /**
     * @param {SpotNftHistoryDeposit} params
     */
     async nftHistoryDeposit(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/deposit", params)
    }

    /**
     * @param {SpotNftHistoryWithdraw} params
     */
     async nftHistoryWithdraw(params) {
        return await this.http.privateGET("/sapi/v1/nft/history/withdraw", params)
    }

    /**
     * @param {SpotNftUserGetAsset} params
     */
     async nftUserGetAsset(params) {
        return await this.http.privateGET("/sapi/v1/nft/user/getAsset", params)
    }
    // ########################################### Binance Code Endpoints
    // ########### Private
    /**
     * @param {SpotPostGiftcardCreateCode} params
     */
     async newGiftcardCreateCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/createCode", params)
    }

    /**
     * @param {SpotPostGiftcardRedeemCode} params
     */
     async newGiftcardRedeemCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/redeemCode", params)
    }

    /**
     * @param {SpotGiftcardVerify} params
     */
     async giftCardVerify(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/verify", params)
    }

    /**
     * @param {SpotGiftcardCryptographyRsaPublicKey} [params]
     */
     async giftCardCryptographyRsaPublicKey(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/cryptography/rsa-public-key", params)
    }

    /**
     * @param {SpotPostGiftcardBuyCode} params
     */
     async newGiftCardBuyCode(params) {
        return await this.http.privatePOST("/sapi/v1/giftcard/buyCode", params)
    }

    /**
     * @param {SpotGiftcardBuyCodeTokenLimit} params
     */
     async giftcardBuyCodeTokenLimit(params) {
        return await this.http.privateGET("/sapi/v1/giftcard/buyCode/token-limit", params)
    }

    // ################# Listen Key
    // ###### Listen Key - SPOT
    /**
     * @param { SpotPostListenKeySPOT } [params]
     */
    async newListenKeySPOT(params) {
        return await this.http.simplePublicPOST("/api/v3/userDataStream", params)
    }

    /**
     * @param { SpotPutListenKeySPOT} [params]
     */
    async keepAliveListenKeySPOT(params) {
        return await this.http.simplePublicPUT("/api/v3/userDataStream", params)
    }

    /**
     * @param { SpotDeleteListenKeySPOT } [params]
     */
    async deleteListenKeySPOT(params) {
        return await this.http.simplePublicDELETE("/api/v3/userDataStream", params)
    }
    // ###### Listen Key - Margin
    /**
     * @param { SpotPostListenKeyMARGIN } [params]
     */
     async newListenKeyMARGIN(params) {
        return await this.http.simplePublicPOST("/sapi/v1/userDataStream", params)
    }

    /**
     * @param { SpotPutListenKeyMARGIN } [params]
     */
    async keepAliveListenKeyMARGIN(params) {
        return await this.http.simplePublicPUT("/sapi/v1/userDataStream", params)
    }

    /**
     * @param { SpotDeleteListenKeyMARGIN } [params]
     */
    async deleteListenKeyMARGIN(params) {
        return await this.http.simplePublicDELETE("/sapi/v1/userDataStream", params)
    }
    // ###### Listen Key - Isolated Margin
    /**
     * @param { SpotPostListenKeyISOMARGIN } [params]
     */
     async newListenKeyISOMARGIN(params) {
        return await this.http.simplePublicPOST("/sapi/v1/userDataStream/isolated", params)
    }

    /**
     * @param { SpotPutListenKeyISOMARGIN } [params]
     */
    async keepAliveListenKeyISOMARGIN(params) {
        return await this.http.simplePublicPUT("/sapi/v1/userDataStream/isolated", params)
    }

    /**
     * @param { SpotDeleteListenKeyISOMARGIN } [params]
     */
    async deleteListenKeyISOMARGIN(params) {
        return await this.http.simplePublicDELETE("/sapi/v1/userDataStream/isolated", params)
    }
}