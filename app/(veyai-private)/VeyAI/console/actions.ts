"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireWorkspace } from "@/lib/providers/server";
import { createRunInput, decisionInput, ProviderError } from "@/lib/providers/data/contract";
import { providerConfiguration } from "@/lib/providers/config";

function errorCode(error: unknown) { return error instanceof ProviderError ? error.code : "unavailable"; }

export async function requestRun(form: FormData) {
  const { data } = await requireWorkspace();
  const input = createRunInput.safeParse(Object.fromEntries(form));
  if (!input.success) redirect("/VeyAI/console/research?notice=invalid");
  if (providerConfiguration().ai !== "fixture") redirect("/VeyAI/console/research?notice=unavailable");
  let id: string;
  try { id = await data.research.createRun(input.data); }
  catch (error) { redirect(`/VeyAI/console/research?notice=${errorCode(error)}`); }
  revalidatePath("/VeyAI/console", "layout");
  redirect(`/VeyAI/console/runs/${id}`);
}

export async function cancelRun(form: FormData) {
  const { data } = await requireWorkspace();
  const input = z.uuid().safeParse(form.get("target"));
  if (!input.success) redirect("/VeyAI/console/research?notice=invalid");
  let notice = "";
  try { await data.research.cancelRun(input.data); }
  catch (error) { notice = `?notice=${errorCode(error)}`; }
  revalidatePath("/VeyAI/console", "layout");
  redirect(`/VeyAI/console/runs/${input.data}${notice}`);
}

export async function advanceRun(form: FormData) {
  const { data, mode } = await requireWorkspace();
  const input = z.uuid().safeParse(form.get("target"));
  if (!input.success) redirect("/VeyAI/console/research?notice=invalid");
  if (mode !== "fixture") redirect(`/VeyAI/console/runs/${input.data}?notice=unavailable`);
  let notice = "";
  try { await data.research.advanceRun(input.data); }
  catch (error) { notice = `?notice=${errorCode(error)}`; }
  revalidatePath("/VeyAI/console", "layout");
  redirect(`/VeyAI/console/runs/${input.data}${notice}`);
}

export async function recordDecision(form: FormData) {
  const { data } = await requireWorkspace();
  const input = decisionInput.safeParse(Object.fromEntries(form));
  if (!input.success) redirect("/VeyAI/console/approvals?notice=invalid");
  let notice = "recorded";
  try { await data.research.decide(input.data); }
  catch (error) { notice = errorCode(error); }
  revalidatePath("/VeyAI/console", "layout");
  redirect(`/VeyAI/console/approvals?notice=${notice}`);
}

