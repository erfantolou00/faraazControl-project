import fa from '../../lib/i18n/fa.json';
import en from '../../lib/i18n/en.json';
import HeroSection from '@/components/layout/HeroSection';
import AboutSection from '@/components/layout/AboutSection';
import ServicesSection from '@/components/layout/ServiceSection';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function  HomePage({ params }: HomePageProps) {
  const { locale } = await params as { locale: string };
  const texts = locale === 'fa' ? fa : en;

  return (
      <main className="bg-background text-text min-h-screen transition-colors duration-300">
      <div className="container mx-auto p-8">
      <HeroSection data={texts.heroSection} locale={locale} />
      <AboutSection data={texts.aboutSection}  />
      <ServicesSection data={texts.servicesSection}  />
      </div>
    </main>
  );
}
