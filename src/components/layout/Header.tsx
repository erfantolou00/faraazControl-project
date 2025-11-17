'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, Globe } from 'lucide-react';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import fa from '../../lib/i18n/fa.json';
import en from '../../lib/i18n/en.json';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const otherLocale = locale === 'fa' ? 'en' : 'fa';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const texts = locale === 'fa' ? fa : en;
  const pathname = usePathname();

  // RTL / LTR Handling
  useEffect(() => {
    const isRtl = pathname.startsWith('/fa');
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtl ? 'fa' : 'en';
  }, [pathname]);

  // Scroll reaction
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group select-none">
            <motion.div
              className="relative bg-primary/10 p-2 rounded-xl"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.25 }}
            >
              <Zap className="w-6 h-6 text-primary" />
            </motion.div>

            <motion.span
              className="text-xl font-bold text-primary group-hover:text-accent transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {texts.header.title.split(" - ")[0]}
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3">
            {texts.header.menu.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-xl transition-all 
                    ${
                      isActive
                        ? "text-primary bg-primary/10 shadow-sm"
                        : "text-text/70 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <motion.div
                      layoutId="menuActive"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                      className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                    />
                  )}
                </Link>
              );
            })}

            {/* Language Switch */}
            <Link
              href={`/${otherLocale}`}
              className="ml-3 px-3 py-2 text-sm border border-primary/30 text-primary rounded-xl 
                         hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>{otherLocale.toUpperCase()}</span>
            </Link>

            <ThemeSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-primary/10 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-2">

              {texts.header.menu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block px-4 py-3 rounded-xl text-base font-medium transition-all
                      ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-text/80 hover:text-primary hover:bg-primary/5"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-border/50 flex justify-between items-center">
                <Link
                  href={`/${otherLocale}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 border border-primary/30 text-primary rounded-xl hover:bg-primary/10 flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{otherLocale.toUpperCase()}</span>
                </Link>

                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
