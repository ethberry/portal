import { subscribeSchema } from "../../components/footer/subscribe/schema";

const UNIQUE_VIOLATION = "23505";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const result = subscribeSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ success: false }, { status: 400 });
  }

  const { supabase } = await import("../../../db/supabase");
  const { error } = await supabase.from("subscription").insert({
    email: result.data.email,
  });

  if (error && error.code !== UNIQUE_VIOLATION) {
    console.error("Failed to save subscription", { code: error.code });
    return Response.json({ success: false }, { status: 500 });
  }

  return Response.json({ success: true }, { status: 201 });
}
