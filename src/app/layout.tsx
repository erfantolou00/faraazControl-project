import "./globals.css";

import { ReactNode } from 'react';

export const metadata = {
  title: 'Faraz Control',
  description: 'Electrical Panels Design & Development',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
