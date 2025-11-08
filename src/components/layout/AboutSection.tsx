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

// Icon mapping
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
    <section className="py-20 lg:py-28 bg-background-card transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {data.title}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-text/80 max-w-3xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"
          ></motion.div>
        </motion.div>

        {/* Features Grid */}
        {data.features && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.features.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon] || <Settings className="w-8 h-8" />;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-full bg-background border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="relative mb-6 inline-block">
                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                        <div className="relative w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                          <div className="text-primary">
                            {IconComponent}
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-primary/0 group-hover:border-primary/20 rounded-tr-2xl transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-primary/0 group-hover:border-primary/20 rounded-bl-2xl transition-all duration-300"></div>
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
