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