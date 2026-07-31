import { createServerClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type {
  ServiceRow,
  ServiceInsert,
  ServiceUpdate,
} from "@/lib/supabase/types";

export type Service = ServiceRow;

export async function getPublishedServices(): Promise<ServiceRow[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getAllServices(): Promise<ServiceRow[]> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function getServiceById(id: string): Promise<ServiceRow | null> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function createService(
  input: ServiceInsert
): Promise<ServiceRow> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("services")
    .insert(input)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateService(
  id: string,
  input: ServiceUpdate
): Promise<ServiceRow> {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("services")
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteService(id: string): Promise<void> {
  const supabase = createAdminClient();
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw error;
}