import { forwardRef, HTMLAttributes, useRef } from 'react';
import { CSSObject } from '@emotion/react';
import useSwitchHandler from '@components/switch/useSwitchHandler';
import useSwitchStyle from '@components/switch/useSwitchStyle';
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
  const { switchWrapperStyle, switchCircleStyle, switchInputStyle } = useSwitchStyle();

  return (
    <div>
      <input type={type} ref={ref} css={switchInputStyle} id={inputIdRef.current} {...rest} />
      <div css={[switchWrapperStyle, wrapperCss]} onClick={handleClick} role="presentation">
        <div css={[switchCircleStyle, circleCss]} />
      </div>
    </div>
  );
});

export default Switch;
