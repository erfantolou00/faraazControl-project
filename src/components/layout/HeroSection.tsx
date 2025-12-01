'use client'

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary?: string;
    carouselImages?: string[];
    slideCaptions?: { title: string; subtitle: string }[]; // اختیاری
  };
  locale: string;
}

export default function HeroSection({ data , locale }: HeroSectionProps) {
  const isRtl = locale === "fa";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
  "/heroSection/1.jpg",
  "/heroSection/2.jpg",
  "/heroSection/3.jpg",
  "/heroSection/4.jpg",
];

  // Auto Play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // کپشن هر اسلاید (اگر دادی)
  const captions = data.slideCaptions || [
    { title: "تابلوهای MV/LV پیشرفته", subtitle: "استاندارد IEC 61439" },
    { title: "اتوماسیون صنعتی", subtitle: "PLC & SCADA یکپارچه" },
    { title: "پروژه‌های نیروگاهی", subtitle: "بیش از ۱۰۰ مگاوات نصب شده" },
    { title: "تضمین کیفیت ۵ ساله", subtitle: "خدمات پس از فروش ۲۴/۷" },
  ];

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      
      {/* Animated Electric Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(0,102,255,0.08)_50%,transparent_51%),linear-gradient(transparent_49%,rgba(0,212,255,0.08)_50%,transparent_51%)] bg-[size:80px_80px] animate-pulse" />
        
        {/* Floating Electric Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-64 bg-gradient-to-b from-primary to-transparent blur-xl"
            initial={{ x: `${i * 25}%`, y: -300 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className=" relative z-10 grid lg:grid-cols-2 gap-20 items-center px-6 lg:px-16">
        
        {/* LEFT - TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 120 : -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={isRtl ? "text-right lg:order-2" : "text-left"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary/10 border border-primary/40 backdrop-blur-2xl mb-10 shadow-lg shadow-primary/20"
          >
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="font-bold text-primary text-lg">
              {isRtl ? "فراز کنترل" : "Industrial Electrical Panel "}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-text-muted/70 via-text-muted/90 to-primary/70"
          >
            {data?.title || ""}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-xl sm:text-2xl text-text/75 mt-8 max-w-2xl leading-relaxed"
          >
            {data?.subtitle || ""}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className={`flex flex-wrap gap-6 mt-12 ${isRtl ? "" : ""}`}
          >
            <Link
              href={`/${locale}/contact`}
              className="group relative px-10 py-5 bg-primary text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-4">
                {data?.ctaPrimary || ""}
                <ArrowIcon className={`w-7 h-7 transition-transform group-hover:${isRtl ? "-translate-x-3 " : "translate-x-3 "}`} />
              </span>
              <div className="absolute inset-0 bg-white/30 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-10 mt-20 text-text/70"
          >
            {["۵۰۰+ پروژه", "۱۵+ سال تجربه", "ISO 9001", "تضمین ۵ ساله"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-primary rounded-full relative" />
                <span className="font-semibold text-lg ml-3">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT - NATIVE CAROUSEL */}
        <div className="relative rounded-3xl overflow-hidden shadow-3xl">
          <div className="relative aspect-[4/3] lg:aspect-[5/4]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Caption on Image */}
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <motion.h3
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-black drop-shadow-2xl"
                  >
                    {captions[currentSlide % captions.length].title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl mt-2 opacity-90 drop-shadow-lg"
                  >
                    {captions[currentSlide % captions.length].subtitle}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  i === currentSlide
                    ? "w-12 bg-primary shadow-lg shadow-primary/50"
                    : "bg-white/40 backdrop-blur-sm"
                }`}
              />
            ))}
          </div>

          {/* Prev/Next Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-primary/40 transition-all group"
          >
            <ArrowLeft className={`w-4 h-4 text-white ${isRtl ? "" : ""}`} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-primary/40 transition-all group"
          >
            <ArrowRight className={`w-4 h-4 text-white ${isRtl ? "" : ""}`} />
          </button>

          {/* Glow Effects */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}