'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    callToAction: string;
  };
    locale: string;
}

export default function HeroSection({ data , locale }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start container mx-auto p-8">
      {/* Animated Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-5xl md:text-6xl font-extrabold text-primary transition-colors duration-300"
      >
        {data.title}
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-text/90 leading-relaxed max-w-2xl"
      >
        {data.subtitle}
      </motion.p>

      {/* Animated CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 flex flex-wrap gap-4"
      >
        <Link
          href={`/${locale}/contact`}
          className="px-6 py-3 rounded-md bg-primary text-background font-semibold transition-colors duration-300 hover:bg-primary/80"
        >
          {locale === 'fa' ? 'تماس با ما' : 'Contact Us'}
        </Link>
        <Link
          href={`/${locale}/projects`}
          className="px-6 py-3 rounded-md border border-primary text-primary font-semibold transition-colors duration-300 hover:bg-primary/20"
        >
          {locale === 'fa' ? 'پروژه‌ها' : 'Projects'}
        </Link>
      </motion.div>
    </section>
  );
}
