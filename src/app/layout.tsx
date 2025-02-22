import { Header } from '@/core/layout/Header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Vazirmatn } from 'next/font/google';
import './globals.css';

const vazir = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic'],
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vazir.variable}  flex flex-col bg-background`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
