import { InputHTMLAttributes, MouseEvent } from 'react';
import { CSSObject } from '@emotion/react';
import useRadioStyle from './useRadioStyle';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'radio';
  css?: CSSObject;
  defaultChecked?: boolean;
  checked?: boolean;
}

export function Radio({ type = 'radio', ...rest }: RadioProps) {
  const { radioStyle } = useRadioStyle();

  const onClick = (e: MouseEvent) => {
    const input = e.target as HTMLInputElement;
    input.checked = true;
  };

  return (
    <input type={type} css={radioStyle} onClick={onClick} {...rest} />
  );
}
