'use client';
import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import fa from '../../lib/i18n/fa.json';
import en from '../../lib/i18n/en.json';

interface FooterProps {
  locale: string;
}

const Footer = ({ locale }: FooterProps) => {
  const otherLocale = locale === 'fa' ? 'en' : 'fa';
  const texts = locale === 'fa' ? fa : en;
  const isRtl = locale === 'fa';
  const footerLinks = texts.header?.menu || [];

  return (
    <footer className="relative bg-background-card border-t border-border/50 text-text">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,102,255,0.03) 1px, transparent 1px), linear-gradient(180deg, rgba(0,102,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-accent/30 rounded-lg blur-md"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <div className="relative bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
              </div>
              <span className="text-lg font-bold text-primary">
                {texts.header.title.split(' - ')[0]}
              </span>
            </Link>
            <p className="text-sm text-text/70 leading-relaxed">
              {isRtl
                ? 'طراحی و توسعه تابلوهای برقی با کیفیت بالا و مطابق با استانداردهای بین‌المللی'
                : 'High-quality electrical panel design and development in compliance with international standards'}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:bg-primary/10 text-text/70 hover:text-primary transition-all"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="text-base font-semibold text-primary">
              {isRtl ? 'لینک‌های سریع' : 'Quick Links'}
            </h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-sm text-text/70 hover:text-primary transition-all duration-300 group"
                >
                  <span className="group-hover:underline underline-offset-4">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="text-base font-semibold text-primary">
              {texts.footer.contact}
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href={`tel:${texts.footer.phone.replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-3 text-sm text-text/70 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>{texts.footer.phone}</span>
              </a>
              <a
                href="mailto:info@farazcontrol.com"
                className="flex items-center gap-3 text-sm text-text/70 hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>{texts.footer.email}info@farazcontrol.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-text/70 group">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>{texts.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Language & Newsletter */}
          <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="text-base font-semibold text-primary">
              {isRtl ? 'زبان' : 'Language'}
            </h3>
            <Link
              href={`/${otherLocale}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-primary/30 text-primary rounded-lg hover:bg-primary/10 hover:border-primary transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>{otherLocale.toUpperCase()}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text/60 ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
          <p>
            © {new Date().getFullYear()} {texts.header.title.split(' - ')[0]}. {isRtl ? 'تمام حقوق محفوظ است.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/about`} className="hover:text-primary transition-colors">
              {isRtl ? 'درباره ما' : 'About Us'}
            </Link>
            <Link href={`/${locale}/contact`} className="hover:text-primary transition-colors">
              {isRtl ? 'تماس با ما' : 'Contact'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;