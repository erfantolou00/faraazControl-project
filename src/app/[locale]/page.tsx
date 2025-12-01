import fa from '../../lib/i18n/fa.json';
import en from '../../lib/i18n/en.json';
import HeroSection from '@/components/layout/HeroSection';
import AboutSection, { IconName, type Feature } from '@/components/layout/AboutSection';
import ServicesSection from '@/components/layout/ServiceSection';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params as { locale: string };
  const texts = locale === 'fa' ? fa : en;

  return (
    <>
      {/* Hero Section - Full Width */}
      <HeroSection data={texts.heroSection} locale={locale} />
      
      {/* About Section - با فاصله مناسب */}
      <AboutSection data={texts.aboutSection as { title?: string; description?: string; features?: Feature[]; }} locale={locale} />
      
      {/* Services Section - با فاصله مناسب */}
      <ServicesSection data={texts.servicesSection as { title: string; services: Array<{ title?: string; description?: string; icon: IconName; }>; }} locale={locale} />
    </>
  );
}
