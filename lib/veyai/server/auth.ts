import "server-only";
import { notFound, redirect } from "next/navigation";
import { staffClient } from "@/lib/supabase/server";
import { veyaiConfiguration } from "@/lib/veyai/config";
import { z } from "zod";

const membership = z.object({ workspace_id: z.uuid(), role: z.enum(["admin", "researcher", "reviewer"]), display_name: z.string() });

export async function requireStaff(requireMfa = true) {
  if (veyaiConfiguration().auth !== "supabase") notFound();
  const client = await staffClient();
  const { data: { user }, error } = await client.auth.getUser();
  if (error || !user || user.is_anonymous) redirect("/VeyAI/sign-in");
  const { data, error: membershipError } = await client.schema("veyai").rpc("staff_memberships");
  if (membershipError) throw new Error("Staff access could not be verified");
  const memberships = z.array(membership).parse(data);
  if (!memberships.length) redirect("/VeyAI/sign-in?notice=access");
  const { data: assurance, error: assuranceError } = await client.auth.mfa.getAuthenticatorAssuranceLevel();
  if (assuranceError) throw new Error("Staff assurance could not be verified");
  if (requireMfa && assurance?.currentLevel !== "aal2") redirect("/VeyAI/mfa");
  return { client, user, memberships };
}
