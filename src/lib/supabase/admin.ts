// Supabase is temporarily disabled. Do not import or call this.
// import { createClient } from "@supabase/supabase-js";
// import type { Database } from "./types";

export function createAdminClient(): never {
  throw new Error("Supabase is disabled");
  // const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  // const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  // if (!url || !key) throw new Error("Supabase admin env missing");
  // return createClient<Database>(url, key, {
  //   auth: { persistSession: false, autoRefreshToken: false },
  // });
}
