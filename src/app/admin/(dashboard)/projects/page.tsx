import Link from "next/link";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";

const mockProjects = [
  {
    id: 1,
    title: "تابلوهای MV/LV پالایشگاه بندرعباس",
    category: "نفت و گاز",
    year: "۱۴۰۳",
    status: "منتشر شده",
  },
  {
    id: 2,
    title: "اتوماسیون خط تولید فولاد مبارکه",
    category: "فولاد",
    year: "۱۴۰۲",
    status: "منتشر شده",
  },
  {
    id: 3,
    title: "تابلوهای برق نیروگاه سیکل ترکیبی",
    category: "نیروگاه",
    year: "۱۴۰۳",
    status: "پیش‌نویس",
  },
  {
    id: 4,
    title: "پروژه پتروشیمی بندر امام",
    category: "پتروشیمی",
    year: "۱۴۰۲",
    status: "منتشر شده",
  },
];

export default function AdminProjectsPage() {
  return (
    <div>
      <AdminHeader
        title="پروژه‌ها"
        description="مدیریت پروژه‌های نمایش‌داده‌شده در سایت"
        action={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
          >
            <Plus className="h-4 w-4" />
            پروژه جدید
          </button>
        }
      />

      {/* Search */}
      <div className="mb-6 relative max-w-md">
        <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          placeholder="جستجوی پروژه..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pr-11 pl-4 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500/50 focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400">
              <th className="px-6 py-4 text-right font-semibold">عنوان</th>
              <th className="hidden px-6 py-4 text-right font-semibold md:table-cell">
                دسته‌بندی
              </th>
              <th className="hidden px-6 py-4 text-right font-semibold sm:table-cell">
                سال
              </th>
              <th className="px-6 py-4 text-right font-semibold">وضعیت</th>
              <th className="px-6 py-4 text-left font-semibold">عملیات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {mockProjects.map((p) => (
              <tr
                key={p.id}
                className="bg-zinc-950/50 transition hover:bg-zinc-900/80"
              >
                <td className="px-6 py-4 font-semibold text-white">{p.title}</td>
                <td className="hidden px-6 py-4 text-zinc-400 md:table-cell">
                  {p.category}
                </td>
                <td className="hidden px-6 py-4 text-zinc-400 sm:table-cell">
                  {p.year}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                      p.status === "منتشر شده"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-zinc-700/50 text-zinc-300"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-amber-400"
                      aria-label="ویرایش"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-red-400"
                      aria-label="حذف"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}