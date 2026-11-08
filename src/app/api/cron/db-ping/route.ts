import type { NextRequest } from "next/server";

import { supabase } from "../../../../db/supabase";

// Vercel Cron calls this route with GET and sends `Authorization: Bearer ${CRON_SECRET}`.
// Supabase pauses free projects that show low activity for a week and does not say exactly what counts,
// so every run sends a burst of cheap reads (a count on every table, a sorted read, an Auth call)
// and then writes a timestamp into cron_heartbeat, which is database activity for sure.
const JOB_NAME = "db-ping";
const ROUNDS = 3;

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return Response.json({ message: "unauthorized" }, { status: 401 });
  }

  const startedAt = Date.now();
  const failed: string[] = [];
  let reads = 0;
  let licenses: number | null = null;

  for (let round = 0; round < ROUNDS; round++) {
    const results = await Promise.all([
      supabase.from("license").select("uuid", { count: "exact", head: true }),
      supabase.from("nonce").select("id", { count: "exact", head: true }),
      supabase.from("subscription").select("*", { count: "exact", head: true }),
      supabase.from("contact_request").select("*", { count: "exact", head: true }),
      supabase.from("license").select("uuid,status,expires_at").order("expires_at", { ascending: false }).limit(10),
      supabase.auth.admin.listUsers({ page: 1, perPage: 1 }),
    ]);

    reads += results.length;
    licenses = results[0].count;

    for (const [index, result] of results.entries()) {
      if (result.error) {
        failed.push(`${index}:${result.error.code ?? "error"}`);
      }
    }
  }

  if (failed.length > 0) {
    console.error("Database ping had failed requests", { failed });
    return Response.json({ message: "databasePingFailed", reads, failed }, { status: 500 });
  }

  const { data: previous } = await supabase //
    .from("cron_heartbeat")
    .select("runs")
    .eq("name", JOB_NAME)
    .maybeSingle();

  const ranAt = new Date().toISOString();
  const runs = (previous?.runs ?? 0) + 1;
  const { error } = await supabase //
    .from("cron_heartbeat")
    .upsert({ name: JOB_NAME, ran_at: ranAt, runs });

  if (error) {
    console.error("Database ping could not write the heartbeat", { code: error.code });
    return Response.json({ message: "heartbeatWriteFailed" }, { status: 500 });
  }

  return Response.json({ message: "ok", reads, licenses, ranAt, runs, ms: Date.now() - startedAt });
}
