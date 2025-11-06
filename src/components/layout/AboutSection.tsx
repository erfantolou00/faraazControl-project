'use client';

import { motion } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
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

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section className="py-20 bg-bg transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center"
        >
          {data.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text/90 max-w-3xl mx-auto text-center mb-12"
        >
          {data.description}
        </motion.p>

        {/* Features Grid */}
        {data.features && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-bg-card p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-text/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
