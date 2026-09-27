// Supabase is temporarily disabled. These functions no longer talk to the database.
// import { createServerClient } from "@/lib/supabase/server";
// import { createAdminClient } from "@/lib/supabase/admin";
import type {
  ServiceRow,
  ServiceInsert,
  ServiceUpdate,
} from "@/lib/supabase/types";

export type Service = ServiceRow;

export async function getPublishedServices(): Promise<ServiceRow[]> {
  // const supabase = createServerClient();
  // const { data, error } = await supabase
  //   .from("services")
  //   .select("*")
  //   .eq("status", "published")
  //   .order("sort_order", { ascending: true });
  // if (error) throw error;
  // return data ?? [];
  return [];
}

export async function getAllServices(): Promise<ServiceRow[]> {
  // const supabase = createAdminClient();
  return [];
}

export async function getServiceById(_id: string): Promise<ServiceRow | null> {
  // const supabase = createAdminClient();
  return null;
}

export async function createService(
  _input: ServiceInsert
): Promise<ServiceRow> {
  // const supabase = createAdminClient();
  throw new Error("Supabase is disabled");
}

export async function updateService(
  _id: string,
  _input: ServiceUpdate
): Promise<ServiceRow> {
  // const supabase = createAdminClient();
  throw new Error("Supabase is disabled");
}

export async function deleteService(_id: string): Promise<void> {
  // const supabase = createAdminClient();
  throw new Error("Supabase is disabled");
}
