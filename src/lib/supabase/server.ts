// Supabase is temporarily disabled. Do not import or call this.
// import { createClient } from "@supabase/supabase-js";
// import type { Database } from "./types";

export function createServerClient(): never {
  throw new Error("Supabase is disabled");
  // return createClient<Database>(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   { auth: { persistSession: false } }
  // );
}
