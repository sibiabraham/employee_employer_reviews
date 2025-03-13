import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  Youtube,
} from '@/common/icons';
import React from 'react';

const ContactSection = () => {
  return (
    <div className='md: w-full min-w-full pb-5 text-center md:w-auto md:min-w-1/4 md:pb-0 md:text-start'>
      <div className='m-auto flex w-full flex-col items-center md:w-[264px] md:items-baseline'>
        <div className='font-manrope text-[23px] leading-[60px] font-extrabold'>
          <p>Connect with Us</p>
        </div>
        <div className='flex items-center gap-5'>
          <FacebookIcon />
          <LinkedinIcon />
          <TwitterIcon />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
