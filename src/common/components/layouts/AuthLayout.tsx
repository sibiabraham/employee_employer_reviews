'use client';
import { PageLayoutQueryProps } from '@/common/types/common';
import { cn } from '@/common/utils/cn';
import { usePathname } from 'next/navigation';

const AuthLayout = ({ children, className }: PageLayoutQueryProps) => {
  const pathname = usePathname();
  const mainPages = ['/login', '/register'];
  const isMainPage = mainPages.includes(pathname);

  return (
    <main className='relative bg-white'>
      {!isMainPage && <p>Header</p>}
      <div
        className={cn(
          'border-x-high-grey max-w-full-page relative mx-auto overflow-hidden text-black min-[1921px]:border-x',
          className
        )}
      >
        <div className=''>{children}</div>
      </div>
      {!isMainPage && <p>Footer</p>}
    </main>
  );
};

export default AuthLayout;
