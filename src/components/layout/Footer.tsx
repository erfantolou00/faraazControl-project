import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Zap } from "lucide-react";
import BackToTop from "./BackToTop";
import type { Dictionary } from "@/lib/i18n";

interface FooterProps {
  locale: string;
  copy: Dictionary["footer"];
  nav: Dictionary["nav"];
}

export default function Footer({ locale, copy, nav }: FooterProps) {
  const isRtl = locale === "fa";
  const otherLocale = isRtl ? "en" : "fa";
  const links: [string, string][] = [
    [nav.home, `/${locale}`],
    [nav.about, `/${locale}/about`],
    [nav.services, `/${locale}/services`],
    [nav.projects, `/${locale}/projects`],
    [nav.contact, `/${locale}/contact`],
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
                <span className="block text-lg font-semibold tracking-tight text-text">{copy.brand}</span>
                <span className="block text-sm text-text-secondary">{copy.tagline}</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
              {copy.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">{copy.quickLinks}</h3>
            <nav className="mt-5 grid gap-3">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm font-semibold text-text-secondary hover:text-text">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">{copy.contactTitle}</h3>
            <div className="mt-5 grid gap-4 text-sm text-text-secondary">
              <a href={copy.phoneHref} className="flex items-center gap-3 hover:text-text">
                <Phone className="h-5 w-5 text-primary" />
                <span dir="ltr">{copy.phone}</span>
              </a>
              <a href={`mailto:${copy.email}`} className="flex items-center gap-3 hover:text-text">
                <Mail className="h-5 w-5 text-primary" />
                <span>{copy.email}</span>
              </a>
              <p className="flex items-start gap-3 leading-7">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{copy.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {copy.copyright}</p>
          <div className="flex items-center gap-3">
            <Link href={`/${otherLocale}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 font-bold text-text-secondary hover:text-text">
              <Globe className="h-4 w-4" />
              {otherLocale.toUpperCase()}
            </Link>
            <BackToTop label={copy.backToTop} />
          </div>
        </div>
      </div>
    </footer>
  );
}
