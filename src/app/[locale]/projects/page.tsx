'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Zap, 
  Factory, 
  Gauge, 
  Shield, 
  ArrowRight,
  Calendar,
  MapPin,
  Wrench
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string;
  year: string;
  location: string;
  category: string;
  power?: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "تابلوهای MV/LV پالایشگاه بندرعباس",
    client: "شرکت ملی نفت ایران",
    year: "۱۴۰۳",
    location: "بندرعباس",
    category: "نفت و گاز",
    power: "۳۲ مگاوات",
    description: "طراحی، ساخت و راه‌اندازی کامل سیستم توزیع برق اصلی پالایشگاه با استاندارد IEC 61439-1&2",
    image: "/projects/refinery.jpg",
    tags: ["MV Switchgear", "LV Panel", "اتوماسیون", "SCADA"]
  },
  {
    id: 2,
    title: "اتوماسیون خط تولید فولاد مبارکه",
    client: "فولاد مبارکه اصفهان",
    year: "۱۴۰۲",
    location: "اصفهان",
    category: "فولاد",
    power: "۱۸ مگاوات",
    description: "پیاده‌سازی سیستم کنترل یکپارچه با Siemens S7-1500 و WinCC Unified",
    image: "/projects/steel.png",
    tags: ["PLC", "HMI", "Drive System", "Industry 4.0"]
  },
  {
    id: 3,
    title: "تابلوهای برق نیروگاه سیکل ترکیبی",
    client: "نیروگاه دماوند",
    year: "۱۴۰۳",
    location: "تهران",
    category: "نیروگاه",
    power: "۱۲۰ مگاوات",
    description: "ساخت و نصب تابلوهای اصلی ۴۰۰V و سیستم حفاظت و کنترل",
    image: "/projects/powerplant.jpg",
    tags: ["Generator Panel", "Sync Panel", "Protection Relay", "FAT"]
  },
  {
    id: 4,
    title: "پروژه پتروشیمی بندر امام",
    client: "پتروشیمی بندر امام",
    year: "۱۴۰۲",
    location: "ماهشهر",
    category: "پتروشیمی",
    power: "۴۵ مگاوات",
    description: "تأمین و راه‌اندازی تابلوهای MCC و کنترل موتورهای ATEX",
    image: "/projects/petrochemical.jpg",
    tags: ["MCC", "ATEX", "VFD", "Explosion Proof"]
  },
  {
    id: 5,
    title: "سیستم مانیتورینگ کارخانه سیمان تهران",
    client: "سیمان تهران",
    year: "۱۴۰۳",
    location: "تهران",
    category: "سیمان",
    description: "طراحی و پیاده‌سازی SCADA مرکزی با بیش از ۱۵۰۰۰ تگ",
    image: "/projects/cement.jpg",
    tags: ["SCADA", "Historian", "Redundancy", "Reporting"]
  },
  {
    id: 6,
    title: "تابلوهای اضطراری بیمارستان میلاد",
    client: "بیمارستان میلاد",
    year: "۱۴۰۲",
    location: "تهران",
    category: "بهداشت و درمان",
    description: "سیستم UPS و تابلوهای ATS با قابلیت تغییر خودکار در کمتر از ۱۰ میلی‌ثانیه",
    image: "/projects/hospital.jpg",
    tags: ["UPS Panel", "ATS", "Critical Load", "Hospital Grade"]
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/projects/hero.jpg"
            alt="پروژه‌های فراز کنترل"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
        </div>

        {/* Electric Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-screen bg-gradient-to-b from-primary via-primary/50 to-transparent blur-xl"
            initial={{ x: `${15 + i * 20}%`, y: -600 }}
            animate={{ y: "120vh" }}
            transition={{ duration: 22 + i * 4, repeat: Infinity, ease: "linear", delay: i * 2 }}
          />
        ))}

        <div className="container relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              پروژه‌های <span className="text-primary">های</span> انجام‌شده
            </h1>
            <p className="text-2xl md:text-3xl text-text-secondary mt-8 max-w-5xl mx-auto">
              بیش از ۵۰۰ پروژه موفق در صنایع کلیدی ایران — از نفت و گاز تا فولاد و نیروگاه
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

      {/* Projects Grid */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.9 }}
                className="group relative overflow-hidden rounded-3xl bg-background-card border border-border hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/30"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full">
                    <span className="text-primary font-bold text-sm">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-text group-hover:text-primary transition-colors duration-400">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3 text-text-secondary">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-secondary">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    {project.power && (
                      <div className="flex items-center gap-3 text-text-secondary">
                        <Gauge className="w-5 h-5 text-primary" />
                        <span>{project.power}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 text-text-secondary">
                      <Factory className="w-5 h-5 text-primary" />
                      <span>{project.client}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover CTA */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="absolute inset-0"
                    aria-label={project.title}
                  />
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none group-hover:pointer-events-auto">
                    <span className="text-primary font-bold">مشاهده جزئیات</span>
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-background-alt to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-text mb-8">
              پروژه شما می‌تواند بعدی باشد
            </h2>
            <p className="text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
              آماده‌ایم تا چالش‌های برق و اتوماسیون صنعتی شما را به موفقیت تبدیل کنیم
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-6 bg-primary text-background font-bold text-xl rounded-2xl shadow-2xl hover:shadow-primary/60 hover:bg-primary-light transition-all duration-400 inline-flex items-center justify-center gap-4"
              >
                <Wrench className="w-7 h-7" />
                درخواست مشاوره فنی
              </Link>
              <Link
                href="/contact"
                className="px-12 py-6 border-2 border-primary text-primary font-bold text-xl rounded-2xl bg-background/50 backdrop-blur-xl hover:bg-primary/10 transition-all duration-400"
              >
                دانلود کاتالوگ پروژه‌ها (PDF)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}