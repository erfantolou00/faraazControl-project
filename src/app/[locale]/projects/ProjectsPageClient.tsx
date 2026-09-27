import Image from "next/image";
import Link from "next/link";
import { Calendar, Factory, Gauge, MapPin, Wrench } from "lucide-react";
import type { ProjectsPageData } from "@/types/projects-page";
import { PageCta, PageHero } from "@/components/layout/section-ui";

interface ProjectsPageClientProps {
  data: ProjectsPageData;
  locale: string;
}

export default function ProjectsPageClient({ data, locale }: ProjectsPageClientProps) {
  const isRtl = locale === "fa";

  return (
    <>
      <PageHero
        image="/projects/hero.jpg"
        alt={data.hero.titleHighlight}
        titleBefore={data.hero.titleBefore}
        titleHighlight={data.hero.titleHighlight}
        subtitle={data.hero.subtitle}
      />

      {/* Projects Grid */}
      <HomeGridSection>
        {data.projects.map((project) => (
          <article key={project.id} className="group relative border border-border bg-background-card">
            <div className="relative h-48 overflow-hidden border-b border-border md:h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <span
                className={`absolute top-0 ${isRtl ? "right-0" : "left-0"} bg-primary px-3 py-1.5 text-xs font-semibold text-text-inverse`}
              >
                {project.category}
              </span>
            </div>

            <div className="space-y-4 p-5 lg:p-6">
              <h3 className="text-lg font-semibold text-text transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              <p className="text-sm leading-6 text-text-secondary">{project.description}</p>

              <div className="grid grid-cols-2 gap-2 border-t border-border pt-4 text-xs text-text-secondary">
                <span className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {project.year}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {project.location}
                </span>
                {project.power ? (
                  <span className="flex items-center gap-2">
                    <Gauge className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {project.power}
                  </span>
                ) : null}
                <span className="flex items-center gap-2">
                  <Factory className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <span className="line-clamp-1">{project.client}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-border px-2 py-1 text-[11px] font-medium text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/${locale}/projects/${project.id}`}
                className="absolute inset-0"
                aria-label={project.title}
              />
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {data.viewDetails}
              </span>
            </div>
          </article>
        ))}
      </HomeGridSection>

      <PageCta
        title={data.cta.title}
        description={data.cta.description}
        primary={{
          label: data.cta.primary,
          href: `/${locale}/contact`,
          icon: <Wrench className="h-4 w-4" />,
        }}
        secondary={{ label: data.cta.secondary, href: `/${locale}/contact` }}
      />
    </>
  );
}

function HomeGridSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-background">
      <div className="container px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
      </div>
    </section>
  );
}
