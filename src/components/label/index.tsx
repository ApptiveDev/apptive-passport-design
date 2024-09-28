import useLabelStyle from '@components/label/useLabelStyle';
import { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
}

function Label({ children, ...rest }: LabelProps) {
  const { labelStyle } = useLabelStyle();

  return (
    <label css={labelStyle} {...rest}>
      {children}
    </label>
  );
}

export default Label;
