import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/data/require-admin";
import { getAllServices, createService } from "@/lib/data/services";

export async function GET() {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  try {
    const services = await getAllServices();
    return NextResponse.json(services);
  } catch (e) {
    console.error("[GET /api/admin/services]", e);
    return NextResponse.json({ error: "Failed to load services" }, { status: 500 });
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
    const service = await createService({
      icon: body.icon || "CircuitBoard",
      title_fa: body.title_fa,
      title_en: body.title_en,
      desc_fa: body.desc_fa ?? "",
      desc_en: body.desc_en ?? "",
      image: body.image || "/services/hero.jpg",
      features_fa: Array.isArray(body.features_fa)
        ? body.features_fa
        : typeof body.features_fa === "string"
          ? body.features_fa
              .split(",")
              .map((t: string) => t.trim())
              .filter(Boolean)
          : [],
      features_en: Array.isArray(body.features_en)
        ? body.features_en
        : typeof body.features_en === "string"
          ? body.features_en
              .split(",")
              .map((t: string) => t.trim())
              .filter(Boolean)
          : [],
      status: body.status === "draft" ? "draft" : "published",
      sort_order: typeof body.sort_order === "number" ? body.sort_order : 0,
    });

    return NextResponse.json(service, { status: 201 });
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "Failed to create";
    console.error("[POST /api/admin/services]", e);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}