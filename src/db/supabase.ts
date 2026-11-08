import { createClient } from "@supabase/supabase-js";

import { getEnv } from "../lib/env";
import type { Database } from "./supabase.types";

export const supabase = createClient<Database>(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
  auth: { persistSession: false },
});
