import "server-only";
import { requireWorkspace } from "@/lib/providers/server";
export { runRecord, type RunRecord } from "@/lib/providers/data/contract";
export async function staffRuns() {
  const workspace = await requireWorkspace();
  return { ...workspace, runs: await workspace.data.research.listRuns() };
}
