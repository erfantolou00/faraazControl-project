"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe, Menu, PhoneCall, X } from "lucide-react";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import { usePathname } from "next/navigation";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

interface HeaderProps {
  locale: string;
  copy: Dictionary["header"];
  nav: Dictionary["nav"];
}

export default function Header({ locale, copy, nav }: HeaderProps) {
  const isRtl = locale === "fa";
  const otherLocale = isRtl ? "en" : "fa";
  const pathname = usePathname();
  
  // مسیر جدید با locale عوض‌شده
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu: [string, string][] = [
    [nav.home, `/${locale}`],
    [nav.about, `/${locale}/about`],
    [nav.services, `/${locale}/services`],
    [nav.projects, `/${locale}/projects`],
    [nav.contact, `/${locale}/contact`],
  ];

  useEffect(() => {
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [isRtl, locale]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="container px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <span className="grid h-full  place-items-center rounded-lg  text-text-inverse">
              <Image src="/LOGO_NoBg.png"
                alt={copy.logoAlt}
                width={48}
                height={48}
                className="h-12 w-12 rounded-sm border border-border object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-tight text-text">
                {copy.brand}
              </span>
              <span className="block text-xs font-semibold text-text-secondary">
                {copy.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {menu.map(([label, href]) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-lg px-4 py-2 text-sm font-bold transition ${isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-white/5 hover:text-text"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-text-inverse hover:bg-primary-light transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              {copy.consult}
            </Link>

            <Link href={switchedPath}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-bold text-text-secondary hover:text-text hover:border-border-light transition"
            >
              <Globe className="h-4 w-4" />
              {otherLocale.toUpperCase()}
            </Link>

            <ThemeSwitcher label={copy.themeToggle} />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={copy.openMenu}
            className="rounded-lg border border-border p-2 text-text lg:hidden hover:bg-background-alt transition"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
          <div
            className="overflow-hidden border-t border-border bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-2 px-4 py-4">
              {menu.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 font-bold text-text-secondary hover:bg-white/5 hover:text-text transition"
                >
                  {label}
                </Link>
              ))}

              <div className="flex items-center justify-between border-t border-border pt-4">
              <Link
  href={switchedPath}
  className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-bold text-text-secondary hover:text-text hover:border-border-light transition"
>
  <Globe className="h-4 w-4" />
  {otherLocale.toUpperCase()}
</Link>
                <ThemeSwitcher label={copy.themeToggle} />
              </div>
            </div>
          </div>
      )}
    </header>
  );
}