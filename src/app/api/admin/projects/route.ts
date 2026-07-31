import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/data/require-admin";
import { getAllProjects, createProject } from "@/lib/data/projects";

export async function GET() {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  try {
    const projects = await getAllProjects();
    return NextResponse.json(projects);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    const auth = await requireAdmin();
    if ("error" in auth) return auth.error;
  
    const body = await req.json();
    if (!body.title_fa || !body.title_en) {
      return NextResponse.json(
        { error: "title_fa and title_en required" },
        { status: 400 }
      );
    }
  
    try {
      const project = await createProject({
        title_fa: body.title_fa,
        title_en: body.title_en,
        client_fa: body.client_fa ?? "",
        client_en: body.client_en ?? "",
        year_fa: body.year_fa ?? "",
        year_en: body.year_en ?? "",
        location_fa: body.location_fa ?? "",
        location_en: body.location_en ?? "",
        category_fa: body.category_fa ?? "",
        category_en: body.category_en ?? "",
        power: body.power || null,
        description_fa: body.description_fa ?? "",
        description_en: body.description_en ?? "",
        image: body.image || "/projects/hero.jpg",
        tags: Array.isArray(body.tags) ? body.tags : [],
        status: body.status === "draft" ? "draft" : "published",
        sort_order:
          typeof body.sort_order === "number" ? body.sort_order : 0,
      });
      return NextResponse.json(project, { status: 201 });
    } catch (e) {
      const message =
        e instanceof Error
          ? e.message
          : typeof e === "object" && e && "message" in e
            ? String((e as { message: unknown }).message)
            : "Failed to create";
      console.error("[POST /api/admin/projects]", e);
      return NextResponse.json({ error: message }, { status: 500 });
    }
  }