'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    imageUrl: string;
  };
  locale: string;
}

export default function HeroSection({ data, locale }: HeroSectionProps) {
  const isRtl = locale === 'fa';

  return (
    <section className="px-4 sm:px-10 py-12 md:py-20">
      <div className="max-w-7xl max-lg:max-w-3xl mx-auto">
        <div className={`grid lg:grid-cols-2 items-center gap-x-12 gap-y-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* Text Column */}
          <div className={`max-lg:text-center ${isRtl ? 'lg:order-2' : ''}`}>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:text-5xl text-4xl leading-tight! font-bold text-primary mb-6 transition-colors duration-300"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-base md:text-lg text-text/90 leading-relaxed"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`mt-12 flex flex-wrap max-lg:justify-center gap-4 ${isRtl ? 'justify-end' : ''}`}
            >
              <Link
                href={`/${locale}/contact`}
                className="px-6 py-3 text-base font-semibold text-background border border-primary bg-primary rounded-full transition-all hover:bg-primary/80 focus:outline-none"
              >
                {data.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="px-6 py-3 text-base font-semibold text-primary border border-primary rounded-full hover:bg-primary/20 transition-all focus:outline-none"
              >
                {data.ctaSecondary}
              </Link>
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="w-full aspect-12/9 lg:rounded-lg shadow-xl overflow-hidden"
          >
            <Image  
                src={data.imageUrl}
                alt="Hero Image"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
