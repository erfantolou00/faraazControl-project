// Supabase is temporarily disabled. Do not import or call this.
// import { createClient } from "@supabase/supabase-js";
// import type { Database } from "./types";

export function createBrowserClient(): never {
  throw new Error("Supabase is disabled");
  // return createClient<Database>(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.SUPABASE_SERVICE_ROLE_KEY!,
  //   { auth: { persistSession: false, autoRefreshToken: false } }
  // );
}
