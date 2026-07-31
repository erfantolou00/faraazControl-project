import { createServerClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { ProjectRow, ProjectUpdate } from "@/lib/supabase/types";

export type Project = ProjectRow;

export async function getPublishedProjects() {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function getAllProjects() {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function getProjectById(id: string) {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("projects").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data;
}

export async function createProject(
  input: Omit<ProjectRow, "id" | "created_at" | "updated_at">
) {
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("projects").insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function updateProject(id: string, input: ProjectUpdate) {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("projects")
      .update({ ...input, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  }

export async function deleteProject(id: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw error;
}