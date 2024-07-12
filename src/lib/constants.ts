import type { ETH_RPC_METHODS_ENUM, ETH_RPC_METHODS_MAP } from "../types";

export const ETH_RPC_METHODS: ETH_RPC_METHODS_MAP = {
  eth_blockNumber: "eth_blockNumber",
  eth_getBlockByNumber: "eth_getBlockByNumber",
  eth_getBlockByHash: "eth_getBlockByHash",
  eth_getBalance: "eth_getBalance",
  eth_getCode: "eth_getCode",
  eth_gasPrice: "eth_gasPrice",
  eth_estimateGas: "eth_estimateGas",
  eth_getTransactionCount: "eth_getTransactionCount",
  eth_sendRawTransaction: "eth_sendRawTransaction",
  eth_getTransactionReceipt: "eth_getTransactionReceipt",
};

export const getAllRPCMethodNames = (): [
  ETH_RPC_METHODS_ENUM,
  ETH_RPC_METHODS_ENUM,
  ...ETH_RPC_METHODS_ENUM[],
] => {
  return Object.keys(ETH_RPC_METHODS).map((key) => {
    return ETH_RPC_METHODS[key as unknown as ETH_RPC_METHODS_ENUM];
  }) as [ETH_RPC_METHODS_ENUM, ETH_RPC_METHODS_ENUM, ...ETH_RPC_METHODS_ENUM[]];
};
