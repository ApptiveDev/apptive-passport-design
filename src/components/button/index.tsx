import { buttonStyle } from '@components/button/styles';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { CSSObject } from '@emotion/react';
import { ButtonTheme } from '@/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CSSObject;
  theme?: ButtonTheme;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children, theme = 'light', css, ...rest
}: ButtonProps, ref) => (
  <button
    css={[buttonStyle(theme), css]}
    type="button"
    ref={ref}
    {...rest}
  >
    {children}
  </button>
));

export default Button;
