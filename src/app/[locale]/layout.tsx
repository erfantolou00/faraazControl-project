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
    <div className="min-h-screen flex flex-col bg-primary/5 text-text transition-colors duration-300">
      {/* Background Pattern - Subtle */}
      <div className="fixed inset-0 -z-10 opacity-[0.02] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0, 16px 16px'
          }}
        />
      </div>

      {/* Gradient Overlays - Subtle */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-primary/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-linear-to-t from-accent to-transparent" />
      </div>

      <Header locale={locale} />
      <main className="flex-1 relative z-0">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
