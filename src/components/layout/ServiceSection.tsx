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
  ArrowRight
} from 'lucide-react';

export type IconName = "Settings" | "Wrench" | "Lightbulb" | "Zap" | "Shield" | "Award" | "Cpu" | "Gauge" | "Workflow" | "CircuitBoard" | "Factory";

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

const iconMap = {
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
};

export default function ServicesSection({ data , locale }: ServicesSectionProps) {
  const isRtl = locale === 'fa';

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden bg-gradient-to-b from-background via-background to-primary/5">
      
      {/* Electric Background Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff0a_1px,transparent_1px),linear-gradient(to_bottom,#0066ff0a_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        {/* Floating Electric Particles */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-96 bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl"
            initial={{ x: `${15 + i * 25}%`, y: -500 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2.5,
            }}
          />
        ))}

        {/* Glow Orbs */}
        <div className="absolute top-10 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Section Header - Powerful & Prestigious */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto mb-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 px-9 py-5 rounded-full bg-primary/10 border-2 border-primary/40 backdrop-blur-2xl mb-10 shadow-2xl shadow-primary/20"
          >
            <Zap className="w-8 h-8 text-primary animate-pulse" />
            <span className="text-2xl font-black text-primary">
              {isRtl ? "خدمات تخصصی ما" : "Our Specialized Services"}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight  text-text-secondary">
            {data?.title || ""}
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="w-48 h-1.5 bg-primary mx-auto mt-12 rounded-full shadow-lg shadow-primary/60"
          />
        </motion.div>

        {/* Services Grid - High-End Industrial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.services?.map((service, idx) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || <Zap className="w-10 h-10" />;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.9, ease: "easeOut" }}
                className="group relative"
              >
                <div className="relative h-full p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl 
                  border border-white/20 shadow-2xl overflow-hidden
                  hover:border-primary/60 hover:shadow-3xl hover:shadow-primary/40 
                  transition-all duration-700 transform hover:-translate-y-3">

                  {/* Electric Glow on Hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 -z-10" />

                  {/* Neon Corner Accents */}
                  <div className="absolute top-0 left-0 w-40 h-40 border-t-4 border-l-4 border-primary/70 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 border-b-4 border-r-4 border-primary/70 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Icon with Electric Pulse */}
                  <div className="mb-10 relative">
                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl 
                      bg-primary/10 group-hover:bg-primary/20 border-2 border-primary/40 group-hover:border-primary/70 
                      transition-all duration-700">
                      <div className="absolute inset-0 rounded-3xl bg-primary blur-2xl opacity-40 group-hover:opacity-80 
                        scale-0 group-hover:scale-150 transition-all duration-700" />
                      <div className="relative text-primary group-hover:scale-110 transition-transform duration-500">
                        {Icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-text-muted mb-5 group-hover:text-primary transition-colors duration-500">
                    {service?.title || ""}
                  </h3>

                  {/* Description */}
                  <p className="text-text/70 text-lg leading-relaxed group-hover:text-text/90 transition-colors duration-500">
                    {service?.description || ""}
                  </p>

                  {/* CTA Arrow on Hover */}
                  <motion.div
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mt-8 flex items-center gap-3 text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <span>{isRtl ? "بیشتر بدانید" : "Learn More"}</span>
                    <ArrowRight className={`w-6 h-6 ${isRtl ? "rotate-180" : ""}`} />
                  </motion.div>

                  {/* Bottom Electric Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: idx * 0.1 + 0.6, duration: 1.2 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}