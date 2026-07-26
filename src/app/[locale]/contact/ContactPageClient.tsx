"use client";

import { useState } from "react";
import { PhoneCall, MapPin, Clock, Send, Mail } from "lucide-react";
import type { ContactPageData } from "./page";

interface ContactPageClientProps {
  data: ContactPageData;
  locale: string;
}

export default function ContactPageClient({
  data,
  locale,
}: ContactPageClientProps) {
  const isRtl = locale === "fa";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const inputClass =
    "w-full rounded-2xl border border-border bg-background-card px-5 py-3.5 text-text transition focus:border-primary focus:outline-none";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative border-b border-border bg-background py-20 lg:py-28">
        <div className="container px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black leading-tight text-text md:text-5xl lg:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-6 text-lg text-text-secondary md:text-xl">
              {data.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-text md:text-3xl">
                {data.form.title}
              </h2>
              <p className="mt-2 text-text-secondary">{data.form.subtitle}</p>
            </div>

            {submitted && (
              <div className="mb-8 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-primary">
                {data.form.success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-secondary">
                    {data.form.name}
                  </label>
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
                  <label className="mb-2 block text-sm font-medium text-text-secondary">
                    {data.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-text-secondary">
                    {data.form.email}
                  </label>
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
                  <label className="mb-2 block text-sm font-medium text-text-secondary">
                    {data.form.phone}
                  </label>
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
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  {data.form.subject}
                </label>
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
                <label className="mb-2 block text-sm font-medium text-text-secondary">
                  {data.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={data.form.messagePlaceholder}
                  className={`${inputClass} resize-y rounded-3xl`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-text-inverse transition hover:bg-primary-light disabled:opacity-70 md:w-auto"
              >
                {isSubmitting ? data.form.submitting : data.form.submit}
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h3 className="mb-8 text-2xl font-bold text-text">
                {data.info.title}
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">
                      {data.info.phoneLabel}
                    </p>
                    <a
                      href={data.info.phoneHref}
                      className="text-lg text-text-secondary transition hover:text-primary"
                      dir="ltr"
                    >
                      {data.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">
                      {data.info.emailLabel}
                    </p>
                    <a
                      href={`mailto:${data.info.email}`}
                      className="text-text-secondary transition hover:text-primary"
                      dir="ltr"
                    >
                      {data.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">
                      {data.info.addressLabel}
                    </p>
                    <p className="leading-relaxed text-text-secondary">
                      {data.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">
                      {data.info.hoursLabel}
                    </p>
                    <p className="whitespace-pre-line text-text-secondary">
                      {data.info.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-72 overflow-hidden rounded-3xl border border-border bg-zinc-900 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <p className="text-text-secondary">{data.info.mapLoading}</p>
                </div>
              </div>
              {/* بعداً iframe نقشه را اینجا بگذار */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}