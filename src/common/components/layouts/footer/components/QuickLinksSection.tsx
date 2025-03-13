import React from 'react';
import MenuItems from '../../header/components/MenuItems';
import { MenuProps } from '../../header/types/MenuType';
import { menuData } from '@/common/data/data';

const QuickLinksSection = () => {
  const filteredMenuData = menuData.slice(0, -1);
  return (
    <div className='w-full min-w-full pb-8 text-center md:w-auto md:min-w-1/4 md:pb-0 md:text-start'>
      <div className='m-auto flex w-full flex-col md:w-[264px]'>
        <div className='font-manrope text-[23px] leading-[60px] font-extrabold'>
          <p>Quick Links</p>
        </div>
        <ul>
          <MenuItems
            menuData={filteredMenuData as MenuProps[]}
            className='font-manrope pb-[14px] text-[18px] leading-[38px] font-medium'
          />
        </ul>
      </div>
    </div>
  );
};

export default QuickLinksSection;
