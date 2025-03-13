import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { MenuItemsProps } from '../types/MenuType';

const MenuItems = ({
  onLinkClick,
  menuData,
  header,
  className,
}: MenuItemsProps) => {
  const pathname = usePathname();

  return menuData.map((menu) => {
    const isActive = pathname === menu.menuLink;

    return (
      <li key={menu.id}>
        <Link
          href={menu.menuLink}
          onClick={onLinkClick}
          className={`${className} ${
            header &&
            isActive &&
            `after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[33px] after:-translate-x-1/2 after:translate-y-[100%] after:rounded-sm after:bg-white after:content-[""] ${onLinkClick ? 'text-[#007DFC] md:text-white' : 'text-white'}`
          }`}
        >
          {menu.menuTitle}
        </Link>
      </li>
    );
  });
};

export default MenuItems;
