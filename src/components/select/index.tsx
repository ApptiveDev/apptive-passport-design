import { ReactNode, SelectHTMLAttributes, useRef } from 'react';
import { CSSObject } from '@emotion/react';
import { Label } from '../label';
import DynamicIcon from '../internal/dynamic-icon';
import useSelectStyle from './useSelectStyle';
import { generateRandomId } from '../../utils';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  icon?: string | ReactNode;
  label?: string;
  placeholder?: string;
  css?: CSSObject;
}

export function Select({
  children, icon, label, placeholder, css, ...rest
}: SelectProps) {
  const selectId = useRef(generateRandomId());
  const { selectStyle, selectContainerStyle, selectIconStyle } = useSelectStyle();

  return (
    <div css={selectContainerStyle}>
      {label ? <Label>{label}</Label> : null}
      <DynamicIcon icon={icon} css={selectIconStyle} />
      <select id={selectId.current} css={[selectStyle, css]} {...rest}>
        <option value="" selected disabled hidden>{placeholder}</option>
        {children}
      </select>
    </div>
  );
}
