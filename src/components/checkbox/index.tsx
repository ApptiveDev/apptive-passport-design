import { InputHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';
import useCheckboxStyle from '@components/checkbox/useCheckboxStyle';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
}

function Checkbox({ type = 'checkbox', ...rest }: CheckboxProps) {
  const { checkboxStyle } = useCheckboxStyle();

  return (
    <input type={type} css={checkboxStyle} {...rest} />
  );
}

export default Checkbox;
