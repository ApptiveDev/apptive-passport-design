import { LabelHTMLAttributes, ReactNode } from 'react';
import useLabelStyle from './useLabelStyle';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
}

export function Label({ children, ...rest }: LabelProps) {
  const { labelStyle } = useLabelStyle();

  return (
    <label css={labelStyle} {...rest}>
      {children}
    </label>
  );
}
