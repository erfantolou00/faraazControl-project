"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    badges: string[];
    stats: string[][];
    bottomText: string;
    bottomBadge: string;
  };
  locale: string;
}

export default function HeroSection({ data, locale }: HeroSectionProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/heroSection/1.jpg"
          alt={data.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isRtl
              ? "linear-gradient(270deg, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.82) 40%, rgba(10,10,12,0.45) 100%)"
              : "linear-gradient(90deg, rgba(10,10,12,0.95) 0%, rgba(10,10,12,0.82) 40%, rgba(10,10,12,0.45) 100%)",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      <div className="container relative z-10 flex min-h-[92vh] items-center px-6 py-28 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badges */}
          <div className="mb-8 flex flex-wrap gap-3">
            {data.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {badge}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.18] text-white sm:text-5xl lg:text-7xl">
            {data.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/80 sm:text-xl">
            {data.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-7 py-4 text-base font-bold text-text-inverse shadow-xl shadow-black/30 transition hover:bg-primary-light active:scale-[0.985]"
            >
              {data.ctaPrimary}
              <ArrowIcon className="h-5 w-5" />
            </Link>

            {data.ctaSecondary && (
              <Link
                href={`/${locale}/projects`}
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition hover:bg-white/20 hover:border-white/40"
              >
                {data.ctaSecondary}
                <Factory className="h-5 w-5" />
              </Link>
            )}
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-3xl grid-cols-3 border-y border-white/20 py-2">
            {data.stats.map(([value, label]) => (
              <div key={label} className="py-5">
                <div className="flex items-center gap-2 text-2xl font-black text-white sm:text-3xl">
                  <Zap className="h-5 w-5 text-primary" />
                  {value}
                </div>
                <p className="mt-1 text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="absolute bottom-8 left-6 right-6 hidden items-center justify-between border-t border-white/15 pt-5 text-sm text-white/70 lg:flex">
          <span>{data.bottomText}</span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" />
            {data.bottomBadge}
          </span>
        </div>
      </div>
    </section>
  );
}