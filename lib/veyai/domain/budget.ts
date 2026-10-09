import { z } from "zod";
/** Integer micro-USD; reserve the maximum before a future live provider call. */
export const budgetPolicySchema = z.strictObject({
  perRunMicroUsd: z.number().int().positive().safe(), perUserDailyMicroUsd: z.number().int().positive().safe(),
  maxInputTokens: z.number().int().positive().max(32000), maxOutputTokens: z.number().int().positive().max(4000),
  maxModelCalls: z.number().int().positive().max(4),
  inputMicroUsdPerToken: z.number().nonnegative(), outputMicroUsdPerToken: z.number().nonnegative(),
  maxToolCostMicroUsd: z.number().int().nonnegative().safe(), priceVersion: z.string().min(1),
});
export function maximumRunCost(value: unknown) {
  const p = budgetPolicySchema.parse(value);
  const reserve = Math.ceil(p.maxModelCalls * (p.maxInputTokens * p.inputMicroUsdPerToken + p.maxOutputTokens * p.outputMicroUsdPerToken) + p.maxToolCostMicroUsd);
  if (!Number.isSafeInteger(reserve) || reserve <= 0 || reserve > p.perRunMicroUsd || reserve > p.perUserDailyMicroUsd) throw new Error("Budget ceiling exceeded");
  return reserve;
}
