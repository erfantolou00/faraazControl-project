'use client'
import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';
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
    <footer className="bg-background-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className={`space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:blur-lg transition-all"></div>
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
                : 'High-quality electrical panel design and development in compliance with international standards'
              }
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:bg-primary/10 text-text/70 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:bg-primary/10 text-text/70 hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
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
                  className="text-sm text-text/70 hover:text-primary transition-colors duration-300"
                >
                  {item.label}
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
