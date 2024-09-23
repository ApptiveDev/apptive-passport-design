import { css } from '@emotion/react';
import corner from '@styles/corner';
import colors from '@styles/colors';

const tagStyle = css`
  padding: 6px 16px;
  box-sizing: border-box;
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  gap: 8px;
  flex-grow: 0;
  border-radius: ${corner.round};
  border: 1px solid ${colors.light.border.subtle};
  font-size: 15px;
`;

const tagIconStyle = css`
  width: 16px;
  height: 16px;
`;

export {
  tagStyle,
  tagIconStyle,
};
