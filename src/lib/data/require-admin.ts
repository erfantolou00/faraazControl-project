import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-auth";

export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) {
    return {
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }
  return { session };
}