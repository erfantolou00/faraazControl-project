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
    <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300 dark:bg-background dark:text-text">
      
      {/* Top Info Bar */}
      <div className="bg-industrial-gray text-light-gray text-sm py-2 px-4 text-center z-10">
        تابلوهای برق صنعتی | کیفیت بالا، ایمنی تضمین‌شده | تماس: 021-12345678
      </div>

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,102,255,0.05) 1px, transparent 1px), linear-gradient(180deg, rgba(0,102,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Neon Glow Overlays */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-2 bg-accent blur-sm opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-2 bg-primary blur-sm opacity-30" />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-accent to-transparent" />
      </div>

      {/* Header */}
      <Header locale={locale} />

      {/* Main Content */}
      <main className="flex-1 relative z-0 animate-fade-in">
        <div className="container mx-auto px-4 py-1">
                <div className="absolute inset-0 -z-10 opacity-[0.05] bg-[url('/pattern/bg-pat1.avif')] bg-repeat"></div>

          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}