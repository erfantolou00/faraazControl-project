'use client';

import { motion } from 'framer-motion';
import { CircuitBoard, Factory, Wrench, Zap, Shield, Lightbulb } from 'lucide-react';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  data: {
    title: string;
    services: Service[];
  };
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  '🔌': <CircuitBoard className="w-8 h-8" />,
  '🏭': <Factory className="w-8 h-8" />,
  '🛠️': <Wrench className="w-8 h-8" />,
  '⚡': <Zap className="w-8 h-8" />,
  '🛡️': <Shield className="w-8 h-8" />,
  '💡': <Lightbulb className="w-8 h-8" />,
};

export default function ServicesSection({ data }: ServicesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-background transition-colors duration-300 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            {data.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || <Zap className="w-8 h-8" />;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-background-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {IconComponent}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 group-hover:bg-primary rounded-b-2xl transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
