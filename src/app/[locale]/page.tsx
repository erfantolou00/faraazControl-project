import HeroSection from "@/components/layout/HeroSection";
import AboutSection from "@/components/layout/AboutSection";
import ServicesSection, { type IconName as ServiceIconName } from "@/components/layout/ServiceSection";
import TrustSection from "@/components/layout/TrustSection";
import ProcessSection from "@/components/layout/ProcessSection";
// import ProjectsPreview from "@/components/layout/ProjectsPreview";
import CtaSection from "@/components/layout/CtaSection";
import { getDictionary } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

// متن‌ها: src/lib/i18n/fa.json و en.json → بخش home
export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const texts = getDictionary(locale).home;

  return (
    <>
      <HeroSection data={texts.heroSection} locale={locale} />
      <AboutSection data={texts.aboutSection} locale={locale} />
      <ServicesSection data={texts.servicesSection as { eyebrow: string; title: string; learnMore: string; services: Array<{ title?: string; description?: string; icon: ServiceIconName }> }} locale={locale} />
      <TrustSection data={texts.trustSection} locale={locale} />
      <ProcessSection data={texts.processSection} locale={locale} />
      {/* <ProjectsPreview data={texts.projectsPreview} locale={locale} /> */}
      <CtaSection data={texts.ctaSection} locale={locale} />
    </>
  );
}
