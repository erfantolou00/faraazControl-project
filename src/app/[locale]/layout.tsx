import { ReactNode } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params as { locale: string };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text ">
      
      {/* Top Info Bar */}
      <div className="bg-industrial-gray text-light-gray text-sm py-2 px-4 text-center z-10">
        تابلوهای برق صنعتی | کیفیت بالا، ایمنی تضمین‌شده | تماس: 09121772348
      </div>

      {/* Header */}
      <Header locale={locale} />

      {/* Main Content */}
      <main className="flex-1 relative z-0 animate-fade-in ">
                <div className="absolute inset-0 -z-20 opacity-[0.1] bg-[url('/pattern/bg-pat1.avif')] bg-repeat"></div>
        <div className="container min-w-full mx-auto  bg-background-card/20">

          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}