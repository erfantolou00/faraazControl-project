import "./globals.css";

import { ReactNode } from 'react';
import { Vazirmatn } from "next/font/google";
import fa from "@/lib/i18n/fa.json";

const sans = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
});

// عنوان پیش‌فرض از src/lib/i18n/fa.json → meta
export const metadata = {
  title: fa.meta.title,
  description: fa.meta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" className={sans.className}>
            <link rel="icon" type="image/webp" sizes="16x16" href="/LOGO_NoBg.webp" />

      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
