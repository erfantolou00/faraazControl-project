'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

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
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 items-center gap-8 lg:gap-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`max-lg:text-center ${isRtl ? 'lg:order-2' : ''} space-y-6`}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isRtl ? 'راه‌حل‌های برقی پیشرفته' : 'Advanced Electrical Solutions'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight"
            >
              {data.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-text/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className={`flex flex-wrap max-lg:justify-center gap-4 pt-4 ${isRtl ? 'lg:justify-end' : ''}`}
            >
              <Link
                href={`/${locale}/contact`}
                className="group relative px-8 py-4 text-base font-semibold text-background bg-primary rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2"
              >
                <span>{data.ctaPrimary}</span>
                <ArrowIcon className={`w-5 h-5 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="group px-8 py-4 text-base font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                <span>{data.ctaSecondary}</span>
              </Link>
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-text/70">{isRtl ? 'پروژه' : 'Projects'}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-text/70">{isRtl ? 'سال تجربه' : 'Years Experience'}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-text/70">{isRtl ? 'رضایت مشتری' : 'Client Satisfaction'}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
              <Image  
                src={data.imageUrl}
                alt="Hero Image"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
