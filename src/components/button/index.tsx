import { buttonStyle } from '@components/button/styles';
import { forwardRef } from 'react';
import { ButtonProps } from '@/types/props';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  iconSrc, children, theme = 'light', css, ...rest
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
