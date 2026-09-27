import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Factory, ShieldCheck } from "lucide-react";

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    badges: string[];
    bottomText: string;
    bottomBadge: string;
  };
  locale: string;
}

export default function HeroSection({ data, locale }: HeroSectionProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="border-b border-border bg-background">
      <div className="container grid lg:min-h-[620px] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-center px-6 py-12 lg:px-10 lg:py-16">
          <div className="mb-6 flex flex-wrap gap-2">
            {data.badges.map((badge) => (
              <span
                key={badge}
                className="border border-border bg-background-alt px-3 py-1 text-xs font-semibold text-text-secondary"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.15] tracking-tight text-text sm:text-5xl">
            {data.title}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-text-secondary">
            {data.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-text-inverse transition hover:bg-primary-light"
            >
              {data.ctaPrimary}
              <ArrowIcon className="h-4 w-4" />
            </Link>
            {data.ctaSecondary ? (
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-2 border border-border bg-background-card px-5 py-3 text-sm font-semibold text-text transition hover:border-primary"
              >
                {data.ctaSecondary}
                <Factory className="h-4 w-4" />
              </Link>
            ) : null}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 text-xs font-medium text-text-muted">
            <span>{data.bottomText}</span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              {data.bottomBadge}
            </span>
          </div>
        </div>

        <div className="relative min-h-[280px] border-t border-border lg:border-s lg:border-t-0">
          <Image
            src="/heroSection/1.jpg"
            alt={data.title}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/25" />
        </div>
      </div>
    </section>
  );
}
