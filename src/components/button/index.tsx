import { buttonIconStyle, buttonStyle } from '@components/button/styles';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import DynamicIcon from '@components/internal/dynamic-icon';
import { ButtonTheme } from '@/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CSSObject;
  theme?: ButtonTheme;
  icon?: ReactNode | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children, theme = 'default', css, icon, ...rest
}: ButtonProps, ref) => (
  <button
    css={[buttonStyle(theme), css]}
    type="button"
    ref={ref}
    {...rest}
  >
    <DynamicIcon icon={icon} css={buttonIconStyle} />
    {children}
  </button>
));

export default Button;
