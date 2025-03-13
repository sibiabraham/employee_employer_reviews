import React from 'react';
import MenuItems from '../../header/components/MenuItems';
import { legalMenuData } from '@/common/data/data';
import { MenuProps } from '../../header/types/MenuType';

const LegalSection = () => {
  return (
    <div className='w-full min-w-full pb-8 text-center md:w-auto md:min-w-1/4 md:pb-0 md:text-start'>
      <div className='m-auto flex w-full flex-col md:w-[264px]'>
        <div className='font-manrope text-[23px] leading-[60px] font-extrabold'>
          <p>Legal</p>
        </div>
        <ul>
          <MenuItems
            menuData={legalMenuData as MenuProps[]}
            className='font-manrope pb-[14px] text-[18px] leading-[38px] font-medium'
          />
        </ul>
      </div>
    </div>
  );
};

export default LegalSection;
