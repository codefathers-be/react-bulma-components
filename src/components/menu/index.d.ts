import * as React from 'react';
import { BulmaComponent, BulmaComponentWithoutRenderAs } from '..';

export interface MenuListComponentProps {
  title?: React.ReactNode;
}

export interface MenuListItemProps {
  active?: boolean;
  children?: React.ReactNode;
}

declare const Menu: BulmaComponent<{}, 'aside'> & {
  List: BulmaComponentWithoutRenderAs<MenuListComponentProps, 'ul'> & {
    Item: BulmaComponent<MenuListItemProps, 'a'>;
  };
};

export default Menu;
