import {
  forwardRef,
  HTMLAttributes,
  useRef,
} from 'react';
import { CSSObject } from '@emotion/react';
import useTextAreaStyle from './useTextAreaStyle';
import { Label } from '../label';
import { generateRandomId } from '../../utils';

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  css?: CSSObject;
  rows?: number;
  cols?: number;
  maxLength?: number;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  onChange, label, css, rows = 4, cols = 50, maxLength, ...rest
}, ref) => {
  const textareaId = useRef(generateRandomId());
  const { textAreaStyle } = useTextAreaStyle();

  return (
    <>
      {
        label
          ? (
            <Label htmlFor={textareaId.current}>
              <p>{label}</p>
            </Label>
          )
          : null
      }
      <textarea
        id={textareaId.current}
        css={[textAreaStyle, css]}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        ref={ref}
        {...rest}
      />
    </>
  );
});
