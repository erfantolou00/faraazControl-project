"use client";

import { motion } from "framer-motion";

interface ProcessSectionProps {
  data: {
    title: string;
    steps: string[][];
  };
  locale: string;
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-text">
            {data.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {data.steps.map(([number, title, description], index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-background-card p-8 lg:p-10 transition-all hover:bg-background-alt"
            >
              {/* Step Number */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-2xl font-black text-primary">
                {number}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-text group-hover:text-primary transition-colors">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-text-secondary leading-relaxed">
                {description}
              </p>

              {/* Subtle Bottom Line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}