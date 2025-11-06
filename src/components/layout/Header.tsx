'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  const texts = locale === 'fa' ? fa : en;
  const pathname = usePathname();
  useEffect(() => {
    // بررسی مسیر و تعیین dir بدون setState
    const isRtl = pathname.startsWith('/fa');
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = isRtl ? 'fa' : 'en';
  }, [pathname]);
  return (
    <header className="bg-background/90 text-text shadow-md sticky top-0 z-50 transition-colors duration-300 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* لوگو */}
        <Link
          href={`/${locale}`}
          className="text-2xl font-extrabold text-primary transition-colors duration-300 hover:text-accent"
        >
          {texts.header.title}
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {texts.header?.menu?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-text transition-colors duration-300 hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}

          {/* Language Switch */}
          <Link
            href={`/${otherLocale}`}
            className="ml-4 px-3 py-2 border border-primary text-primary rounded transition-colors duration-300 hover:bg-primary/20 hover:text-background"
          >
            {otherLocale.toUpperCase()}
          </Link>

          {/* Theme Switcher */}
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-text transition-colors duration-300 hover:text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden bg-background border-t border-border transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 px-4">
          {texts.header?.menu?.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-3 py-2 rounded text-text transition-colors duration-300 hover:bg-primary/20 hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href={`/${otherLocale}`}
              className="block px-3 py-2 rounded border border-primary text-primary transition-colors duration-300 hover:bg-primary/20 hover:text-background"
              onClick={() => setMobileMenuOpen(false)}
            >
              {otherLocale.toUpperCase()}
            </Link>
          </li>

          <li className="mt-2 flex justify-center">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
