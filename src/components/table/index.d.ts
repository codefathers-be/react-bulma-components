import { BulmaComponent, BulmaComponentWithoutRenderAs } from '..';

export interface TableProps {
  size?: 'fullwidth' | 'narrow';
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}

declare const Table: BulmaComponentWithoutRenderAs<TableProps, 'table'> & {
  Container: BulmaComponent<{}, 'div'>;
};

export default Table;