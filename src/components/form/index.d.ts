import * as React from 'react';
import {
  ElementProps,
  OmitKeys,
  BulmaComponent,
  BulmaComponentWithoutRenderAs,
} from '..';
import { Color, Size } from '..';

export interface FieldProps {
  align?: 'center' | 'right';
  kind?: 'addons' | 'group';
  multiline?: boolean;
  horizontal?: boolean;
}

export interface FieldLabelProps {
  size?: Size;
}

export interface ControlProps {
  fullwidth?: boolean;
  loading?: boolean;
  iconType?: React.ElementType,
}

export interface InputProps<T> {
  size?: Size;
  color?: Color;
  readOnly?: boolean;
  isStatic?: boolean;
  status?: 'focus' | 'hover';
  value?: T;
}

export interface LabelProps {
  size?: Size;
}

export interface TextareaProps {
  size?: Size;
  color?: Color;
  fixedSize?: boolean;
}

export interface SelectProps<T> {
  size?: Size;
  color?: Color;
  value?: T;
  loading?: boolean;
  status?: 'focus' | 'hover';
  multiple?: boolean;
  fullwidth?: boolean;
}

export interface CheckboxProps {
  value?: string;
}

export interface RadioProps {
  value?: string;
}

export interface HelpProps {
  color?: Color;
}

export interface InputFileProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: Color;
  size?: Size;
  filename?: string;
  value?: FileList;
  fullwidth?: boolean;
  align?: 'center' | 'right';
  boxed?: boolean;
  label?: string;
  icon?: React.ReactElement;
  inputProps?: OmitKeys<'onChange', React.HTMLAttributes<'input'>>;
}

declare const Form: {
  Field: BulmaComponent<FieldProps, 'div'> & {
    Label: BulmaComponent<FieldLabelProps, 'div'>;
    Body: BulmaComponent<{}, 'div'>;
  };
  Control: BulmaComponent<ControlProps, 'div'>;
  Input: <TValue>(
    props: OmitKeys<
      InputProps<TValue> & ElementProps<InputProps<TValue>, 'input'>,
      'renderAs' | 'readonly'
    >,
  ) => React.ReactElement;
  Label: BulmaComponentWithoutRenderAs<LabelProps, 'label'>;
  Textarea: (
    props: OmitKeys<
      TextareaProps & ElementProps<TextareaProps, 'textarea'>,
      'renderAs' | 'readonly'
    >,
  ) => React.ReactElement;
  Select: <TValue>(
    props: OmitKeys<
      SelectProps<TValue> & ElementProps<SelectProps<TValue>, 'select'>,
      'renderAs' | 'readonly'
    >,
  ) => React.ReactElement;
  Checkbox: (
    props: OmitKeys<
      CheckboxProps & ElementProps<CheckboxProps, 'input'>,
      'renderAs'
    >,
  ) => React.ReactElement;
  Radio: (
    props: OmitKeys<RadioProps & ElementProps<RadioProps, 'input'>, 'renderAs'>,
  ) => React.ReactElement;
  Help: BulmaComponent<HelpProps, 'p'>;
  InputFile: BulmaComponent<InputFileProps, 'div'>;
};

export default Form;
