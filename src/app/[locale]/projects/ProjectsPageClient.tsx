"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Gauge,
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Wrench,
} from "lucide-react";
import type { ProjectsPageData } from "@/types/projects-page";

interface ProjectsPageClientProps {
  data: ProjectsPageData;
  locale: string;
}

export default function ProjectsPageClient({
  data,
  locale,
}: ProjectsPageClientProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/projects/hero.jpg"
            alt={data.hero.titleHighlight}
            fill
            priority
            className="object-cover brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
        </div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-screen w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl"
            initial={{ x: `${15 + i * 20}%`, y: -600 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 22 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
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
              <span className="text-primary">{data.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-8 max-w-5xl text-xl text-text-secondary md:text-2xl lg:text-3xl">
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

      {/* Projects Grid */}
      <section className="bg-background py-28 lg:py-32">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {data.projects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.1, 0.4), duration: 0.8 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-background-card shadow-xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="relative h-56 overflow-hidden md:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                  <div
                    className={`absolute top-5 ${isRtl ? "right-5" : "left-5"} rounded-full border border-primary/40 bg-primary/20 px-4 py-2 backdrop-blur-md`}
                  >
                    <span className="text-sm font-bold text-primary">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-5 p-6 lg:p-8">
                  <h3 className="text-xl font-black text-text transition-colors duration-300 group-hover:text-primary md:text-2xl">
                    {project.title}
                  </h3>

                  <p className="leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Calendar className="h-4 w-4 shrink-0 text-primary" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <MapPin className="h-4 w-4 shrink-0 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    {project.power ? (
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Gauge className="h-4 w-4 shrink-0 text-primary" />
                        <span>{project.power}</span>
                      </div>
                    ) : null}
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Factory className="h-4 w-4 shrink-0 text-primary" />
                      <span className="line-clamp-1">{project.client}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/${locale}/projects/${project.id}`}
                    className="absolute inset-0 z-10"
                    aria-label={project.title}
                  />

                  <div className="pointer-events-none flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-bold text-primary">
                      {data.viewDetails}
                    </span>
                    <ArrowIcon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-background-alt to-background py-28 lg:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-4xl font-black text-text lg:text-6xl">
              {data.cta.title}
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-xl text-text-secondary lg:text-2xl">
              {data.cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-4 rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-text-inverse shadow-2xl transition-all duration-300 hover:bg-primary-light hover:shadow-primary/60 lg:px-12 lg:py-6 lg:text-xl"
              >
                <Wrench className="h-6 w-6 lg:h-7 lg:w-7" />
                {data.cta.primary}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-2xl border-2 border-primary bg-background/50 px-10 py-5 text-lg font-bold text-primary backdrop-blur-xl transition-all duration-300 hover:bg-primary/10 lg:px-12 lg:py-6 lg:text-xl"
              >
                {data.cta.secondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}