import { NextResponse } from "next/server";
import {
  validateCredentials,
  createSessionToken,
  sessionCookieOptions,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");

    if (!email || !password) {
      return NextResponse.json(
        { error: "ایمیل و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    if (!validateCredentials(email, password)) {
      return NextResponse.json(
        { error: "ایمیل یا رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    const token = await createSessionToken(email);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(sessionCookieOptions(token));
    return response;
  } catch {
    return NextResponse.json(
      { error: "خطای سرور" },
      { status: 500 }
    );
  }
}