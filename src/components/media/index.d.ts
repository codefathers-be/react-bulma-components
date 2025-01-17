import { BulmaComponent } from '..';

export interface MediaItemProps {
  align?: 'center' | 'right' | 'left';
}

declare const Media: BulmaComponent<{}, 'article'> & {
  Item: BulmaComponent<MediaItemProps, 'div'>;
};

export default Media;
