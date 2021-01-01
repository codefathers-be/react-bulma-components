import { BulmaComponent } from '..';
import { Color, Size } from '../../modifiers';

interface HeroProps {
  color?: Color;
  gradient?: boolean;
  size?: Size | 'fullheight';
  hasNavbar?: boolean;
}

export const Hero: BulmaComponent<HeroProps, 'section'> & {
  Head: BulmaComponent<{}, 'div'>;
  Body: BulmaComponent<{}, 'div'>;
  Footer: BulmaComponent<{}, 'div'>;
};