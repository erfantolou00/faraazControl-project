import ProjectsPageClient from "./ProjectsPageClient";
import { getPublishedProjects } from "@/lib/data/projects";
import { ProjectRow } from "@/lib/supabase/types";
import type { ProjectsPageData } from "@/types/projects-page";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const list = await getPublishedProjects();
  const fa = locale === "fa";

  const data: ProjectsPageData = {
    hero: {
      titleBefore: fa ? "پروژه‌های" : "Completed",
      titleHighlight: fa ? "انجام‌شده" : "projects",
      subtitle: fa
        ? "بیش از ۵۰۰ پروژه موفق در صنایع کلیدی ایران — از نفت و گاز تا فولاد و نیروگاه"
        : "More than 500 successful projects across Iran’s key industries — from oil & gas to steel and power plants",
    },
    viewDetails: fa ? "مشاهده جزئیات" : "View details",
    projects: list.map((p: ProjectRow) => ({
      id: p.id,
      title: fa ? p.title_fa : p.title_en,
      client: fa ? p.client_fa : p.client_en,
      year: fa ? p.year_fa : p.year_en,
      location: fa ? p.location_fa : p.location_en,
      category: fa ? p.category_fa : p.category_en,
      power: p.power ?? undefined,
      description: fa ? p.description_fa : p.description_en,
      image: p.image,
      tags: p.tags ?? [],
    })),
    cta: {
      title: fa ? "پروژه شما می‌تواند بعدی باشد" : "Your project can be next",
      description: fa
        ? "آماده‌ایم تا چالش‌های برق و اتوماسیون صنعتی شما را به موفقیت تبدیل کنیم"
        : "We are ready to turn your industrial power and automation challenges into success",
      primary: fa ? "درخواست مشاوره فنی" : "Request technical consultation",
      secondary: fa
        ? "دانلود کاتالوگ پروژه‌ها (PDF)"
        : "Download project catalog (PDF)",
    },
  };

  return <ProjectsPageClient data={data} locale={locale} />;
}