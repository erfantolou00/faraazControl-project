import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminSettingsPage() {
  return (
    <div>
      <AdminHeader
        title="تنظیمات"
        description="تنظیمات عمومی پنل و سایت"
      />

      <div className="max-w-2xl space-y-6">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="mb-4 font-bold text-white">اطلاعات سایت</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                نام سایت
              </label>
              <input
                defaultValue="فراز کنترل"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                تلفن تماس
              </label>
              <input
                defaultValue="021-28425785"
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-400">ایمیل</label>
              <input
                defaultValue="info@farazcontrol.com"
                dir="ltr"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white focus:border-amber-500/50 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="button"
            className="mt-6 rounded-xl bg-amber-500 px-6 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
          >
            ذخیره تغییرات
          </button>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="mb-2 font-bold text-white">امنیت</h2>
          <p className="mb-4 text-sm text-zinc-400">
            ورود و احراز هویت در مرحله بعد اضافه می‌شود.
          </p>
          <button
            type="button"
            disabled
            className="rounded-xl border border-zinc-700 px-6 py-2.5 text-sm font-bold text-zinc-500"
          >
            به‌زودی
          </button>
        </section>
      </div>
    </div>
  );
}