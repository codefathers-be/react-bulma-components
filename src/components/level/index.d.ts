import { BulmaComponent } from '..';

export interface LevelProps {
  breakpoint?: | 'mobile';
}

export interface LevelSideProps {
  align?: 'left' | 'right';
}

declare const Level: BulmaComponent<LevelProps, 'div'> & {
  Side: BulmaComponent<LevelSideProps, 'div'>;
  Item: BulmaComponent<{}, 'div'>;
};
export default Level;