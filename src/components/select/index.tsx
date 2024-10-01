import { ReactNode, SelectHTMLAttributes, useRef } from 'react';
import Label from '@components/label';
import { CSSObject } from '@emotion/react';
import DynamicIcon from '@components/internal/dynamic-icon';
import useSelectStyle from '@components/select/useSelectStyle';
import { generateRandomId } from '@/utils';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  icon?: string | ReactNode;
  label?: string;
  placeholder?: string;
  css?: CSSObject;
}

function Select({
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

export default Select;
