import {
  Dispatch,
  HTMLAttributes,
  HTMLInputTypeAttribute, SetStateAction, useRef, useState,
} from 'react';
import { CSSObject } from '@emotion/react';
import {
  iconStyle,
  inputContainerStyle,
  inputStyle, labelStyle,
} from '@components/input/styles';
import toggleShowIcon from '@assets/icons/eye.svg';
import toggleHideIcon from '@assets/icons/eye-off.svg';
import { generateRandomId } from '@/utils';

interface PasswordInputProps extends HTMLAttributes<HTMLInputElement> {
  iconSrc?: string;
  enableToggleShow?: boolean;
  type: HTMLInputTypeAttribute;
  label?: string;
  css?: CSSObject;
}

function Input({
  iconSrc, enableToggleShow, type, label, css, ...rest
}: PasswordInputProps) {
  const inputId = useRef(generateRandomId());
  const [isHidden, setIsHidden] = useState(true);

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
        {
          iconSrc
            ? <img src={iconSrc} alt="input icon" css={iconStyle()} />
            : null
        }
        <input
          id={inputId.current}
          value={value}
          css={[inputStyle(iconSrc, enableToggleShow), css]}
          type={type === 'password' && isHidden
            ? 'password'
            : 'text'}
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
}

interface ToggleVisibilityIconProps {
  isHidden: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>
}

function ToggleVisibilityIcon({
  isHidden,
  setIsHidden,
}: ToggleVisibilityIconProps) {
  return (
    <img
      src={isHidden ? toggleShowIcon : toggleHideIcon}
      alt="toggle show"
      css={iconStyle(true)}
      onClick={() => setIsHidden((prevState: boolean) => !prevState)}
      role="presentation"
    />
  );
}

export default Input;
