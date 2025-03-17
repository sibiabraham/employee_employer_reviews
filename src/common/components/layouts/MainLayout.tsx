'use client';
import { PageLayoutQueryProps } from '@/common/types/common';
import { cn } from '@/common/utils/cn';
import Footer from './footer/Footer';
import Header from './header/Header';

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
        <div className=''>{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
