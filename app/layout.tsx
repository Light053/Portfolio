import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ThemeProvider } from 'next-themes';
import ThemeSwitch from '@/helpers/themeSwitcher/ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class">
          <div className="grid-layout">
            <header className="p-4 grid-header header">
              <Header />
            </header>
            <main className="pt-16 pb-16 grid-main max-w-1200">{children}</main>
            <footer className="bg-header-bg pt-4 pb-4 grid-footer footer">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
