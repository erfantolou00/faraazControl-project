"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface TrustSectionProps {
  data: {
    eyebrow: string;
    title: string;
    items: string[][];
  };
  locale: string;
}

export default function TrustSection({ data }: TrustSectionProps) {
  return (
    <section className="bg-background py-24 lg:py-32 border-t border-border">
      <div className="container px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          {/* Left Side - Title */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              {data.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-text sm:text-5xl lg:text-6xl">
              {data.title}
            </h2>
          </div>

          {/* Trust Items */}
          <div className="grid gap-6 sm:grid-cols-2">
            {data.items.map(([title, description], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-border bg-background-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-7 text-xl font-bold text-text group-hover:text-primary transition-colors">
                  {title}
                </h3>

                <p className="mt-4 text-text-secondary leading-relaxed">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}