import "./globals.css";

import { ReactNode } from "react";
import { headers } from "next/headers";
import fa from "@/lib/i18n/fa.json";
import { inter, vazirmatn } from "@/lib/fonts";

// عنوان پیش‌فرض از src/lib/i18n/fa.json → meta
export const metadata = {
  title: fa.meta.title,
  description: fa.meta.description,
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "en" ? "en" : "fa";

  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      className={`${vazirmatn.variable} ${inter.variable}`}
    >
      <link rel="icon" type="image/webp" sizes="16x16" href="/LOGO_NoBg.webp" />
      <body className="antialiased">{children}</body>
    </html>
  );
}
