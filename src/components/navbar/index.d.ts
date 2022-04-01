import { BulmaComponent } from '..';
import { Color } from '..';

export interface NavbarProps {
  transparent?: boolean;
  fixed?: 'top' | 'bottom';
  size?: 'large';
  color?: Color;
  active?: boolean;
}

export interface NavbarBurgerProps {
  onClick?: () => void;
}

export interface NavbarItemProps {
  active?: boolean;
  hoverable?: boolean;
}

export interface NavbarDropdownProps {
  boxed?: boolean;
  right?: boolean;
  up?: boolean;
}

export interface NavbarLinkProps {
  arrowless?: boolean;
}

export interface NavbarContainerProps {
  align?: 'left' | 'right';
}

declare const Navbar: BulmaComponent<NavbarProps, 'nav'> & {
  Brand: BulmaComponent<{}, 'div'>;
  Burger: BulmaComponent<NavbarBurgerProps, 'div'>;
  Menu: BulmaComponent<{}, 'div'>;
  Item: BulmaComponent<NavbarItemProps, 'a'>;
  Dropdown: BulmaComponent<NavbarDropdownProps, 'span'>;
  Link: BulmaComponent<NavbarLinkProps, 'span'>;
  Divider: BulmaComponent<{}, 'div'>;
  Container: BulmaComponent<NavbarContainerProps, 'div'>;
};

export default Navbar;
