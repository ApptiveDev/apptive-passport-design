import { buttonIconStyle, buttonStyle } from '@components/button/styles';
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import { ButtonTheme } from '@/types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  css?: CSSObject;
  theme?: ButtonTheme;
  icon?: ReactNode | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children, theme = 'light', css, icon, ...rest
}: ButtonProps, ref) => (
  <button
    css={[buttonStyle(theme), css]}
    type="button"
    ref={ref}
    {...rest}
  >
    <ButtonIcon icon={icon} />
    {children}
  </button>
));

function ButtonIcon({ icon }: Partial<ButtonProps>) {
  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return <img src={icon} alt="button icon" css={buttonIconStyle} />;
  }

  return icon;
}

export default Button;
