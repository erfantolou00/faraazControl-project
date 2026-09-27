import { ReactNode } from "react";
import type { Metadata } from "next";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { getDictionary } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

// متن‌ها: src/lib/i18n/fa.json و en.json → meta، topBar، nav، header، footer
export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const meta = getDictionary(locale).meta;
  return { title: meta.title, description: meta.description };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="border-b border-border bg-background-alt px-4 py-2 text-center text-[11px] font-medium tracking-wide text-text-muted">
        {dict.topBar.text}
      </div>
      <Header locale={locale} copy={dict.header} nav={dict.nav} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} copy={dict.footer} nav={dict.nav} />
    </div>
  );
}
