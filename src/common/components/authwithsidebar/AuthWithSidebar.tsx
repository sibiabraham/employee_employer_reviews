import React from 'react';
import WelcomeTextSection from '../welcometext/WelcomeTextSection';
import { PageLayoutQueryProps } from '@/common/types/common';

const AuthWithSidebar = ({ children }: PageLayoutQueryProps) => {
  return (
    <div className='grid min-h-screen grid-cols-1 bg-[url("/assets/jpg_png/registerBg.jpg")] bg-cover bg-right-bottom bg-no-repeat xl:grid-cols-2'>
      <WelcomeTextSection />
      {children}
    </div>
  );
};

export default AuthWithSidebar;
