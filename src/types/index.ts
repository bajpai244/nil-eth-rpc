export type ETH_RPC_METHODS_ENUM =
  | "eth_blockNumber"
  | "eth_getBlockByNumber"
  | "eth_getBlockByHash"
  | "eth_getBalance"
  | "eth_getCode"
  | "eth_gasPrice"
  | "eth_estimateGas"
  | "eth_getTransactionCount"
  | "eth_sendRawTransaction"
  | "eth_getTransactionReceipt";

export type ETH_RPC_METHODS_MAP = {
  [key in ETH_RPC_METHODS_ENUM]: ETH_RPC_METHODS_ENUM;
};
