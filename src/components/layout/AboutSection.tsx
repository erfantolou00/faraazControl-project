"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Wrench,
  Lightbulb,
  Zap,
  Shield,
  Award,
  Cpu,
  Gauge,
} from "lucide-react";

export type IconName =
  | "Settings"
  | "Wrench"
  | "Lightbulb"
  | "Zap"
  | "Shield"
  | "Award"
  | "Cpu"
  | "Gauge";

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

interface AboutSectionProps {
  data: {
    eyebrow: string;
    title: string;
    description: string;
    features: Feature[];
  };
  locale: string;
}

const iconMap = {
  Settings,
  Wrench,
  Lightbulb,
  Zap,
  Shield,
  Award,
  Cpu,
  Gauge,
};

export default function AboutSection({ data, locale }: AboutSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-primary/5" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-size-[80px_80px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-6 py-3">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              {data.eyebrow}
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight text-text md:text-5xl lg:text-6xl">
            {data.title}
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">
            {data.description}
          </p>

          <div className="mx-auto mt-10 h-1 w-24 rounded bg-primary" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {data.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Zap;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="group"
              >
                <div className="h-full rounded-3xl border border-border bg-background-card p-8 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-black/40 lg:p-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-colors group-hover:border-primary/40 lg:h-20 lg:w-20">
                      <IconComponent className="h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110 lg:h-10 lg:w-10" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold text-text transition-colors group-hover:text-primary lg:text-2xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] leading-relaxed text-text-secondary lg:text-[17px]">
                    {feature.description}
                  </p>

                  {/* Accent line */}
                  <div className="mt-8 h-0.5 w-12 bg-primary/40 transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}