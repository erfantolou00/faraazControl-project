'use client';

import { motion } from 'framer-motion';
import { Settings, Wrench, Lightbulb, Zap, Shield, Award } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  data: {
    title: string;
    description: string;
    features?: Feature[];
  };
}

// Icon Mapping
const iconMap: Record<string, React.ReactNode> = {
  '⚙️': <Settings className="w-8 h-8" />,
  '🔧': <Wrench className="w-8 h-8" />,
  '💡': <Lightbulb className="w-8 h-8" />,
  '⚡': <Zap className="w-8 h-8" />,
  '🛡️': <Shield className="w-8 h-8" />,
  '🏆': <Award className="w-8 h-8" />,
};

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden mt-2 rounded-xl">

      {/* BACKGROUND: Grid + Soft Glow */}
      <div className="absolute inset-0 -z-10  bg-background/50"></div>
      <div className="absolute top-0 left-1/4 w-48 h-[120%] bg-primary/20 blur-3xl rotate-45"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-[120%] bg-accent/20 blur-3xl -rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
            {data.title}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-xl text-text/70 mt-6 leading-relaxed"
          >
            {data.description}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-28 h-1 bg-primary mt-6 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* FEATURES GRID */}
        {data.features && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {data.features.map((feature, idx) => {
              const Icon = iconMap[feature.icon] || <Settings className="w-8 h-8" />;

              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl 
                    shadow-xl shadow-black/5 hover:border-primary/40 transition-all duration-300 overflow-hidden">

                    {/* Electric Glow */}
                    <div className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur-2xl bg-primary transition-all duration-500"></div>

                    <div className="relative z-10">

                      {/* ICON */}
                      <div className="mb-6">
                        <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl 
                          bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                          <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl opacity-50 group-hover:opacity-80 transition-all duration-500"></div>
                          <div className="text-primary relative">{Icon}</div>
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-text/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* DECORATIVE STROKES */}
                    <span className="absolute top-0 right-0 w-24 h-24 border-t border-r border-primary/0 
                      group-hover:border-primary/40 rounded-tr-3xl transition-all duration-300"></span>
                    <span className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-primary/0 
                      group-hover:border-primary/40 rounded-bl-3xl transition-all duration-300"></span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
