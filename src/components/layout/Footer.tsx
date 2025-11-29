'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Instagram, 
  ArrowUp,
  CircuitBoard
} from 'lucide-react';

interface FooterProps {
  locale: string;
}

const Footer = ({ locale }: FooterProps) => {
  const isRtl = locale === 'fa';
  const otherLocale = locale === 'fa' ? 'en' : 'fa';

  // داده‌های موقت (بعداً از JSON می‌تونی بگیری)
  const t = {
    company: isRtl ? "فراز کنترل" : "Faraz Control",
    slogan: isRtl 
      ? "قدرت، ایمنی و نوآوری در هر اتصال" 
      : "Power, Safety & Innovation in Every Connection",
    quickLinks: isRtl 
      ? ["خانه", "درباره ما", "خدمات", "پروژه‌ها", "تماس با ما"]
      : ["Home", "About", "Services", "Projects", "Contact"],
    quickLinksHref: ["/", "/about", "/services", "/projects", "/contact"],
    phone: "021-28425785",
    mobile: "0912 177 2348",
    email: "info@farazcontrol.com",
    address: isRtl 
      ? "تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۲۵۸۰"
      : "Tehran, Valiasr St., Above Vanak Sq., No. 2580",
  };

  return (
    <footer className="relative bg-linear-to-t from-black/50 via-background/20 to-background/70 overflow-hidden border-t border-primary/10">
      
      {/* Electric Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0066ff0a_1px,transparent_1px),linear-gradient(to_bottom,#0066ff0a_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Animated Electric Beams */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-screen bg-gradient-to-b from-primary/40 to-transparent blur-xl"
            initial={{ x: `${20 + i * 30}%`, y: -1000 }}
            animate={{ y: "100vh" }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Glow Orbs */}
        <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Column 1: Brand & Slogan (Wider) */}
          <div className={`lg:col-span-5 space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 bg-primary/40 rounded-2xl blur-2xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
                <div className="relative p-4 bg-primary/10 rounded-2xl border border-primary/30 backdrop-blur-xl group-hover:border-primary/70 transition-all duration-500">
                  <CircuitBoard className="w-10 h-10 text-primary" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-black text-text-secondary tracking-tight">
                  {t.company}
                </h2>
                <p className="text-primary text-lg font-semibold mt-1">
                  {t.slogan}
                </p>
              </div>
            </motion.div>

            <p className="text-text/70 text-lg leading-relaxed max-w-lg">
              با بیش از ۱۵ سال تجربه، پیشرو در طراحی و ساخت تابلوهای برق صنعتی با استانداردهای جهانی
            </p>

            {/* Social Icons */}
            <div className={`flex gap-4 ${isRtl ? 'justify-end' : ''}`}>
              {[Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/60 transition-all duration-400 shadow-lg hover:shadow-primary/40"
                >
                  <Icon className="w-6 h-6 text-text/70 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={`lg:col-span-3 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="text-xl font-black text-primary flex items-center gap-3">
              <Zap className="w-6 h-6 animate-pulse" />
              {isRtl ? "لینک‌های سریع" : "Quick Links"}
            </h3>
            <nav className="space-y-4">
              {t.quickLinks.map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/${locale}${t.quickLinksHref[i]}`}
                    className="block text-lg text-text/70 hover:text-primary transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span className="group-hover:underline underline-offset-4">
                      {label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact Info */}
          <div className={`lg:col-span-4 space-y-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="text-2xl font-black text-primary">
              {isRtl ? "تماس با ما" : "Get in Touch"}
            </h3>

            <div className="space-y-6">
              <motion.a
                href={`tel:${t.mobile.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-4 group"
                whileHover={{ x: isRtl ? -10 : 10 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text/60">موبایل</p>
                  <p dir='ltr' className="text-lg font-semibold text-text">{t.mobile}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${t.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-4 group"
                whileHover={{ x: isRtl ? -10 : 10 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text/60">تلفن ثابت</p>
                  <p className="text-lg font-semibold text-text">{t.phone}</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@farazcontrol.com"
                className="flex items-center gap-4 group"
                whileHover={{ x: isRtl ? -10 : 10 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text/60">ایمیل</p>
                  <p className="text-lg font-semibold text-text break-all">info@farazcontrol.com</p>
                </div>
              </motion.a>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <p className="text-lg text-text/80 leading-relaxed">
                  {t.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`mt-10 pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6 text-text/60`}
        >
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} {t.company}. {isRtl ? "تمام حقوق محفوظ است." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-8">
            <Link href={`/${locale}/privacy`} className="hover:text-primary transition-colors">
              {isRtl ? "حریم خصوصی" : "Privacy Policy"}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-primary transition-colors">
              {isRtl ? "شرایط استفاده" : "Terms of Service"}
            </Link>
            
            {/* Language Switcher */}
            <Link
              href={`/${otherLocale}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-all font-semibold text-primary"
            >
              <Globe className="w-5 h-5" />
              <span>{otherLocale.toUpperCase()}</span>
            </Link>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 flex items-center justify-center hover:bg-primary/30 transition-all shadow-2xl shadow-primary/30 z-50"
          >
            <ArrowUp className="w-7 h-7 text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;