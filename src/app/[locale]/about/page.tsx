import AboutPageClient from "./AboutPageClient";
import { getDictionary } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

// متن‌ها: src/lib/i18n/fa.json و en.json → بخش aboutPage
export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const data = getDictionary(locale).aboutPage;

  return <AboutPageClient data={data} locale={locale} />;
}
