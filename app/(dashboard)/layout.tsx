import { Inter } from '@next/font/google';
// import Sidebar from '@/components/Sidebar';
import clsx from 'clsx';

import GlassPane from '@/components/GlassPane';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic-ext', 'greek'],
});

interface DashboardRootLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardRootLayout({
  children,
}: DashboardRootLayoutProps) {
  return (
    <html lang="en" className={clsx(inter.variable, 'dark')}>
      <head />
      <body className="w-screen h-screen p-6 candy-mesh">
        <GlassPane className="container flex w-full h-full p-6 mx-auto align-center">
          {/* <Sidebar /> */}
          <main className="w-full h-full pl-6 ">{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}
