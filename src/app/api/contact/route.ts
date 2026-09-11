import { contactSchema } from "../../contact/schema";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ success: false }, { status: 400 });
  }

  const { name, email, company, budget, message } = result.data;
  const { supabase } = await import("../../../db/supabase");
  const { error } = await supabase.from("contact_request").insert({
    name,
    email,
    company: company || null,
    budget: budget || null,
    message,
  });

  if (error) {
    console.error("Failed to save contact request", { code: error.code });
    return Response.json({ success: false }, { status: 500 });
  }

  return Response.json({ success: true }, { status: 201 });
}
