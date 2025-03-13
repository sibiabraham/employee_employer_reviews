import MainLayout from '@/common/components/layouts/MainLayout';
import { quicksand, manrope } from '@/common/fonts';
import type { Metadata } from 'next';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
  title: 'Employee Reviews',
  description: 'Employee Reviews',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${quicksand.variable} ${manrope.variable}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
