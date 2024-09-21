import {
  HTMLAttributes,
  useRef,
} from 'react';
import { CSSObject } from '@emotion/react';
import { labelStyle, textAreaStyle } from '@components/textarea/styles';
import { generateRandomId } from '@/utils';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  css?: CSSObject;
  rows?: number;
  cols?: number;
  maxLength?: number;
}

function TextArea({
  onChange, label, css, rows = 4, cols = 50, maxLength, ...rest
}: TextareaProps) {
  const textareaId = useRef(generateRandomId());

  return (
    <>
      {
        label
          ? (
            <label htmlFor={textareaId.current} css={labelStyle}>
              <p>{label}</p>
            </label>
          )
          : null
      }
      <textarea
        id={textareaId.current}
        css={[textAreaStyle, css]}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        {...rest}
      />
    </>
  );
}

export default TextArea;
