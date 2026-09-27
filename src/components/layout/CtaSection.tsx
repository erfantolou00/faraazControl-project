import Link from "next/link";
import { PhoneCall, Send } from "lucide-react";

interface CtaSectionProps {
  data: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  locale: string;
}

export default function CtaSection({ data, locale }: CtaSectionProps) {
  return (
    <section className="bg-background-alt">
      <div className="container grid gap-8 px-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-16">
        <div className="max-w-2xl border-s-2 border-primary ps-5">
          <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
            {data.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary">{data.description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-text-inverse transition hover:bg-primary-light"
          >
            {data.primary}
            <Send className="h-4 w-4" />
          </Link>
          <a
            href="tel:+982133951025"
            className="inline-flex items-center justify-center gap-2 border border-border bg-background-card px-5 py-3 text-sm font-semibold text-text transition hover:border-primary"
          >
            {data.secondary}
            <PhoneCall className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
