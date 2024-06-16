import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { ThemeProvider } from 'next-themes';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={rubik.className}>
      <body className={rubik.className}>
        <ThemeProvider attribute="class">
          <div className="grid-layout">
            <header className="p-4 grid-header header">
              <Header />
            </header>
            <main className="pt-16 pb-16 grid-main max-w-1200">{children}</main>
            <footer className="bg-header-bg pt-4 pb-4 grid-footer footer w-full">
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
