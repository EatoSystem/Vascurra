import { randomUUID } from "node:crypto";
import { createFixtureWorkspace, fixtureIdentity, type FixtureWorkspace } from "@/lib/providers/data/fixture";
import type { StaffIdentity } from "@/lib/providers/data/contract";

export const developmentSessionLifetimeMs = 8 * 60 * 60 * 1000;
export type DevelopmentSession = { id: string; identity: StaffIdentity; verified: boolean; expiresAt: number; research: FixtureWorkspace };
/** Synthetic identity simulation. No credentials, real memberships or production authority. */
export class DevelopmentSessions {
  private readonly sessions = new Map<string, DevelopmentSession>();
  constructor(private readonly now: () => number = Date.now) {}
  create(role: StaffIdentity["role"]) {
    for (const [id, session] of this.sessions) if (session.expiresAt <= this.now()) this.sessions.delete(id);
    if (this.sessions.size >= 100) throw new Error("Development session limit reached");
    const session: DevelopmentSession = { id: randomUUID(), identity: fixtureIdentity(role), verified: false, expiresAt: this.now() + developmentSessionLifetimeMs, research: createFixtureWorkspace() };
    this.sessions.set(session.id, session); return session;
  }
  get(id: string | undefined) {
    const session = id ? this.sessions.get(id) : undefined;
    if (!session || session.expiresAt <= this.now()) { if (id) this.sessions.delete(id); return null; }
    return session;
  }
  verify(id: string) { const session = this.get(id); if (!session) throw new Error("Session expired"); session.verified = true; }
  switchRole(id: string, role: StaffIdentity["role"]) { const session = this.get(id); if (!session?.verified) throw new Error("Session expired"); session.identity = fixtureIdentity(role); }
  revoke(id: string) { this.sessions.delete(id); }
}
