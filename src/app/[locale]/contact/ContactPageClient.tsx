"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, PhoneCall, Send } from "lucide-react";
import type { ContactPageData } from "@/lib/i18n";

interface ContactPageClientProps {
  data: ContactPageData;
  locale: string;
}

export default function ContactPageClient({ data }: ContactPageClientProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);

    // Simulate API — بعداً به API واقعی وصل کن
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitted(true);
    setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClass =
    "w-full border border-border bg-background-card px-4 py-3 text-sm text-text transition focus:border-primary focus:outline-none";
  const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wide text-text-secondary";

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-background-alt">
        <div className="container px-6 py-14 lg:px-10 lg:py-16">
          <div className="max-w-2xl border-s-2 border-primary ps-5">
            <h1 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">
              {data.hero.title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">
              {data.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-lg font-semibold text-text">{data.form.title}</h2>
              <p className="mt-1 text-sm text-text-secondary">{data.form.subtitle}</p>

              {submitted && (
                <div className="mt-6 border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-primary">
                  {data.form.success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>{data.form.name}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{data.form.company}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className={labelClass}>{data.form.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{data.form.phone}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{data.form.subject}</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">{data.form.subjectPlaceholder}</option>
                    {data.form.subjects.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>{data.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={data.form.messagePlaceholder}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-text-inverse transition hover:bg-primary-light disabled:opacity-70 md:w-auto"
                >
                  {isSubmitting ? data.form.submitting : data.form.submit}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-text">{data.info.title}</h2>

              <div className="mt-6 divide-y divide-border border border-border">
                <InfoRow icon={<PhoneCall className="h-4 w-4" />} label={data.info.phoneLabel}>
                  <a href={data.info.phoneHref} className="text-sm text-text-secondary transition hover:text-primary" dir="ltr">
                    {data.info.phone}
                  </a>
                </InfoRow>
                <InfoRow icon={<Mail className="h-4 w-4" />} label={data.info.emailLabel}>
                  <a href={`mailto:${data.info.email}`} className="text-sm text-text-secondary transition hover:text-primary" dir="ltr">
                    {data.info.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<MapPin className="h-4 w-4" />} label={data.info.addressLabel}>
                  <p className="text-sm leading-6 text-text-secondary">{data.info.address}</p>
                </InfoRow>
                <InfoRow icon={<Clock className="h-4 w-4" />} label={data.info.hoursLabel}>
                  <p className="whitespace-pre-line text-sm leading-6 text-text-secondary">{data.info.hours}</p>
                </InfoRow>
              </div>

              <div className="relative mt-6 h-56 border border-border bg-background-alt">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <MapPin className="h-8 w-8 text-primary" />
                  <p className="text-sm text-text-secondary">{data.info.mapLoading}</p>
                </div>
                {/* بعداً iframe نقشه را اینجا بگذار */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center border border-border bg-background text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">{label}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
