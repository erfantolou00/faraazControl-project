'use client';

import { motion } from 'framer-motion';
import {
  CircuitBoard,
  Factory,
  Wrench,
  Zap,
  Shield,
  Lightbulb,
  Cpu,
  Gauge,
  Workflow,
  Settings,
  ArrowRight,
  Award,
} from 'lucide-react';

export type IconName =
  | "Settings"
  | "Wrench"
  | "Lightbulb"
  | "Zap"
  | "Shield"
  | "Award"
  | "Cpu"
  | "Gauge"
  | "Workflow"
  | "CircuitBoard"
  | "Factory";

export interface Service {
  icon: IconName;
  title?: string;
  description?: string;
}

interface ServicesSectionProps {
  data: {
    title: string;
    services: Array<{
      title?: string;
      description?: string;
      icon: IconName;
    }>;
  };
  locale: string;
}

const iconMap: Record<IconName, React.ReactNode> = {
  CircuitBoard: <CircuitBoard className="w-10 h-10" />,
  Factory: <Factory className="w-10 h-10" />,
  Wrench: <Wrench className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Lightbulb: <Lightbulb className="w-10 h-10" />,
  Cpu: <Cpu className="w-10 h-10" />,
  Gauge: <Gauge className="w-10 h-10" />,
  Workflow: <Workflow className="w-10 h-10" />,
  Settings: <Settings className="w-10 h-10" />,
  Award: <Award className="w-10 h-10" />
};

export default function ServicesSection({ data, locale }: ServicesSectionProps) {
  const isRtl = locale === 'fa';

  return (
    <section className="relative py-28 lg:py-36 bg-background overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-primary/5" />
        
        {/* Very Subtle Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
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
              {isRtl ? "خدمات تخصصی ما" : "Our Specialized Services"}
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-text leading-tight">
            {data?.title || ""}
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mt-10 rounded" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {data?.services?.map((service, idx) => {
            const Icon = iconMap[service.icon] || <Zap className="w-10 h-10" />;

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
                      <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                        {Icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                    {service?.title || ""}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed text-[17px]">
                    {service?.description || ""}
                  </p>

                  {/* Learn More */}
                  <div className="mt-8 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span>{isRtl ? "بیشتر بدانید" : "Learn More"}</span>
                    <ArrowRight className={`w-5 h-5 transition-transform ${isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="mt-8 h-0.5 w-12 bg-primary/40 group-hover:w-20 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}