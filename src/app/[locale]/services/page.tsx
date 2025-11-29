'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CircuitBoard, 
  Factory, 
  Wrench, 
  Cpu, 
  Shield, 
  Gauge,
  Workflow,
  Zap,
  ArrowRight,
  Settings,
  Lightbulb
} from 'lucide-react';
import LocaleLayout from '../layout';

export default function ServicesPage() {
  const services = [
    {
      icon: CircuitBoard,
      title: "طراحی تابلوهای برق صنعتی",
      desc: "طراحی دقیق MV/LV با نرم‌افزارهای EPLAN، AutoCAD Electrical و ETAP مطابق با استاندارد IEC 61439",
      image: "/services/design.jpg",
      features: ["تحلیل بار و اتصال کوتاه", "انتخاب بهینه تجهیزات", "طراحی 3D و شماتیک کامل"]
    },
    {
      icon: Factory,
      title: "ساخت و مونتاژ حرفه‌ای",
      desc: "ساخت تابلوهای برق در کارگاه مجهز با دستگاه‌های CNC، برش لیزر و تست پیشرفته",
      image: "/services/manufacturing.jpg",
      features: ["استفاده از برندهای معتبر جهانی", "مونتاژ دقیق و استاندارد", "کنترل کیفیت چندمرحله‌ای"]
    },
    {
      icon: Cpu,
      title: "اتوماسیون و کنترل صنعتی",
      desc: "پیاده‌سازی سیستم‌های PLC، HMI، SCADA، DCS و راهکارهای Industry 4.0",
      image: "/services/automation.webp",
      features: ["Siemens, Schneider, ABB", "پروگرام‌نویسی پیشرفته", "یکپارچه‌سازی با سیستم‌های موجود"]
    },
    {
      icon: Wrench,
      title: "نصب و راه‌اندازی در محل",
      desc: "تیم فنی مجرب برای نصب، راه‌اندازی و تست نهایی در سراسر کشور",
      image: "/services/installation.jpg",
      features: ["نصب اصولی و ایمن", "راه‌اندازی مرحله به مرحله", "آموزش اپراتورها"]
    },
    {
      icon: Shield,
      title: "تست کارخانه‌ای (FAT) و تحویل",
      desc: "تست کامل عملکرد، ایمنی و کیفیت قبل از ارسال با حضور مشتری",
      image: "/services/testing.webp",
      features: ["تست عایق، اتصال کوتاه و عملکرد", "گزارش جامع و مستند", "تایید نهایی مشتری"]
    },
    {
      icon: Settings,
      title: "پشتیبانی و نگهداری ۲۴/۷",
      desc: "خدمات پس از فروش، تعمیرات، به‌روزرسانی و قرارداد نگهداری سالیانه",
      image: "/services/support.png",
      features: ["پشتیبانی فنی تلفنی و حضوری", "قطعات یدکی اصلی", "قرارداد SLA"]
    },
  ];

  return (
    <>
      {/* Hero Section - Services Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/services/hero.jpg"
            alt="خدمات فراز کنترل"
            fill
            priority
            className="object-cover brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/10" />
        </div>

        {/* Electric Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-screen bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl"
            initial={{ x: `${10 + i * 18}%`, y: -600 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.8,
            }}
          />
        ))}

        <div className="container relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              خدمات <span className="text-primary">تخصصی</span> ما
            </h1>
            <p className="text-2xl md:text-3xl text-text-secondary mt-8 max-w-5xl mx-auto leading-relaxed">
              از طراحی تا پشتیبانی — یک راه‌حل کامل برای نیازهای برق و اتوماسیون صنعتی شما
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.4 }}
              className="w-96 h-1.5 bg-primary mx-auto mt-14 rounded-full shadow-2xl shadow-primary/60"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Full Width Cards with Image */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="space-y-32">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.15 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Image Side */}
                  <div className="relative rounded-3xl overflow-hidden shadow-3xl border border-border-light group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 text-text">
                      <Icon className="w-16 h-16 text-primary mb-4" />
                      <p className="text-4xl font-black">{service.title}</p>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`space-y-8 ${isEven ? 'lg:pr-10' : 'lg:pl-10'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-1 bg-primary rounded-full" />
                      <span className="text-primary font-bold text-lg">خدمت تخصصی</span>
                    </div>

                    <h2 className="text-5xl font-black text-text leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-xl text-text-secondary leading-relaxed">
                      {service.desc}
                    </p>

                    <ul className="space-y-4">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-4 text-text-secondary">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-lg">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="fa/contact"
                      className="inline-flex items-center gap-4 text-primary font-bold text-xl hover:gap-6 transition-all duration-400 mt-8"
                    >
                      <span>درخواست مشاوره رایگان</span>
                      <ArrowRight className="w-8 h-8" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-background-alt to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-text mb-8">
              آماده‌اید پروژه‌تان را شروع کنیم؟
            </h2>
            <p className="text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
              با تیم متخصص فراز کنترل، بهترین راه‌حل‌های برق و اتوماسیون صنعتی را دریافت کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="px-12 py-6 bg-primary text-background font-bold text-xl rounded-2xl shadow-2xl hover:shadow-primary/60 hover:bg-primary-light transition-all duration-400 inline-flex items-center gap-4"
              >
                شروع همکاری
                <Zap className="w-8 h-8" />
              </Link>
              <Link
                href="/projects"
                className="px-12 py-6 border-2 border-primary text-primary font-bold text-xl rounded-2xl backdrop-blur-xl bg-background/50 hover:bg-primary/10 transition-all duration-400"
              >
                مشاهده پروژه‌های انجام شده
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}