import ServicesPageClient from "./ServicesPageClient";
import { getPublishedServices } from "@/lib/data/services";
import type { ServicesPageData } from "@/types/services-page";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const list = await getPublishedServices();
  const fa = locale === "fa";

  const data: ServicesPageData = {
    hero: {
      titleBefore: fa ? "خدمات" : "Our",
      titleHighlight: fa ? "تخصصی" : "specialized",
      titleAfter: fa ? "ما" : "services",
      subtitle: fa
        ? "از طراحی تا پشتیبانی — یک راه‌حل کامل برای نیازهای برق و اتوماسیون صنعتی شما"
        : "From design to support — a complete solution for your industrial power and automation needs",
    },
    serviceLabel: fa ? "خدمت تخصصی" : "Specialized service",
    ctaLink: fa ? "درخواست مشاوره رایگان" : "Request a free consultation",
    services: list.map((s) => ({
      id: s.id,
      icon: s.icon,
      title: fa ? s.title_fa : s.title_en,
      desc: fa ? s.desc_fa : s.desc_en,
      image: s.image,
      features: fa ? (s.features_fa ?? []) : (s.features_en ?? []),
    })),
    finalCta: {
      title: fa
        ? "آماده‌اید پروژه‌تان را شروع کنیم؟"
        : "Ready to start your project?",
      description: fa
        ? "با تیم متخصص فراز کنترل، بهترین راه‌حل‌های برق و اتوماسیون صنعتی را دریافت کنید"
        : "Get the best industrial power and automation solutions with the Faraz Control specialist team",
      primary: fa ? "شروع همکاری" : "Start collaboration",
      secondary: fa
        ? "مشاهده پروژه‌های انجام شده"
        : "View completed projects",
    },
  };

  return <ServicesPageClient data={data} locale={locale} />;
}