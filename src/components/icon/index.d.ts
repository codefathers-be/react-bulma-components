import { BulmaComponent } from '..';
import { Color, Size } from '..';

export interface IconProps {
  icon?: string;
  size?: Size | 'auto';
  align?: 'left' | 'right';
  color?: Color;
  text?: Boolean;
}

export declare const Icon: BulmaComponent<IconProps, 'span'> & {
  Text: BulmaComponent<{}, 'span'>;
};

export default Icon;