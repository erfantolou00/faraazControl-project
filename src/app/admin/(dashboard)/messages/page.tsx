import { MailOpen, Mail } from "lucide-react";
import AdminHeader from "@/components/admin/AdminHeader";

const mockMessages = [
  {
    id: 1,
    name: "علی محمدی",
    company: "شرکت نمونه",
    subject: "استعلام قیمت",
    preview: "سلام، برای یک پروژه تابلو LV حدود ۸۰۰ آمپر...",
    time: "۲ ساعت پیش",
    unread: true,
  },
  {
    id: 2,
    name: "سارا احمدی",
    company: "پتروشیمی آریا",
    subject: "مشاوره فنی",
    preview: "نیاز به مشاوره برای سیستم MCC و درایو داریم...",
    time: "دیروز",
    unread: true,
  },
  {
    id: 3,
    name: "رضا کریمی",
    company: "—",
    subject: "طراحی تابلو برق",
    preview: "لطفاً کاتالوگ و نمونه پروژه‌های مشابه را ارسال کنید.",
    time: "۳ روز پیش",
    unread: false,
  },
];

export default function AdminMessagesPage() {
  return (
    <div>
      <AdminHeader
        title="پیام‌ها"
        description="پیام‌های دریافت‌شده از فرم تماس سایت"
      />

      <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <ul className="divide-y divide-zinc-800">
          {mockMessages.map((msg) => (
            <li key={msg.id}>
              <button
                type="button"
                className={`flex w-full items-start gap-4 px-6 py-5 text-right transition hover:bg-zinc-900 ${
                  msg.unread ? "bg-zinc-900/40" : "bg-zinc-950/30"
                }`}
              >
                <div className="mt-1 shrink-0">
                  {msg.unread ? (
                    <Mail className="h-5 w-5 text-amber-400" />
                  ) : (
                    <MailOpen className="h-5 w-5 text-zinc-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p
                      className={`font-semibold ${
                        msg.unread ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {msg.name}
                      {msg.company !== "—" && (
                        <span className="mr-2 font-normal text-zinc-500">
                          · {msg.company}
                        </span>
                      )}
                    </p>
                    <span className="text-xs text-zinc-500">{msg.time}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-amber-400/90">
                    {msg.subject}
                  </p>
                  <p className="mt-1 truncate text-sm text-zinc-400">
                    {msg.preview}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}