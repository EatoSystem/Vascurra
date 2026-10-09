import { describe, expect, it, vi } from "vitest";
vi.mock("server-only", () => ({}));
import { SupabaseDataProvider } from "@/lib/providers/data/supabase";
import { fixtureIdentity, fixtureWorkspaceId } from "@/lib/providers/data/fixture";

function adapter(response: { data: unknown; error: unknown }) {
  const rpc = vi.fn().mockResolvedValue(response); const schema = vi.fn(() => ({ rpc }));
  const provider = new SupabaseDataProvider({ schema } as never, fixtureIdentity("researcher").id);
  return { provider: provider.research, rpc };
}
const command = () => ({ w: fixtureWorkspaceId, reviewer: fixtureIdentity("reviewer").id, fixture: "association", key: crypto.randomUUID() });
describe("Supabase adapter boundary (mocked transport, not hosted verification)", () => {
  it("maps domain commands to bounded existing RPCs", async () => {
    const id = crypto.randomUUID(); const { provider, rpc } = adapter({ data: id, error: null }); const input = command();
    expect(await provider.createRun(input)).toBe(id);
    expect(rpc).toHaveBeenCalledWith("create_run", { ...input, parent: null, supersedes: null });
  });
  it("does not fallback on database errors or invalid response data", async () => {
    for (const response of [{ data: null, error: { message: "Sensitive SQL details" } }, { data: "not-an-id", error: null }]) {
      const { provider } = adapter(response);
      await expect(provider.createRun(command())).rejects.toThrow("unavailable");
    }
  });
  it("rejects unsupported worker fixtures and never grants worker authority to a staff request", async () => {
    const { provider, rpc } = adapter({ data: null, error: null });
    await expect(provider.createRun({ ...command(), fixture: "timeout" })).rejects.toThrow("invalid");
    await expect(provider.createRun({ ...command(), evidence: "agreement" })).rejects.toThrow("unavailable");
    await expect(provider.advanceRun(crypto.randomUUID())).rejects.toThrow("unavailable");
    expect(rpc).not.toHaveBeenCalled();
  });
});
