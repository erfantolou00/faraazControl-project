'use client';

import { motion } from 'framer-motion';
import { Settings, Wrench, Lightbulb, Zap, Shield, Award, Cpu, Gauge } from 'lucide-react';

export type IconName = "Settings" | "Wrench" | "Lightbulb" | "Zap" | "Shield" | "Award" | "Cpu" | "Gauge";

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

interface AboutSectionProps {
  data: {
    title?: string;
    description?: string;
    features?: Feature[];
  };
  locale: string;
}

const iconMap = {
  Settings: Settings,
  Wrench: Wrench,
  Lightbulb: Lightbulb,
  Zap: Zap,
  Shield: Shield,
  Award: Award,
  Cpu: Cpu,
  Gauge: Gauge,
};

export default function AboutSection({ data, locale }: AboutSectionProps) {
  const isRtl = locale === 'fa';

  return (
    <section className="relative py-28 lg:py-36 bg-background overflow-hidden">
      {/* Subtle Industrial Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-bold text-primary tracking-widest uppercase text-sm">
              {isRtl ? "چرا فراز کنترل؟" : "Why Faraz Control?"}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-text leading-tight">
            {data?.title || ""}
          </h2>

          <p className="mt-8 text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {data?.description || ""}
          </p>

          <div className="w-24 h-1 bg-primary mx-auto mt-10 rounded" />
        </motion.div>

        {/* Features Grid */}
        {data?.features && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {data.features.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon] || Zap;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.7 }}
                  className="group"
                >
                  <div className="h-full p-10 rounded-3xl border border-border bg-background-card hover:border-primary/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-black/40">
                    
                    {/* Icon */}
                    <div className="mb-10">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-colors">
                        <IconComponent className="w-10 h-10 text-primary transition-transform group-hover:scale-110 duration-500" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed text-[17px]">
                      {feature.description}
                    </p>

                    {/* Subtle Bottom Accent */}
                    <div className="mt-8 h-0.5 w-12 bg-primary/40 group-hover:w-20 transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}