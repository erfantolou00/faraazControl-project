import Link from 'next/link';

interface FooterProps {
  locale: string;
}

const Footer = ({ locale }: FooterProps) => {
  const otherLocale = locale === 'fa' ? 'en' : 'fa';

  return (
    <footer className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Faraz Control</div>
      <nav className="space-x-4">
        <Link href={`/${locale}`}>خانه</Link>
        <Link href={`/${locale}/about`}>درباره ما</Link>
        <Link href={`/${locale}/services`}>خدمات</Link>
        <Link href={`/${locale}/projects`}>پروژه‌ها</Link>
        <Link href={`/${locale}/contact`}>تماس</Link>
        <Link href={`/${otherLocale}`}>{otherLocale.toUpperCase()}</Link>
      </nav>
    </footer>
  );
};

export default Footer;
