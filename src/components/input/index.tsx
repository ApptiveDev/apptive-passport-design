import {
  Dispatch, forwardRef,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { CSSObject } from '@emotion/react';
import toggleShowIcon from '@assets/icons/eye.svg';
import toggleHideIcon from '@assets/icons/eye-off.svg';
import DynamicIcon from '@components/internal/dynamic-icon';
import useInputStyle from '@components/input/useInputStyle';
import { generateRandomId } from '@/utils';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: string | ReactNode;
  enableToggleShow?: boolean;
  type: HTMLInputTypeAttribute;
  label?: string;
  css?: CSSObject;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  icon, enableToggleShow, type, label, css, ...rest
}, ref) => {
  const inputId = useRef(generateRandomId());
  const [isHidden, setIsHidden] = useState(true);
  const {
    inputStyle,
    inputContainerStyle,
    inputIconStyle,
    labelStyle,
  } = useInputStyle({ enableToggleShow, icon });

  if (enableToggleShow && type !== 'password') {
    throw new Error('Cannot enable toggle while the type of input is not password');
  }

  return (
    <>
      {
        label
          ? (
            <label htmlFor={inputId.current} css={labelStyle}>
              <p>{label}</p>
            </label>
          )
          : null
      }
      <div css={inputContainerStyle}>
        <DynamicIcon icon={icon} css={inputIconStyle()} />
        <input
          css={[inputStyle, css]}
          type={type === 'password' && isHidden
            ? 'password'
            : 'text'}
          ref={ref}
          {...rest}
        />
        {
          enableToggleShow
            ? <ToggleVisibilityIcon isHidden={isHidden} setIsHidden={setIsHidden} />
            : null
        }
      </div>
    </>
  );
});

interface ToggleVisibilityIconProps {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>
}

function ToggleVisibilityIcon({
  isHidden,
  setIsHidden,
}: ToggleVisibilityIconProps) {
  const { inputIconStyle } = useInputStyle({ enableToggleShow: true });

  return (
    <img
      src={isHidden ? toggleShowIcon : toggleHideIcon}
      alt="toggle show"
      css={inputIconStyle(true)}
      onClick={() => setIsHidden((prevState: boolean) => !prevState)}
      role="presentation"
    />
  );
}

export default Input;
