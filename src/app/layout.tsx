import "./globals.css";

import { ReactNode } from 'react';

export const metadata = {
  title: 'Faraz Control',
  description: 'Electrical Panels Design & Development',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa">
            <link rel="icon" type="image/webp" sizes="16x16" href="/LOGO_NoBg.webp" />

      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
