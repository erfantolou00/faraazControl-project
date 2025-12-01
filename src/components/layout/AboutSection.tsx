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
  Settings: <Settings className="w-9 h-9" />,
  Wrench: <Wrench className="w-9 h-9" />,
  Lightbulb: <Lightbulb className="w-9 h-9" />,
  Zap: <Zap className="w-9 h-9" />,
  Shield: <Shield className="w-9 h-9" />,
  Award: <Award className="w-9 h-9" />,
  Cpu: <Cpu className="w-9 h-9" />,
  Gauge: <Gauge className="w-9 h-9" />,
};

export default function AboutSection({ data , locale }: AboutSectionProps) {
  const isRtl = locale === 'fa';

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      
      {/* Electric Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff08_1px,transparent_1px),linear-gradient(to_bottom,#0066ff08_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Animated Electric Beams */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-1 h-96 bg-primary/30 blur-xl"
            initial={{ x: `${25 + i * 25}%`, y: -400 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 18 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
          />
        ))}

        {/* Glow Orbs */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-xl mb-8"
          >
            <Zap className="w-7 h-7 text-primary animate-pulse" />
            <span className="font-bold text-primary text-xl">
              {isRtl ? "چرا فراز کنترل؟" : "Why Faraz Control?"}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-text-secondary">
            {data?.title || ""}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-text/70 mt-8 max-w-4xl mx-auto leading-relaxed"
          >
            {data?.description || ""}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-36 h-1.5 bg-primary mx-auto mt-10 rounded-full shadow-lg shadow-primary/50"
          />
        </motion.div>

        {/* Features Grid - Luxury Industrial Cards */}
        {data?.features && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {data?.features?.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || <Zap className="w-9 h-9" />;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  className="group relative"
                >
                  <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden
                    hover:border-primary/50 hover:shadow-primary/30 transition-all duration-500">

                    {/* Electric Border Glow */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 -z-10" />

                    {/* Corner Neon Lines */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/60 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-primary/60 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Icon Container */}
                    <div className="mb-8 relative">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-primary/10 group-hover:bg-primary/20 
                        border border-primary/40 group-hover:border-primary/60 transition-all duration-500">
                        <div className="absolute inset-0 rounded-3xl bg-primary blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                        <div className="relative text-primary group-hover:scale-110 transition-transform duration-500">
                          {Icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black text-text-secondary mb-4 group-hover:text-primary transition-colors duration-500">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text/70 text-lg leading-relaxed group-hover:text-text/90 transition-colors duration-500">
                      {feature.description}
                    </p>

                    {/* Bottom Glow Line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
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