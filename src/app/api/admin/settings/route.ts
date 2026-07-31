import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/data/require-admin";
import { getSiteSettings, saveSiteSettings } from "@/lib/data/site";

export async function GET() {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  try {
    return NextResponse.json(await getSiteSettings());
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const auth = await requireAdmin();
  if ("error" in auth) return auth.error;
  const body = await req.json();
  const allowed = [
    "site_name_fa",
    "site_name_en",
    "phone",
    "email",
    "address_fa",
    "address_en",
    "whatsapp",
    "instagram",
    "linkedin",
  ] as const;
  const payload: Record<string, string> = {};
  for (const k of allowed) {
    if (k in body) payload[k] = body[k] ?? "";
  }
  try {
    return NextResponse.json(await saveSiteSettings(payload));
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}