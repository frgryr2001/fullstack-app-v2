import GlassPane from '@/components/GlassPane';
import '@/styles/global.css';
import { Inter } from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic-ext', 'greek'],
});
export default function AuthRootLayout({ children }: any) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="w-screen h-screen p-6 rainbow-mesh">
        <GlassPane className="flex items-center justify-center w-full h-full">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
