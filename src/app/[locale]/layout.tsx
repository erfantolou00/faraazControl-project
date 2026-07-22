import { ReactNode } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  const isRtl = locale === "fa";

  return (
    <div className="min-h-screen bg-background text-text">
      <div className="border-b border-border bg-background-alt px-4 py-2 text-center text-xs font-semibold text-text-secondary">
        {isRtl
          ? "طراحی و ساخت تابلو برق صنعتی | تست FAT | تماس: 09121772348"
          : "Industrial electrical panel design and manufacturing | FAT testing | Phone: 09121772348"}
      </div>
      <Header locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
