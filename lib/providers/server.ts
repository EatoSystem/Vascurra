import "server-only";
import { notFound } from "next/navigation";
import { providerConfiguration } from "./config";
import { requireDevelopmentSession } from "@/lib/development/server";
import { requireStaff } from "@/lib/veyai/server/auth";
import { FixtureDataProvider } from "./data/fixture";
import { SupabaseDataProvider } from "./data/supabase";
import { FixtureAIProvider } from "./ai";
import type { DataProvider } from "./data/contract";

export async function requireWorkspace() {
  const config = providerConfiguration();
  if (config.data === "fixture") {
    const session = await requireDevelopmentSession();
    const actor = session.identity;
    const data: DataProvider = new FixtureDataProvider(session.research, actor, new FixtureAIProvider());
    return { data, user: { id: actor.id }, memberships: [{ workspace_id: actor.workspaceId, role: actor.role, display_name: actor.displayName }], mode: "fixture" as const, identityLabel: actor.displayName };
  }
  if (config.data !== "supabase") notFound();
  const staff = await requireStaff();
  const data: DataProvider = new SupabaseDataProvider(staff.client, staff.user.id);
  return { data, user: { id: staff.user.id }, memberships: staff.memberships, mode: "connected" as const, identityLabel: staff.memberships[0]?.display_name ?? "Staff" };
}
