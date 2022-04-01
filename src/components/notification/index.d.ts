import { BulmaComponent } from '..';
import { Color } from '..';

export interface NotificationProps {
  color?: Color;
  light?: Boolean;
}

declare const Notification: BulmaComponent<NotificationProps, 'div'>;

export default Notification;
