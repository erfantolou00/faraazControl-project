import Image from "next/image";
import { Award, CircuitBoard, Factory, Shield, Target, Users } from "lucide-react";
import type { AboutPageData } from "@/lib/i18n";
import { HomeCard, HomeSection, PageCta, PageHero } from "@/components/layout/section-ui";

const iconMap = {
  Shield,
  Award,
  Target,
} as const;

interface AboutPageClientProps {
  data: AboutPageData;
  locale: string;
}

export default function AboutPageClient({ data, locale }: AboutPageClientProps) {
  const isRtl = locale === "fa";

  return (
    <>
      <PageHero
        image="/about/story.webp"
        alt={data.hero.titleHighlight}
        titleBefore={data.hero.titleBefore}
        titleHighlight={data.hero.titleHighlight}
        subtitle={data.hero.subtitle}
      />

      {/* Story */}
      <HomeSection tone="alt">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/about/story.webp"
              alt={data.story.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
              {data.story.title}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-text-secondary md:text-base">
              {data.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="h-8 w-1 bg-primary" />
              <p className="text-sm font-medium text-text">{data.story.experienceLabel}</p>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary">{data.story.cta}</p>
          </div>
        </div>
      </HomeSection>

      {/* Values */}
      <HomeSection>
        <h2 className="mb-8 max-w-xl text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {data.values.title.split(data.values.titleHighlight)[0]}
          <span className="text-primary">{data.values.titleHighlight}</span>
          {data.values.title.split(data.values.titleHighlight)[1] || ""}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {data.values.items.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
            return (
              <HomeCard
                key={item.title}
                index={String(i + 1).padStart(2, "0")}
                icon={<Icon className="h-5 w-5" />}
                title={item.title}
                description={item.desc}
              />
            );
          })}
        </div>
      </HomeSection>

      {/* Team & Facility */}
      <HomeSection tone="alt">
        <div className="grid gap-4 lg:grid-cols-2">
          <figure className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image src="/about/team.jpg" alt={data.team.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <figcaption
              className={`absolute bottom-0 ${isRtl ? "right-0 text-right" : "left-0 text-left"} border-t border-primary/40 bg-background/90 px-5 py-4`}
            >
              <p className="flex items-center gap-2 text-lg font-semibold text-text">
                <Users className="h-5 w-5 text-primary" />
                {data.team.title}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{data.team.subtitle}</p>
            </figcaption>
          </figure>

          <figure className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image src="/about/factory.webp" alt={data.facility.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
            <figcaption
              className={`absolute bottom-0 ${isRtl ? "right-0 text-right" : "left-0 text-left"} border-t border-primary/40 bg-background/90 px-5 py-4`}
            >
              <p className="flex items-center gap-2 text-lg font-semibold text-text">
                <Factory className="h-5 w-5 text-primary" />
                {data.facility.title}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{data.facility.subtitle}</p>
            </figcaption>
          </figure>
        </div>
      </HomeSection>

      <PageCta
        title={data.cta.title}
        description={data.cta.description}
        primary={{
          label: data.cta.button,
          href: `/${locale}/contact`,
          icon: <CircuitBoard className="h-4 w-4" />,
        }}
      />
    </>
  );
}
