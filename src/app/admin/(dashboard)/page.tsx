import Link from "next/link";
import {
  FolderKanban,
  MessageSquare,
  Eye,
  TrendingUp,
  Plus,
  ArrowLeft,
} from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import StatCard from "@/components/admin/StatCard";

const recentMessages = [
  {
    id: 1,
    name: "علی محمدی",
    subject: "استعلام قیمت",
    time: "۲ ساعت پیش",
    unread: true,
  },
  {
    id: 2,
    name: "شرکت پتروشیمی آریا",
    subject: "مشاوره فنی",
    time: "دیروز",
    unread: true,
  },
  {
    id: 3,
    name: "رضا کریمی",
    subject: "طراحی تابلو برق",
    time: "۳ روز پیش",
    unread: false,
  },
];

const recentProjects = [
  { id: 1, title: "تابلوهای MV/LV پالایشگاه بندرعباس", status: "منتشر شده" },
  { id: 2, title: "اتوماسیون فولاد مبارکه", status: "پیش‌نویس" },
  { id: 3, title: "تابلوهای نیروگاه دماوند", status: "منتشر شده" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <AdminHeader
        title="داشبورد"
        description="خلاصه وضعیت سایت و آخرین فعالیت‌ها"
        action={
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
          >
            <Plus className="h-4 w-4" />
            پروژه جدید
          </Link>
        }
      />

      {/* Stats */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="پروژه‌ها"
          value={12}
          subtitle="۳ پیش‌نویس"
          icon={FolderKanban}
        />
        <StatCard
          title="پیام‌های جدید"
          value={5}
          subtitle="۲ خوانده‌نشده"
          icon={MessageSquare}
        />
        <StatCard
          title="بازدید این ماه"
          value="—"
          subtitle="به‌زودی"
          icon={Eye}
        />
        <StatCard
          title="نرخ تبدیل"
          value="—"
          subtitle="به‌زودی"
          icon={TrendingUp}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent messages */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
            <h2 className="font-bold text-white">آخرین پیام‌ها</h2>
            <Link
              href="/admin/messages"
              className="flex items-center gap-1 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              همه
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <ul className="divide-y divide-zinc-800">
            {recentMessages.map((msg) => (
              <li key={msg.id}>
                <Link
                  href="/admin/messages"
                  className="flex items-center justify-between px-6 py-4 transition hover:bg-zinc-900"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {msg.unread && (
                        <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                      )}
                      <p className="truncate font-semibold text-white">
                        {msg.name}
                      </p>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-zinc-400">
                      {msg.subject}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-zinc-500">
                    {msg.time}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent projects */}
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
            <h2 className="font-bold text-white">آخرین پروژه‌ها</h2>
            <Link
              href="/admin/projects"
              className="flex items-center gap-1 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              همه
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <ul className="divide-y divide-zinc-800">
            {recentProjects.map((p) => (
              <li key={p.id}>
                <Link
                  href="/admin/projects"
                  className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-zinc-900"
                >
                  <p className="truncate font-semibold text-white">{p.title}</p>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                      p.status === "منتشر شده"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-zinc-700/50 text-zinc-300"
                    }`}
                  >
                    {p.status}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}