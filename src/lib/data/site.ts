import { createServerClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export type SiteSettings = SiteSettingsRow;

export async function getSiteSettings() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();
  if (error) throw error;
  return data;
}

import type { SiteSettingsRow, SiteSettingsUpdate } from "@/lib/supabase/types";

export async function saveSiteSettings(input: SiteSettingsUpdate) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("site_settings")
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq("id", 1)
    .select()
    .single();
  if (error) throw error;
  return data;
}