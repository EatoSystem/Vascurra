import { describe, expect, it } from "vitest";
import { DevelopmentSessions, developmentSessionLifetimeMs } from "@/lib/development/sessions";
describe("synthetic identity lifecycle", () => {
  it("requires a separate verification and preserves the isolated workspace on role switch", () => {
    const registry = new DevelopmentSessions(); const researcher = registry.create("researcher");
    expect(researcher.verified).toBe(false);
    expect(() => registry.switchRole(researcher.id, "reviewer")).toThrow("Session expired");
    registry.verify(researcher.id); registry.switchRole(researcher.id, "reviewer");
    expect(registry.get(researcher.id)?.identity.role).toBe("reviewer");
    expect(registry.get(researcher.id)?.research).toBe(researcher.research);
    expect(registry.create("researcher").research).not.toBe(researcher.research);
    expect(registry.get("invented-session")).toBeNull();
  });
  it("expires and revokes sessions and never reuses their state", () => {
    let time = 1000; const registry = new DevelopmentSessions(() => time);
    const old = registry.create("researcher"); time += developmentSessionLifetimeMs;
    expect(registry.get(old.id)).toBeNull(); expect(() => registry.verify(old.id)).toThrow();
    const current = registry.create("reviewer"); registry.revoke(current.id); expect(registry.get(current.id)).toBeNull();
  });
});
