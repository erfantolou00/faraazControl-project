'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Zap, Sparkles, Shield, Cpu } from "lucide-react";

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
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.5 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden py-12 px-6 sm:px-10 lg:px-16 rounded-xl">

      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10  bg-background/50"></div>
        {/* Electric Beams */}
        <div className="absolute top-0 left-1/3 w-40 h-[120%] bg-primary/20 blur-3xl rotate-45"></div>
        <div className="absolute bottom-0 right-1/4 w-52 h-[120%] bg-accent/20 blur-3xl -rotate-45"></div>
      </div>

      {/* MAIN CONTENT GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center ${
          isRtl ? "text-right" : "text-left"
        }`}
      >

        {/* LEFT — TEXT */}
        <motion.div variants={item} className={isRtl ? "lg:order-2" : ""}>

          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isRtl ? "نوآوری در صنعت برق" : "Innovation in Electrical Industry"}</span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight 
            bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent drop-shadow-sm"
          >
            {data.title}
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-text/70 mt-6 max-w-xl leading-relaxed"
          >
            {data.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className={`flex flex-wrap gap-4 mt-10 ${
              isRtl ? "lg:justify-end" : ""
            }`}
          >
            {/* PRIMARY */}
            <Link
              href={`/${locale}/contact`}
              className="group px-8 py-4 rounded-xl bg-primary text-white font-semibold 
              shadow-[0_0_30px_-6px_rgba(0,0,0,0.4)] 
              hover:shadow-[0_0_35px_-4px_theme(colors.primary/60)]
              transition-all duration-300 flex items-center gap-3"
            >
              <span>{data.ctaPrimary}</span>
              <ArrowIcon className={`w-5 h-5 transition-transform ${
                isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
              }`} />
            </Link>

            {/* SECONDARY */}
            <Link
              href={`/${locale}/projects`}
              className="px-8 py-4 rounded-xl border border-primary/30 text-primary font-semibold 
              backdrop-blur-md bg-white/5 hover:bg-primary/10 transition-all duration-300 
              flex items-center gap-3"
            >
              <Zap className="w-5 h-5" />
              <span>{data.ctaSecondary}</span>
            </Link>
          </motion.div>

          {/* FEATURE CARDS */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-14"
          >
            <FeatureCard
              title={isRtl ? "پروژه فعال" : "Active Projects"}
              value="500+"
              icon={<Cpu className="w-5 h-5 text-primary" />}
            />
            <FeatureCard
              title={isRtl ? "سال تجربه" : "Years Experience"}
              value="15+"
              icon={<Shield className="w-5 h-5 text-primary" />}
            />
            <FeatureCard
              title={isRtl ? "رضایت مشتری" : "Satisfaction"}
              value="98%"
              icon={<Sparkles className="w-5 h-5 text-primary" />}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          variants={item}
          className="relative w-full"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
            <Image
              src={data.imageUrl}
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Glow Bubbles */}
          <div className="absolute -bottom-6 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="absolute -top-6 -left-10 w-32 h-32 bg-accent/20 blur-3xl rounded-full"></div>
        </motion.div>

      </motion.div>
    </section>
  );
}

/* FEATURE CARD COMPONENT */
function FeatureCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="p-5 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-inner text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-2xl font-bold text-primary">{value}</div>
      <div className="text-sm text-text/60 mt-1">{title}</div>
    </div>
  );
}
