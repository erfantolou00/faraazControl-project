"use client";

import Link from "next/link";
import { ArrowUp, Globe, Mail, MapPin, Phone, Zap } from "lucide-react";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const isRtl = locale === "fa";
  const otherLocale = isRtl ? "en" : "fa";
  const nav = isRtl
    ? [
      ["خانه", `/${locale}`],
      ["درباره ما", `/${locale}/about`],
      ["خدمات", `/${locale}/services`],
      ["پروژه‌ها", `/${locale}/projects`],
      ["تماس", `/${locale}/contact`],
    ]
    : [
      ["Home", `/${locale}`],
      ["About", `/${locale}/about`],
      ["Services", `/${locale}/services`],
      ["Projects", `/${locale}/projects`],
      ["Contact", `/${locale}/contact`],
    ];

  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="container px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_1fr]">
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-warning text-black">
                <Zap className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xl font-black text-text">{isRtl ? "فراز کنترل" : "Faraz Control"}</span>
                <span className="block text-sm text-text-secondary">{isRtl ? "مهندسی تابلو برق صنعتی" : "Industrial electrical engineering"}</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
              {isRtl
                ? "طراحی، ساخت، تست و راه‌اندازی تابلوهای برق و سیستم‌های کنترل برای پروژه‌هایی که ایمنی و پایداری در آن‌ها حیاتی است."
                : "Design, manufacturing, testing, and commissioning of electrical panels and control systems for safety-critical industrial projects."}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-warning">{isRtl ? "دسترسی سریع" : "Quick links"}</h3>
            <nav className="mt-5 grid gap-3">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm font-semibold text-text-secondary hover:text-text">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-warning">{isRtl ? "ارتباط با ما" : "Contact"}</h3>
            <div className="mt-5 grid gap-4 text-sm text-text-secondary">
              <a href="tel:+982133951025" className="flex items-center gap-3 hover:text-text">
                <Phone className="h-5 w-5 text-warning" />
                <span dir="ltr">+98 21 33951025</span>
              </a>
              <a href="mailto:tolou49@gmail.com" className="flex items-center gap-3 hover:text-text">
                <Mail className="h-5 w-5 text-warning" />
                <span>tolou49@gmail.com</span>
              </a>
              <p className="flex items-start gap-3 leading-7">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-warning" />
                <span>{isRtl ? "تهران، خیابان ولیعصر، بالاتر از میدان ونک" : "Tehran, Laleh zar, Mikhak st ."}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {isRtl ? "فراز کنترل. تمام حقوق محفوظ است." : "Faraz Control. All rights reserved."}</p>
          <div className="flex items-center gap-3">
            <Link href={`/${otherLocale}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 font-bold text-text-secondary hover:text-text">
              <Globe className="h-4 w-4" />
              {otherLocale.toUpperCase()}
            </Link>
            <button
              type="button"
              aria-label={isRtl ? "بازگشت به بالا" : "Back to top"}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border text-text-secondary hover:text-text"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
