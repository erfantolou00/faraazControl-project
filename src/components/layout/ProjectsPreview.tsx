"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectsPreviewProps {
  data: {
    title: string;
    description: string;
    projects: string[][];
  };
  locale: string;
}

export default function ProjectsPreview({ data, locale }: ProjectsPreviewProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="projects-preview" className="bg-background-alt py-24">
      <div className="container px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-black leading-tight text-text sm:text-5xl">{data.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">{data.description}</p>
          </div>
          <Link href={`/${locale}/projects`} className="inline-flex items-center gap-3 text-sm font-bold text-warning">
            {isRtl ? "مشاهده همه پروژه‌ها" : "View all projects"}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data.projects.map(([title, description, image], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden rounded-lg border border-border bg-background-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={image} alt={title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-text">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
