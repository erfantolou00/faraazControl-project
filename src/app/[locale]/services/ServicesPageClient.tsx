import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CircuitBoard,
  Cpu,
  Factory,
  Settings,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import type { ServicesPageData } from "@/types/services-page";
import { PageCta, PageHero } from "@/components/layout/section-ui";

const iconMap = {
  CircuitBoard,
  Factory,
  Wrench,
  Cpu,
  Shield,
  Settings,
} as const;

interface ServicesPageClientProps {
  data: ServicesPageData;
  locale: string;
}

export default function ServicesPageClient({ data, locale }: ServicesPageClientProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHero
        image="/services/hero.jpg"
        alt={data.hero.titleHighlight}
        titleBefore={data.hero.titleBefore}
        titleHighlight={data.hero.titleHighlight}
        titleAfter={data.hero.titleAfter}
        subtitle={data.hero.subtitle}
      />

      {/* Services list */}
      <section className="bg-background">
        <div className="container divide-y divide-border px-6 lg:px-10">
          {data.services.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || CircuitBoard;
            const isEven = idx % 2 === 0;
            const imageOrder = isEven ? (isRtl ? "lg:order-2" : "lg:order-1") : isRtl ? "lg:order-1" : "lg:order-2";
            const contentOrder = isEven ? (isRtl ? "lg:order-1" : "lg:order-2") : isRtl ? "lg:order-2" : "lg:order-1";

            return (
              <div key={service.id} className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
                <div className={`relative aspect-[4/3] overflow-hidden border border-border ${imageOrder}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className={contentOrder}>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center border border-border bg-background-card text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {String(idx + 1).padStart(2, "0")} · {data.serviceLabel}
                    </span>
                  </div>

                  <h2 className="text-2xl font-semibold leading-tight tracking-tight text-text lg:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-text-secondary lg:text-base">
                    {service.desc}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/${locale}/contact`}
                    className="mt-6 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary"
                  >
                    {data.ctaLink}
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PageCta
        title={data.finalCta.title}
        description={data.finalCta.description}
        primary={{
          label: data.finalCta.primary,
          href: `/${locale}/contact`,
          icon: <Zap className="h-4 w-4" />,
        }}
        secondary={{ label: data.finalCta.secondary, href: `/${locale}/projects` }}
      />
    </>
  );
}
