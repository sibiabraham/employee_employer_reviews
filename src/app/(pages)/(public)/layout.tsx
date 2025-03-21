import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import MainLayout from '@/common/components/layouts/MainLayout';
import { ThemeProvider } from '@/common/context/theme-provider/theme-provider';
import { quicksand, manrope } from '@/common/fonts';

export const metadata: Metadata = {
  title: 'Employee Employer Review',
  description: 'Employee Employer Review',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${quicksand.variable} ${manrope.variable} antialiased`}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
