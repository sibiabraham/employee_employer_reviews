import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import AuthLayout from '@/common/components/layouts/AuthLayout';
import { ThemeProvider } from '@/common/context/theme-provider/theme-provider';
import { manrope, quicksand } from '@/common/fonts';

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
          <AuthLayout>{children}</AuthLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
