import Button from '@/common/components/button/Button';
import Container from '@/common/components/layouts/Container';
import React from 'react';

const RightSection = () => {
  return (
    <Container className='relative z-10 lg:h-auto'>
      <div className='relative flex translate-y-10 flex-col items-start text-left lg:translate-y-1/2'>
        <div className='w-full lg:w-[541px]'>
          <p className='font-manrope text-center text-[25px] leading-[60px] font-extrabold text-[#007DFC] lg:text-left lg:text-[50px]'>
            Reviews Management System
          </p>
        </div>
        <div className='mt-2 w-full lg:mt-4 lg:w-[511px]'>
          <p className='font-quicksand text-center text-[16px] leading-[33.75px] font-semibold text-[#000000B2] lg:text-left lg:text-[27px]'>
            Empower Your Business with Authentic Customer Feedback
          </p>
        </div>
        <div className='mt-[37.5px] flex w-full justify-center gap-10 lg:mt-[75px] lg:justify-normal'>
          <Button className='font-manrope rounded-xl bg-[#007DFC] px-[21px] py-[9px] font-extrabold text-white lg:px-[42px] lg:py-[18px] lg:text-[20px]'>
            GET START
          </Button>
          <Button className='font-manrope rounded-xl border border-solid border-[#007DFC] px-[14px] py-[9px] font-extrabold text-[#007DFC] uppercase lg:px-[29px] lg:py-[18px] lg:text-[18px]'>
            Register Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default RightSection;
