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
  return (
    <>
      <PageHero
        image="/about/panel-detail.jpg"
        alt={data.hero.titleHighlight}
        titleBefore={data.hero.titleBefore}
        titleHighlight={data.hero.titleHighlight}
        subtitle={data.hero.subtitle}
        imageClassName="object-cover object-[center_35%]"
        scrimClassName="bg-linear-to-t from-background via-background/50 to-background/20"
        sectionClassName="min-h-[62vh]"
      />

      <HomeSection tone="alt">
        <div className="grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="relative min-h-80 overflow-hidden border border-border lg:min-h-full">
            <Image
              src="/about/control-room.jpg"
              alt={data.story.title}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[center_62%] brightness-125"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
              {data.story.title}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-text-secondary md:text-base">
              {data.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="h-8 w-1 shrink-0 bg-primary" />
              <p className="text-sm font-medium text-text">{data.story.experienceLabel}</p>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary">{data.story.cta}</p>
          </div>
        </div>
      </HomeSection>

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

      <HomeSection tone="alt">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="border border-border bg-background-card p-6">
            <span className="grid h-10 w-10 place-items-center border border-border bg-background text-primary">
              <Users className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-text">{data.team.title}</h2>
            <p className="mt-2 text-sm leading-7 text-text-secondary">{data.team.subtitle}</p>
          </article>
          <article className="border border-border bg-background-card p-6">
            <span className="grid h-10 w-10 place-items-center border border-border bg-background text-primary">
              <Factory className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-xl font-semibold text-text">{data.facility.title}</h2>
            <p className="mt-2 text-sm leading-7 text-text-secondary">{data.facility.subtitle}</p>
          </article>
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
