"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="grid h-10 w-10 place-items-center rounded-lg border border-border text-text-secondary hover:text-text"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
