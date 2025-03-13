import { CrossIcon, HamburgerIcon } from '@/common/icons';
import { useState } from 'react';
import MenuItems from './MenuItems';
import BackDrop from '@/common/components/backdrop/BackDrop';
import Button from '@/common/components/button/Button';
import { menuData } from '@/common/data/data';
import { MenuProps } from '../types/MenuType';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='relative'>
      {/* Mobile Hamburger Icon */}
      <Button className='md:hidden' onClick={() => setIsOpen(true)}>
        <HamburgerIcon width='30' height='30' />
      </Button>

      {/* Backdrop for Mobile */}
      {isOpen && <BackDrop onClick={() => setIsOpen(false)} />}

      {/* MenuItems instance styled responsively */}
      <div
        className={`bg-tr fixed top-0 right-0 z-50 h-full w-3/4 transform bg-white text-black shadow-lg transition-transform duration-300 md:static md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:text-white md:shadow-none ${isOpen ? 'translate-x-0 bg-white' : 'translate-x-full'} md:translate-x-0`}
      >
        {/* Mobile Close Button */}
        <Button className='p-4 md:hidden' onClick={() => setIsOpen(false)}>
          <CrossIcon width='30' height='30' className='text-white' />
        </Button>

        <div className='p-6 md:p-0'>
          <ul className='flex flex-col gap-5 md:flex-row md:items-center md:gap-12'>
            <MenuItems
              onLinkClick={() => setIsOpen(false)}
              menuData={menuData as MenuProps[]}
              header={true}
              className='font-quicksand relative inline-block text-[20px] leading-[25px] font-semibold'
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
