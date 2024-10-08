import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import useButtonStyle from './useButtonStyle';
import DynamicIcon from '../internal/dynamic-icon';

export type ButtonTheme = 'default' | 'dark' | 'light-outlined';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CSSObject;
  variant?: ButtonTheme;
  icon?: ReactNode | string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children, variant = 'default', css, icon, ...rest
}: ButtonProps, ref) => {
  const { buttonStyle, buttonIconStyle } = useButtonStyle({ variant });

  return (
    <button
      css={[buttonStyle, css]}
      type="button"
      ref={ref}
      {...rest}
    >
      <DynamicIcon icon={icon} css={buttonIconStyle} />
      {children}
    </button>
  );
});
