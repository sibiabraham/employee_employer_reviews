import Image from 'next/image';
import React from 'react';

const WelcomeTextSection = () => {
  return (
    <div className='hidden bg-[url("/assets/svg/registerBg.svg")] bg-cover bg-center bg-no-repeat xl:block'>
      <div className='w-[415px] translate-x-2/4 translate-y-full transform'>
        <div className='flex flex-col items-center text-center'>
          <p className='font-manrope text-[52px] font-bold text-white uppercase'>
            Welcome
          </p>
          <div className='pt-[15px]'>
            <Image
              src={'/assets/svg/stars.svg'}
              alt='Stars'
              width={205}
              height={52}
            />
          </div>
          <p className='pt-5 text-[28px] font-normal text-white'>
            Employee Review Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTextSection;
