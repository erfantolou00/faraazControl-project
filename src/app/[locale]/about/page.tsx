'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Zap, 
  Shield, 
  Award, 
  Target, 
  Users, 
  Factory, 
  ArrowRight, 
  CircuitBoard,
  Gauge,
  Wrench
} from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner - Full Luxury Industrial */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image + Electric Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about/hero.jpg"
            alt="فراز کنترل - درباره ما"
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary)_0.5px,transparent_0.5px),linear-gradient(to_bottom,var(--color-primary)_0.5px,transparent_0.5px)] bg-[size:60px_60px] animate-pulse" />
          </div>
        </div>

        {/* Floating Electric Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-screen bg-gradient-to-b from-primary via-primary/60 to-transparent blur-xl"
            initial={{ x: `${15 + i * 20}%`, y: -500 }}
            animate={{ y: "120vh" }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}

        <div className="container relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              درباره <span className="text-primary">فراز کنترل</span>
            </h1>
            <p className="text-2xl md:text-3xl text-text mt-8 max-w-5xl mx-auto leading-relaxed">
              پیشرو در طراحی و ساخت تابلوهای برق صنعتی با استانداردهای جهانی
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="w-80 h-1.5 bg-primary mx-auto mt-12 rounded-full shadow-2xl shadow-primary/60"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Story - Two Column */}
      <section className="py-32 lg:py-44 bg-background-alt">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl lg:text-6xl font-black text-text mb-10 leading-tight">
                از یک جرقه تا رهبری صنعت
              </h2>
              <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  در سال ۱۳۸۸، با یک هدف ساده آغاز کردیم: ساخت تابلوهایی که نه فقط کار کنند، بلکه 
                  <span className="text-primary font-bold"> ایمن، هوشمند و پایدار</span> باشند.
                </p>
                <p>
                  امروز، پس از اجرای بیش از <strong className="text-primary">۵۰۰ پروژه موفق</strong> در صنایع نفت و گاز، پتروشیمی، فولاد و نیروگاه‌ها، 
                  نام <span className="text-primary">فراز کنترل</span> مترادف با کیفیت، دقت مهندسی و اعتماد شده است.
                </p>
                <p>
                  ما فقط تابلو نمی‌سازیم — راه‌حل‌های یکپارچه اتوماسیون و کنترل ارائه می‌دهیم.
                </p>
              </div>

              <motion.div
                whileHover={{ x: 20 }}
                className="mt-12 inline-flex items-center gap-4 text-primary font-bold text-xl"
              >
                <span>ادامه داستان با شماست</span>
                <ArrowRight className="w-8 h-8" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative rounded-3xl overflow-hidden shadow-3xl border border-border-light"
            >
              <Image
                src="/about/story.webp"
                alt="داستان فراز کنترل"
                width={900}
                height={700}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-10 right-10 text-right">
                <p className="text-6xl font-black text-primary drop-shadow-2xl">۱۵+</p>
                <p className="text-2xl text-text mt-2">سال تجربه و تعهد</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-text">
              ارزش‌هایی که ما را <span className="text-primary">متمایز</span> می‌کند
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "ایمنی در اولویت", desc: "تطابق کامل با IEC 61439، NEC و استانداردهای ملی" },
              { icon: Award, title: "کیفیت بی‌نهایت", desc: "دارای گواهینامه‌های ISO 9001، 14001 و OHSAS 18001" },
              { icon: Target, title: "نوآوری مداوم", desc: "استفاده از آخرین تکنولوژی‌های PLC، SCADA و IoT صنعتی" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.9 }}
                className="group relative p-10 rounded-3xl bg-background-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                <item.icon className="w-16 h-16 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-3xl font-black text-text mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-28 bg-background-alt">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { value: "۵۰۰+", label: "پروژه موفق" },
              { value: "۱۰۰+", label: "مشتری وفادار" },
              { value: "۱۵+", label: "سال تجربه" },
              { value: "۲۴/۷", label: "پشتیبانی فنی" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                <p className="text-6xl md:text-7xl font-black text-primary">{stat.value}</p>
                <p className="text-xl text-text-secondary mt-4">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Facility */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-3xl border border-border-light"
            >
              <Image src="/about/team.jpg" alt="تیم فراز کنترل" width={800} height={600} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-5xl font-black text-text flex items-center gap-4">
                  <Users className="w-12 h-12 text-primary" /> تیم ما
                </h3>
                <p className="text-xl text-text-secondary mt-2">متخصصین برق قدرت و اتوماسیون صنعتی</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-3xl border border-border-light"
            >
              <Image src="/about/factory.webp" alt="کارگاه فراز کنترل" width={800} height={600} className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-10 right-10 text-right">
                <h3 className="text-5xl font-black text-text flex items-center gap-4 justify-end">
                  <Factory className="w-12 h-12 text-primary" /> کارگاه مجهز
                </h3>
                <p className="text-xl text-text-secondary mt-2">مجهز به CNC، تست FAT و تجهیزات پیشرفته</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-primary/10 via-background-alt to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-black text-text mb-8">
              آماده همکاری با شما هستیم
            </h2>
            <p className="text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
              بیایید با هم پروژه بعدی شما را به یک شاهکار مهندسی تبدیل کنیم
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-background font-bold text-xl rounded-2xl shadow-2xl hover:shadow-primary/60 hover:bg-primary-light transition-all duration-400"
            >
              شروع همکاری
              <CircuitBoard className="w-8 h-8" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}