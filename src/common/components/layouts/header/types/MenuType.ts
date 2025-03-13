export type MenuProps = { id: number; menuTitle: string; menuLink: string };

export type MenuItemsProps = {
  onLinkClick?: () => void;
  menuData: MenuProps[];
  header?: boolean;
  className?: string;
};
