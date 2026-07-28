"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "ورود ناموفق بود");
        setLoading(false);
        return;
      }

      router.replace("/admin");
      router.refresh();
    } catch {
      setError("خطا در برقراری ارتباط با سرور");
      setLoading(false);
    }
  }

  return (
    <div
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-zinc-950 px-4"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-lg font-black text-zinc-950">
            FC
          </div>
          <h1 className="text-2xl font-black text-white">ورود به پنل مدیریت</h1>
          <p className="mt-2 text-sm text-zinc-400">فراز کنترل</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl"
        >
          {error && (
            <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">
                ایمیل
              </label>
              <div className="relative">
                <Mail className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  dir="ltr"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3 pr-11 pl-4 text-white placeholder:text-zinc-600 focus:border-amber-500/50 focus:outline-none"
                  placeholder="admin@farazcontrol.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-400">
                رمز عبور
              </label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  dir="ltr"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 py-3 pr-11 pl-4 text-white placeholder:text-zinc-600 focus:border-amber-500/50 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-3.5 text-sm font-bold text-zinc-950 transition hover:bg-amber-400 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                در حال ورود...
              </>
            ) : (
              "ورود"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}