"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Award,
  Target,
  Users,
  Factory,
  ArrowLeft,
  ArrowRight,
  CircuitBoard,
} from "lucide-react";
import type { AboutPageData } from "./page";

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
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about/story.webp"
            alt={data.hero.titleHighlight}
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary)_0.5px,transparent_0.5px),linear-gradient(to_bottom,var(--color-primary)_0.5px,transparent_0.5px)] bg-[size:60px_60px]" />
          </div>
        </div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-screen w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent blur-xl"
            initial={{ x: `${15 + i * 20}%`, y: -500 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
              {data.hero.titleBefore}{" "}
              <span className="text-primary">{data.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-8 max-w-5xl text-xl leading-relaxed text-text md:text-2xl lg:text-3xl">
              {data.hero.subtitle}
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="mx-auto mt-12 h-1.5 w-80 rounded-full bg-primary shadow-2xl shadow-primary/60"
            />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background-alt py-32 lg:py-44">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="mb-10 text-4xl font-black leading-tight text-text lg:text-6xl">
                {data.story.title}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                {data.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <motion.div
                whileHover={{ x: isRtl ? -12 : 12 }}
                className="mt-12 inline-flex items-center gap-4 text-xl font-bold text-primary"
              >
                <span>{data.story.cta}</span>
                <ArrowIcon className="h-8 w-8" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative overflow-hidden rounded-3xl border border-border-light shadow-2xl"
            >
              <Image
                src="/about/story.webp"
                alt={data.story.title}
                width={900}
                height={700}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div
                className={`absolute bottom-10 ${isRtl ? "right-10 text-right" : "left-10 text-left"}`}
              >
                <p className="text-6xl font-black text-primary drop-shadow-2xl">
                  {data.story.experienceValue}
                </p>
                <p className="mt-2 text-2xl text-text">
                  {data.story.experienceLabel}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-black text-text lg:text-6xl">
              {data.values.title.split(data.values.titleHighlight)[0]}
              <span className="text-primary">{data.values.titleHighlight}</span>
              {data.values.title.split(data.values.titleHighlight)[1] || ""}
            </h2>
          </motion.div>

          <div className="grid gap-10 md:grid-cols-3">
            {data.values.items.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.9 }}
                  className="group relative rounded-3xl border border-border bg-background-card p-10 transition-all duration-500 hover:border-primary/50"
                >
                  <div className="absolute inset-0 -z-10 bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                  <Icon className="mb-6 h-14 w-14 text-primary transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="mb-4 text-2xl font-black text-text transition-colors group-hover:text-primary lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background-alt py-28">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-12 text-center md:grid-cols-4">
            {data.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
              >
                <p className="text-5xl font-black text-primary md:text-7xl">
                  {stat.value}
                </p>
                <p className="mt-4 text-lg text-text-secondary md:text-xl">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Facility */}
      <section className="bg-background py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-border-light shadow-2xl"
            >
              <Image
                src="/about/team.jpg"
                alt={data.team.title}
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className={`absolute bottom-10 ${isRtl ? "right-10 text-right" : "left-10"}`}>
                <h3 className="flex items-center gap-4 text-4xl font-black text-text lg:text-5xl">
                  <Users className="h-10 w-10 text-primary lg:h-12 lg:w-12" />
                  {data.team.title}
                </h3>
                <p className="mt-2 text-lg text-text-secondary lg:text-xl">
                  {data.team.subtitle}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRtl ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-border-light shadow-2xl"
            >
              <Image
                src="/about/factory.webp"
                alt={data.facility.title}
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className={`absolute bottom-10 ${isRtl ? "right-10 text-right" : "left-10"}`}>
                <h3 className="flex items-center gap-4 text-4xl font-black text-text lg:text-5xl">
                  <Factory className="h-10 w-10 text-primary lg:h-12 lg:w-12" />
                  {data.facility.title}
                </h3>
                <p className="mt-2 text-lg text-text-secondary lg:text-xl">
                  {data.facility.subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary/10 via-background-alt to-secondary/10 py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-4xl font-black text-text lg:text-6xl">
              {data.cta.title}
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-xl text-text-secondary lg:text-2xl">
              {data.cta.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-4 rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-text-inverse shadow-2xl transition-all duration-300 hover:bg-primary-light hover:shadow-primary/60 lg:px-12 lg:py-6 lg:text-xl"
            >
              {data.cta.button}
              <CircuitBoard className="h-7 w-7 lg:h-8 lg:w-8" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}