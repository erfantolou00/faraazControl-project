import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

/* ==========================================================================
   Shared layout primitives for the public site.
   Every page (home, about, services, projects, contact) is built from
   these pieces so spacing, borders and typography stay consistent.
   ========================================================================== */

export function HomeSection({
  children,
  tone = "base",
}: {
  children: ReactNode;
  tone?: "base" | "alt";
}) {
  return (
    <section
      className={`border-b border-border py-14 lg:py-16 ${
        tone === "alt" ? "bg-background-alt" : "bg-background"
      }`}
    >
      <div className="container px-6 lg:px-10">{children}</div>
    </section>
  );
}

export function HomeHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 grid gap-4 border-b border-border pb-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
      <div>
        {eyebrow ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-text md:text-3xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl text-sm leading-7 text-text-secondary lg:justify-self-end">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function HomeCard({
  index,
  icon,
  title,
  description,
  footer,
}: {
  index?: string;
  icon?: ReactNode;
  title: string;
  description?: string;
  footer?: ReactNode;
}) {
  return (
    <article className="flex h-full flex-col border border-border bg-background-card p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        {icon ? (
          <span className="grid h-10 w-10 place-items-center border border-border bg-background text-primary">
            {icon}
          </span>
        ) : null}
        {index ? (
          <span className="text-xs font-semibold tracking-[0.18em] text-text-muted">
            {index}
          </span>
        ) : null}
      </div>
      <h3 className="text-base font-semibold leading-6 text-text">{title}</h3>
      {description ? (
        <p className="mt-2 flex-1 text-sm leading-7 text-text-secondary">{description}</p>
      ) : null}
      {footer ? <div className="mt-4 border-t border-border pt-3">{footer}</div> : null}
    </article>
  );
}

/* -------------------------------------------------------------------------
   Interior page hero: full-width photo, dark scrim, bottom-anchored title.
   Used by About / Services / Projects for a consistent "cover" moment.
   ------------------------------------------------------------------------- */
export function PageHero({
  image,
  alt,
  kicker,
  titleBefore,
  titleHighlight,
  titleAfter,
  subtitle,
  imageClassName = "object-cover",
  scrimClassName = "bg-linear-to-t from-background via-background/75 to-background/35",
  sectionClassName = "min-h-[46vh]",
}: {
  image: string;
  alt: string;
  kicker?: string;
  titleBefore?: string;
  titleHighlight?: string;
  titleAfter?: string;
  subtitle?: string;
  imageClassName?: string;
  scrimClassName?: string;
  sectionClassName?: string;
}) {
  return (
    <section className={`relative isolate flex items-end overflow-hidden border-b border-border ${sectionClassName}`}>
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={alt} fill priority sizes="100vw" className={imageClassName} />
        <div className={`absolute inset-0 ${scrimClassName}`} />
      </div>

      <div className="container px-6 pb-12 pt-28 lg:px-10">
        {kicker ? (
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-6 bg-primary" />
            {kicker}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
          {titleBefore ? <>{titleBefore} </> : null}
          {titleHighlight ? <span className="text-primary">{titleHighlight}</span> : null}
          {titleAfter ? <> {titleAfter}</> : null}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary lg:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Bottom-of-page call to action banner, shared by every interior page.
   ------------------------------------------------------------------------- */
export function PageCta({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: { label: string; href: string; icon?: ReactNode };
  secondary?: { label: string; href: string; icon?: ReactNode };
}) {
  return (
    <section className="bg-background-alt">
      <div className="container grid gap-8 px-6 py-14 lg:grid-cols-[1fr_auto] lg:items-center lg:px-10 lg:py-16">
        <div className="max-w-2xl border-s-2 border-primary ps-5">
          <h2 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{title}</h2>
          {description ? (
            <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-text-inverse transition hover:bg-primary-light"
          >
            {primary.label}
            {primary.icon}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center gap-2 border border-border bg-background-card px-5 py-3 text-sm font-semibold text-text transition hover:border-primary"
            >
              {secondary.label}
              {secondary.icon}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* Shared button classes for inline use where the Link/anchor differs. */
export const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-text-inverse transition hover:bg-primary-light";
export const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 border border-border bg-background-card px-5 py-3 text-sm font-semibold text-text transition hover:border-primary";
