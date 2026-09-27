// Supabase is temporarily disabled. These functions no longer talk to the database.
// import { createServerClient } from "@/lib/supabase/server";
// import { createAdminClient } from "@/lib/supabase/admin";
import type { SiteSettingsRow, SiteSettingsUpdate } from "@/lib/supabase/types";

export type SiteSettings = SiteSettingsRow;

export async function getSiteSettings(): Promise<SiteSettingsRow | null> {
  // const supabase = createServerClient();
  // const { data, error } = await supabase
  //   .from("site_settings")
  //   .select("*")
  //   .eq("id", 1)
  //   .single();
  // if (error) throw error;
  // return data;
  return null;
}

export async function saveSiteSettings(
  _input: SiteSettingsUpdate
): Promise<SiteSettingsRow> {
  // const supabase = createAdminClient();
  throw new Error("Supabase is disabled");
}
