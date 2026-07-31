/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Search, X } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";
import type { ProjectRow } from "@/lib/supabase/types";

type FormState = {
  title_fa: string;
  title_en: string;
  client_fa: string;
  client_en: string;
  year_fa: string;
  year_en: string;
  location_fa: string;
  location_en: string;
  category_fa: string;
  category_en: string;
  power: string;
  description_fa: string;
  description_en: string;
  image: string;
  tags: string;
  status: "published" | "draft";
  sort_order: number;
};

const empty: FormState = {
  title_fa: "",
  title_en: "",
  client_fa: "",
  client_en: "",
  year_fa: "",
  year_en: "",
  location_fa: "",
  location_en: "",
  category_fa: "",
  category_en: "",
  power: "",
  description_fa: "",
  description_en: "",
  image: "/projects/hero.jpg",
  tags: "",
  status: "published",
  sort_order: 0,
};

export default function AdminProjectsPage() {
  const [items, setItems] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(empty);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/projects");
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

  function openEdit(p: ProjectRow) {
    setEditingId(p.id);
    setForm({
      title_fa: p.title_fa,
      title_en: p.title_en,
      client_fa: p.client_fa,
      client_en: p.client_en,
      year_fa: p.year_fa,
      year_en: p.year_en,
      location_fa: p.location_fa,
      location_en: p.location_en,
      category_fa: p.category_fa,
      category_en: p.category_en,
      power: p.power ?? "",
      description_fa: p.description_fa,
      description_en: p.description_en,
      image: p.image,
      tags: (p.tags ?? []).join(", "),
      status: p.status,
      sort_order: p.sort_order,
    });
    setOpen(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const payload = {
      ...form,
      power: form.power || null,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };
    const url = editingId ? `/api/admin/projects/${editingId}` : "/api/admin/projects";
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
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("حذف این پروژه؟")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    await load();
  }

  const filtered = items.filter(
    (p) =>
      p.title_fa.includes(q) ||
      p.title_en.toLowerCase().includes(q.toLowerCase()) ||
      p.category_fa.includes(q)
  );

  return (
    <div>
      <AdminHeader
        title="پروژه‌ها"
        description="مدیریت پروژه‌های نمایش‌داده‌شده در سایت"
        action={
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-zinc-950 hover:bg-amber-400"
          >
            <Plus className="h-4 w-4" />
            پروژه جدید
          </button>
        }
      />

      <div className="mb-6 relative max-w-md">
        <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="جستجوی پروژه..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pr-11 pl-4 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500/50 focus:outline-none"
        />
      </div>

      {open && (
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold text-white">{editingId ? "ویرایش پروژه" : "پروژه جدید"}</h3>
            <button type="button" onClick={() => setOpen(false)} className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800">
              <X className="h-4 w-4" />
            </button>
          </div>
          <form onSubmit={handleSave} className="grid gap-4 sm:grid-cols-2">
            {(
              [
                ["title_fa", "عنوان (فارسی)"],
                ["title_en", "Title (EN)"],
                ["client_fa", "کارفرما (فارسی)"],
                ["client_en", "Client (EN)"],
                ["category_fa", "دسته‌بندی (فارسی)"],
                ["category_en", "Category (EN)"],
                ["year_fa", "سال (فارسی)"],
                ["year_en", "Year (EN)"],
                ["location_fa", "محل (فارسی)"],
                ["location_en", "Location (EN)"],
                ["power", "ظرفیت"],
                ["image", "مسیر تصویر"],
              ] as const
            ).map(([key, label]) => (
              <div key={key}>
                <label className="mb-1.5 block text-sm text-zinc-400">{label}</label>
                <input
                  value={form[key]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
                  dir={key.endsWith("_en") || key === "image" || key === "power" ? "ltr" : "rtl"}
                  required={key === "title_fa" || key === "title_en"}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-zinc-400">توضیح فارسی</label>
              <textarea
                value={form.description_fa}
                onChange={(e) => setForm((f) => ({ ...f, description_fa: e.target.value }))}
                rows={3}
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-zinc-400">Description (EN)</label>
              <textarea
                value={form.description_en}
                onChange={(e) => setForm((f) => ({ ...f, description_en: e.target.value }))}
                rows={3}
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">تگ‌ها (با کاما)</label>
              <input
                value={form.tags}
                onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-zinc-400">وضعیت</label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm((f) => ({ ...f, status: e.target.value as "published" | "draft" }))
                }
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-white focus:border-amber-500/50 focus:outline-none"
              >
                <option value="published">منتشر شده</option>
                <option value="draft">پیش‌نویس</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-amber-500 px-6 py-2.5 text-sm font-bold text-zinc-950 hover:bg-amber-400 disabled:opacity-60"
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
              <th className="hidden px-6 py-4 text-right font-semibold md:table-cell">دسته‌بندی</th>
              <th className="hidden px-6 py-4 text-right font-semibold sm:table-cell">سال</th>
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
                  پروژه‌ای یافت نشد
                </td>
              </tr>
            ) : (
              filtered.map((p) => (
                <tr key={p.id} className="bg-zinc-950/50 hover:bg-zinc-900/80">
                  <td className="px-6 py-4 font-semibold text-white">{p.title_fa}</td>
                  <td className="hidden px-6 py-4 text-zinc-400 md:table-cell">{p.category_fa}</td>
                  <td className="hidden px-6 py-4 text-zinc-400 sm:table-cell">{p.year_fa}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                        p.status === "published"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-zinc-700/50 text-zinc-300"
                      }`}
                    >
                      {p.status === "published" ? "منتشر شده" : "پیش‌نویس"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => openEdit(p)}
                        className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-amber-400"
                        aria-label="ویرایش"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(p.id)}
                        className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-red-400"
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