"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  Settings,
  ExternalLink,
  LogOut,
  Wrench,
} from "lucide-react";

const nav = [
  { href: "/admin", label: "داشبورد", icon: LayoutDashboard },
  { href: "/admin/projects", label: "پروژه‌ها", icon: FolderKanban },
  { href: "/admin/services", label: "خدمات", icon: Wrench },
  { href: "/admin/messages", label: "پیام‌ها", icon: MessageSquare },
  { href: "/admin/settings", label: "تنظیمات", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }
  return (
    <aside className="flex w-64 shrink-0 flex-col border-l border-zinc-800 bg-zinc-950">
      {/* Brand */}
      <div className="border-b border-zinc-800 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-sm font-black text-zinc-950">
            FC
          </div>
          <div>
            <p className="font-bold text-white">فراز کنترل</p>
            <p className="text-xs text-zinc-500">پنل مدیریت</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 p-4">
        {nav.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-amber-500/15 text-amber-400"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer links */}
      <div className="space-y-1 border-t border-zinc-800 p-4">
        <Link
          href="/fa"
          target="_blank"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
        >
          <ExternalLink className="h-5 w-5" />
          مشاهده سایت
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-400 transition hover:bg-zinc-900 hover:text-red-400"
        >
          <LogOut className="h-5 w-5" />
          خروج
        </button>
      </div>
    </aside>
  );
}