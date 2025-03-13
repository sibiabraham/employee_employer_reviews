'use client';
import { cn } from '@/common/utils/cn';
import { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

type PageLayoutQueryProps = {
  children: ReactNode;
  className?: string;
};
const MainLayout = ({ children, className }: PageLayoutQueryProps) => {
  return (
    <main className=''>
      <div
        className={cn(
          'border-x-high-grey max-w-full-page mx-auto overflow-hidden text-black min-[1921px]:border-x',
          className
        )}
      >
        <Header />
        <div className='h-dvh w-dvw'>{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
