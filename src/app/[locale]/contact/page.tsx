import ContactPageClient from "./ContactPageClient";
import { getDictionary } from "@/lib/i18n";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

// متن‌ها: src/lib/i18n/fa.json و en.json → بخش contactPage
export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const data = getDictionary(locale).contactPage;

  return <ContactPageClient data={data} locale={locale} />;
}
