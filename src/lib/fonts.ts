import localFont from "next/font/local";

/**
 * Self-hosted fonts. Files live in src/fonts so Next can preload them
 * at build time without calling Google Fonts.
 *
 * - vazirmatn.woff2: Persian + Arabic + Latin (variable, weights 100–900)
 * - inter.woff2: Latin for the English locale (variable, weights 100–900)
 */
export const vazirmatn = localFont({
  src: [
    {
      path: "../fonts/vazirmatn.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

export const inter = localFont({
  src: [
    {
      path: "../fonts/inter.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["Arial", "sans-serif"],
});
