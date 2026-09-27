import ServicesPageClient from "./ServicesPageClient";
import { getDictionary } from "@/lib/i18n";
import type { ServicesPageData } from "@/types/services-page";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

// متن‌ها: src/lib/i18n/fa.json و en.json → بخش servicesPage
// سوپابیس فعلاً خاموش است؛ کارت خدمات از همین فایل‌ها خوانده می‌شود.
export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const copy = getDictionary(locale).servicesPage;

  const data: ServicesPageData = {
    hero: copy.hero,
    serviceLabel: copy.serviceLabel,
    ctaLink: copy.ctaLink,
    services: copy.items,
    finalCta: copy.finalCta,
  };

  return <ServicesPageClient data={data} locale={locale} />;
}
