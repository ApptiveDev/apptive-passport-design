import { ReactNode } from 'react';
import { tagIconStyle, tagStyle } from '@components/tag/styles';
import DynamicIcon from '@components/internal/dynamic-icon';
import { CSSObject } from '@emotion/react';

interface TagProps {
  icon?: ReactNode | string;
  children?: ReactNode;
  css?: CSSObject;
  enableClose?: boolean;
  onClose?: (e: MouseEvent) => void;
}

function Tag({
  icon, css, children, enableClose, onClose,
}: TagProps) {
  if (!enableClose && !!onClose) {
    throw new Error('Cannot add onClose listener while the value of value is falsy');
  }

  return (
    <div css={[css, tagStyle]}>
      <DynamicIcon icon={icon} css={tagIconStyle} />
      {children}
    </div>
  );
}

export default Tag;
