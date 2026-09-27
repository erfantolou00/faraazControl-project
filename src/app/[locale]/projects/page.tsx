import ProjectsPageClient from "./ProjectsPageClient";
import { getDictionary } from "@/lib/i18n";
import type { ProjectsPageData } from "@/types/projects-page";

// متن‌ها: src/lib/i18n/fa.json و en.json → بخش projectsPage
// سوپابیس فعلاً خاموش است؛ کارت پروژه‌ها از همین فایل‌ها خوانده می‌شود.
export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = getDictionary(locale).projectsPage;

  const data: ProjectsPageData = {
    hero: copy.hero,
    viewDetails: copy.viewDetails,
    projects: copy.items,
    cta: copy.cta,
  };

  return <ProjectsPageClient data={data} locale={locale} />;
}
