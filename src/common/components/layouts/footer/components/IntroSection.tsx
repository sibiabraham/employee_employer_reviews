import Logo from '@/common/components/logo/Logo';
import React from 'react';

const IntroSection = () => {
  return (
    <div className='w-full min-w-full pb-8 md:w-auto md:min-w-1/4 md:pb-0'>
      <div className='m-auto flex w-full flex-col md:w-[264px]'>
        <div className='font-manrope pb-[16px] text-center text-[36px] leading-[60px] font-extrabold md:text-start md:text-[23px]'>
          <p>RMS</p>
        </div>
        <Logo
          className='rounded-[10px] pb-[16px] md:h-[100px] md:w-[200px]'
          alt='Logo'
          imageUrl='/assets/jpg_png/employee_reviews.png'
          width={500} // Default (Mobile)
          height={100} // Default (Mobile)
        />
        <div className='font-manrope text-center text-[20px] leading-[28px] font-medium md:text-start md:text-[18px]'>
          <p>Empowering business through effective review management.</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
