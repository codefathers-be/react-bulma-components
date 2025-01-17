import { BulmaComponentWithoutRenderAs } from '..';
import { Size } from '..'

export interface ProgressProps {
  value?: number;
  max?: number;
  size?: Size;
}

declare const Progress: BulmaComponentWithoutRenderAs<ProgressProps, 'progress'>;

export default Progress;
