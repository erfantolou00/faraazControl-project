"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CircuitBoard,
  Factory,
  Wrench,
  Cpu,
  Shield,
  Settings,
  Zap,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import type { ServicesPageData } from "./page";

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

export default function ServicesPageClient({
  data,
  locale,
}: ServicesPageClientProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/services/hero.jpg"
            alt={data.hero.titleHighlight}
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/10" />
        </div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-screen w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl"
            initial={{ x: `${10 + i * 18}%`, y: -600 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.8,
            }}
          />
        ))}

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
              {data.hero.titleBefore}{" "}
              <span className="text-primary">{data.hero.titleHighlight}</span>{" "}
              {data.hero.titleAfter}
            </h1>
            <p className="mx-auto mt-8 max-w-5xl text-xl leading-relaxed text-text-secondary md:text-2xl lg:text-3xl">
              {data.hero.subtitle}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.4 }}
              className="mx-auto mt-14 h-1.5 w-72 rounded-full bg-primary shadow-2xl shadow-primary/60 md:w-96"
            />
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-background py-28 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="space-y-28 lg:space-y-32">
            {data.services.map((service, idx) => {
              const Icon =
                iconMap[service.icon as keyof typeof iconMap] || CircuitBoard;
              const isEven = idx % 2 === 0;
              // در RTL ترتیب بصری را با order کنترل می‌کنیم
              const imageOrder = isEven
                ? isRtl
                  ? "lg:order-2"
                  : "lg:order-1"
                : isRtl
                  ? "lg:order-1"
                  : "lg:order-2";
              const contentOrder = isEven
                ? isRtl
                  ? "lg:order-1"
                  : "lg:order-2"
                : isRtl
                  ? "lg:order-2"
                  : "lg:order-1";

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: Math.min(idx * 0.08, 0.3) }}
                  className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-3xl border border-border-light shadow-2xl group ${imageOrder}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div
                      className={`absolute bottom-8 ${isRtl ? "right-8 text-right" : "left-8 text-left"}`}
                    >
                      <Icon className="mb-4 h-12 w-12 text-primary lg:h-16 lg:w-16" />
                      <p className="text-2xl font-black text-text lg:text-4xl">
                        {service.title}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-8 ${contentOrder}`}>
                    <div className="flex items-center gap-4">
                      <div className="h-1 w-16 rounded-full bg-primary lg:w-20" />
                      <span className="text-base font-bold text-primary lg:text-lg">
                        {data.serviceLabel}
                      </span>
                    </div>

                    <h2 className="text-3xl font-black leading-tight text-text lg:text-5xl">
                      {service.title}
                    </h2>

                    <p className="text-lg leading-relaxed text-text-secondary lg:text-xl">
                      {service.desc}
                    </p>

                    <ul className="space-y-4">
                      {service.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-center gap-4 text-text-secondary"
                        >
                          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                          <span className="text-base lg:text-lg">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/${locale}/contact`}
                      className="mt-4 inline-flex items-center gap-4 text-lg font-bold text-primary transition-all duration-300 hover:gap-6 lg:text-xl"
                    >
                      <span>{data.ctaLink}</span>
                      <ArrowIcon className="h-7 w-7 lg:h-8 lg:w-8" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-background-alt to-background py-28 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="mb-8 text-4xl font-black text-text lg:text-6xl">
              {data.finalCta.title}
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-xl text-text-secondary lg:text-2xl">
              {data.finalCta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-4 rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-text-inverse shadow-2xl transition-all duration-300 hover:bg-primary-light hover:shadow-primary/60 lg:px-12 lg:py-6 lg:text-xl"
              >
                {data.finalCta.primary}
                <Zap className="h-7 w-7 lg:h-8 lg:w-8" />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="rounded-2xl border-2 border-primary bg-background/50 px-10 py-5 text-lg font-bold text-primary backdrop-blur-xl transition-all duration-300 hover:bg-primary/10 lg:px-12 lg:py-6 lg:text-xl"
              >
                {data.finalCta.secondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}