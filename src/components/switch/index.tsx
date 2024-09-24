import { forwardRef, HTMLAttributes, useRef } from 'react';
import {
  switchCircleStyle,
  switchInputStyle,
  switchWrapperStyle,
} from '@components/switch/styles';
import { CSSObject } from '@emotion/react';
import useSwitchHandler from '@hooks/useSwitchHandler';
import { generateRandomId } from '@/utils';

interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
  type: 'checkbox';
  wrapperCss?: CSSObject;
  circleCss?: CSSObject;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  type = 'checkbox', wrapperCss, circleCss, ...rest
}, ref) => {
  const inputIdRef = useRef(generateRandomId());
  const { handleClick } = useSwitchHandler({ inputId: inputIdRef.current });

  return (
    <div>
      <input type={type} ref={ref} css={switchInputStyle} id={inputIdRef.current} {...rest} />
      <div css={[switchWrapperStyle(), wrapperCss]} onClick={handleClick} role="presentation">
        <div css={[switchCircleStyle(), circleCss]} />
      </div>
    </div>
  );
});

export default Switch;
