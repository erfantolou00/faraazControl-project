'use client'
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

const Header = ({ locale }: HeaderProps) => {
  const otherLocale = locale === 'fa' ? 'en' : 'fa';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const texts = locale === 'fa' ? fa : en;
  const pathname = usePathname();
  const isRtl = locale === 'fa';

  useEffect(() => {
    const isRtlPath = pathname.startsWith('/fa');
    document.documentElement.dir = isRtlPath ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtlPath ? 'fa' : 'en';
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border/50' 
          : 'bg-background/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md group-hover:blur-lg transition-all"></div>
              <div className="relative bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
              {texts.header.title.split(' - ')[0]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {texts.header?.menu?.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-text/80 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Language Switch */}
            <Link
              href={`/${otherLocale}`}
              className="ml-2 px-3 py-2 text-sm font-medium border border-primary/30 text-primary rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>{otherLocale.toUpperCase()}</span>
            </Link>

            {/* Theme Switcher */}
            <div className="ml-2">
              <ThemeSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-text hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {texts.header?.menu?.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text/80 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <Link
                  href={`/${otherLocale}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-sm font-medium border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{otherLocale.toUpperCase()}</span>
                </Link>
                <ThemeSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
