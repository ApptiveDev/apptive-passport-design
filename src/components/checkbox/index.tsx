import { forwardRef, InputHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import useCheckboxStyle from './useCheckboxStyle';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ type = 'checkbox', ...rest }, ref) => {
  const { checkboxStyle } = useCheckboxStyle();

  return (
    <input type={type} css={checkboxStyle} ref={ref} {...rest} />
  );
});
