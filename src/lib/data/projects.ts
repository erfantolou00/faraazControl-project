// Supabase is temporarily disabled. These functions no longer talk to the database.
// import { createServerClient } from "@/lib/supabase/server";
// import { createAdminClient } from "@/lib/supabase/admin";
import type { ProjectRow, ProjectUpdate } from "@/lib/supabase/types";

export type Project = ProjectRow;

export async function getPublishedProjects(): Promise<ProjectRow[]> {
  // const supabase = createServerClient();
  // const { data, error } = await supabase
  //   .from("projects")
  //   .select("*")
  //   .eq("status", "published")
  //   .order("sort_order", { ascending: true });
  // if (error) throw error;
  // return data ?? [];
  return [];
}

export async function getAllProjects(): Promise<ProjectRow[]> {
  // const supabase = createAdminClient();
  return [];
}

export async function getProjectById(_id: string): Promise<ProjectRow | null> {
  // const supabase = createAdminClient();
  return null;
}

export async function createProject(
  _input: Omit<ProjectRow, "id" | "created_at" | "updated_at">
): Promise<ProjectRow> {
  // const supabase = createAdminClient();
  throw new Error("Supabase is disabled");
}

export async function updateProject(
  _id: string,
  _input: ProjectUpdate
): Promise<ProjectRow> {
  // const supabase = createAdminClient();
  throw new Error("Supabase is disabled");
}

export async function deleteProject(_id: string): Promise<void> {
  // const supabase = createAdminClient();
  throw new Error("Supabase is disabled");
}
