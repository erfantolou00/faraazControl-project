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
    <section className="bg-background py-24 lg:py-32">
      <div className="container px-6 lg:px-10">
        <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-3xl font-black leading-tight text-text sm:text-5xl lg:text-6xl">
                {data.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
                {data.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:min-w-[280px]">
              {/* Primary Button */}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-text-inverse shadow-lg shadow-primary/30 transition hover:bg-primary-light active:scale-[0.985]"
              >
                {data.primary}
                <Send className="h-5 w-5" />
              </Link>

              {/* Secondary Button (Phone) */}
              <a
                href="tel:+982128425785"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-border bg-background-card px-8 py-4 text-base font-bold text-text transition hover:border-primary/40 hover:text-primary"
              >
                {data.secondary}
                <PhoneCall className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}