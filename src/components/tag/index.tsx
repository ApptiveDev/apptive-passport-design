import { MouseEventHandler, ReactNode } from 'react';
import {
  closeIconContainerStyle,
  tagContainerStyle,
  tagIconStyle,
  tagStyle,
} from '@components/tag/styles';
import _DynamicIcon from '@components/internal/_dynamic-icon';
import { CSSObject } from '@emotion/react';
import CloseButton from '@assets/icons/x.svg?react';
import colors from '@styles/colors';
import { TagTheme } from '@/types';

interface TagProps {
  icon?: ReactNode | string;
  children?: ReactNode;
  css?: CSSObject;
  theme?: TagTheme;
  enableClose?: boolean;
  onClose?: MouseEventHandler<HTMLImageElement>;
}

function Tag({
  icon, css, children, theme = 'default', enableClose, onClose,
}: TagProps) {
  if (!enableClose && !!onClose) {
    throw new Error('Cannot add onClose listener while the value of value is falsy');
  }

  return (
    <div css={tagContainerStyle}>
      <div css={[tagStyle(!!enableClose, theme), css]}>
        <_DynamicIcon icon={icon} css={tagIconStyle} />
        {children}
      </div>
      {
        enableClose
        && (
          <div css={[closeIconContainerStyle(theme), css]} onClick={onClose} role="presentation">
            <CloseButton stroke={theme === 'default' ? colors.light.text.moderate : colors.light.primary.main} />
          </div>
        )
      }
    </div>
  );
}

export default Tag;
