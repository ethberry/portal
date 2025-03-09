import type { NextRequest } from "next/server";

import { supabase } from "../../../db/supabase";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const { error } = await supabase //
    .from("subscription")
    .insert({
      email,
    });

  return Response.json({
    success: !!error,
  });
}
