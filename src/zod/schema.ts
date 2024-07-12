import { z } from "zod";
import { getAllRPCMethodNames } from "../lib";

export const JSONRPCRequestSchema = z.object({
  jsonrpc: z.literal("2.0"),
  method: z.enum(getAllRPCMethodNames()),
  params: z.unknown().nullable(),
  id: z.union([z.coerce.number(), z.string()]).nullable(),
});
