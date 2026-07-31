/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Search, X } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import type { ServiceRow } from "@/lib/supabase/types";

type FormState = {
  icon: string;
  title_fa: string;
  title_en: string;
  desc_fa: string;
  desc_en: string;
  image: string;
  features_fa: string;
  features_en: string;
  status: "published" | "draft";
  sort_order: number;
};

const ICON_OPTIONS = [
  "CircuitBoard",
  "Factory",
  "Cpu",
  "Wrench",
  "Shield",
  "Settings",
] as const;

const empty: FormState = {
  icon: "CircuitBoard",
  title_fa: "",
  title_en: "",
  desc_fa: "",
  desc_en: "",
  image: "/services/hero.jpg",
  features_fa: "",
  features_en: "",
  status: "published",
  sort_order: 0,
};

function splitFeatures(value: string): string[] {
  return value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

export default function AdminServicesPage() {
  const [items, setItems] = useState<ServiceRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(empty);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/services");
    if (res.ok) setItems(await res.json());
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  function openCreate() {
    setEditingId(null);
    setForm({ ...empty, sort_order: items.length + 1 });
    setOpen(true);
  }

  function openEdit(s: ServiceRow) {
    setEditingId(s.id);
    setForm({
      icon: s.icon,
      title_fa: s.title_fa,
      title_en: s.title_en,
      desc_fa: s.desc_fa,
      desc_en: s.desc_en,
      image: s.image,
      features_fa: (s.features_fa ?? []).join(", "),
      features_en: (s.features_en ?? []).join(", "),
      status: s.status,
      sort_order: s.sort_order,
    });
    setOpen(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      icon: form.icon,
      title_fa: form.title_fa,
      title_en: form.title_en,
      desc_fa: form.desc_fa,
      desc_en: form.desc_en,
      image: form.image || "/services/hero.jpg",
      features_fa: splitFeatures(form.features_fa),
      features_en: splitFeatures(form.features_en),
      status: form.status,
      sort_order: form.sort_order,
    };
    const url = editingId
      ? `/api/admin/services/${editingId}`
      : "/api/admin/services";
    const method = editingId ? "PUT" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (res.ok) {
      setOpen(false);
      await load();
    } else {
      const err = await res.json().catch(() => ({}));
      alert(err.error || "خطا در ذخیره");
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("حذف این خدمت؟")) return;
    await fetch(`/api/admin/services/${id}`, { method: "DELETE" });
    await load();
  }

  const filtered = items.filter(
    (s) =>
      s.title_fa.includes(q) ||
      s.title_en.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <AdminHeader
        title="خدمات"
        description="مدیریت خدمات نمایش‌داده‌شده در سایت"
        action={
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
          >
            <Plus className="h-4 w-4" />
            خدمت جدید
          </button>
        }
      />

      <div className="mb-6 relative max-w-md">
        <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="جستجوی خدمت..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pr-11 pl-4 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500/50 focus:outline-none"
        />
      </div>

      {open && (
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-white">
              {editingId ? "ویرایش خدمت" : "خدمت جدید"}
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleSave} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">آیکون</label>
              <select
                value={form.icon}
                onChange={(e) => setForm((f) => ({ ...f, icon: e.target.value }))}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              >
                {ICON_OPTIONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">مسیر تصویر</label>
              <input
                value={form.image}
                onChange={(e) => setForm((f) => ({ ...f, image: e.target.value }))}
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">عنوان (فارسی)</label>
              <input
                value={form.title_fa}
                onChange={(e) => setForm((f) => ({ ...f, title_fa: e.target.value }))}
                required
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">Title (EN)</label>
              <input
                value={form.title_en}
                onChange={(e) => setForm((f) => ({ ...f, title_en: e.target.value }))}
                required
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-zinc-400">توضیح فارسی</label>
              <textarea
                value={form.desc_fa}
                onChange={(e) => setForm((f) => ({ ...f, desc_fa: e.target.value }))}
                rows={3}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-zinc-400">Description (EN)</label>
              <textarea
                value={form.desc_en}
                onChange={(e) => setForm((f) => ({ ...f, desc_en: e.target.value }))}
                rows={3}
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-zinc-400">
                ویژگی‌ها فارسی (با کاما)
              </label>
              <input
                value={form.features_fa}
                onChange={(e) =>
                  setForm((f) => ({ ...f, features_fa: e.target.value }))
                }
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-zinc-400">
                Features EN (comma-separated)
              </label>
              <input
                value={form.features_en}
                onChange={(e) =>
                  setForm((f) => ({ ...f, features_en: e.target.value }))
                }
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">وضعیت</label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    status: e.target.value as "published" | "draft",
                  }))
                }
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              >
                <option value="published">منتشر شده</option>
                <option value="draft">پیش‌نویس</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">ترتیب</label>
              <input
                type="number"
                value={form.sort_order}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    sort_order: Number(e.target.value) || 0,
                  }))
                }
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-amber-500 px-6 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-amber-400 disabled:opacity-60"
              >
                {saving ? "در حال ذخیره..." : "ذخیره"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/80 text-zinc-400">
              <th className="px-6 py-4 text-right font-semibold">عنوان</th>
              <th className="hidden px-6 py-4 text-right font-semibold md:table-cell">
                آیکون
              </th>
              <th className="hidden px-6 py-4 text-right font-semibold sm:table-cell">
                ترتیب
              </th>
              <th className="px-6 py-4 text-right font-semibold">وضعیت</th>
              <th className="px-6 py-4 text-left font-semibold">عملیات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">
                  در حال بارگذاری...
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">
                  خدمتی یافت نشد
                </td>
              </tr>
            ) : (
              filtered.map((s) => (
                <tr key={s.id} className="bg-zinc-950/50 hover:bg-zinc-900/80">
                  <td className="px-6 py-4 font-semibold text-white">
                    {s.title_fa}
                  </td>
                  <td className="hidden px-6 py-4 text-zinc-400 md:table-cell">
                    {s.icon}
                  </td>
                  <td className="hidden px-6 py-4 text-zinc-400 sm:table-cell">
                    {s.sort_order}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                        s.status === "published"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-zinc-700/50 text-zinc-300"
                      }`}
                    >
                      {s.status === "published" ? "منتشر شده" : "پیش‌نویس"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEdit(s)}
                        className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-amber-400"
                        aria-label="ویرایش"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(s.id)}
                        className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-red-400"
                        aria-label="حذف"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}