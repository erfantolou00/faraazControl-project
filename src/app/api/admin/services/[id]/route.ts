import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/data/require-admin";
import {
  getServiceById,
  updateService,
  deleteService,
} from "@/lib/data/services";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, ctx: Ctx) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  try {
    const service = await getServiceById(id);
    if (!service) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (e) {
    console.error("[GET /api/admin/services/:id]", e);
    return NextResponse.json({ error: "Failed to load" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, ctx: Ctx) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  const body = await req.json();

  const { id: _id, created_at: _c, ...rest } = body;

  if (typeof rest.features_fa === "string") {
    rest.features_fa = rest.features_fa
      .split(",")
      .map((t: string) => t.trim())
      .filter(Boolean);
  }
  if (typeof rest.features_en === "string") {
    rest.features_en = rest.features_en
      .split(",")
      .map((t: string) => t.trim())
      .filter(Boolean);
  }

  try {
    const updated = await updateService(id, rest);
    return NextResponse.json(updated);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to update";
    console.error("[PUT /api/admin/services/:id]", e);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;

  const { id } = await ctx.params;
  try {
    await deleteService(id);
    return NextResponse.json({ ok: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Failed to delete";
    console.error("[DELETE /api/admin/services/:id]", e);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}