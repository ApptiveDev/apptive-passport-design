import { css } from '@emotion/react';
import corner from '@styles/corner';
import colors from '@styles/colors';
import { TagTheme } from '@/types';

function tagStyle(enableClose: boolean, theme?: TagTheme) {
  const rightCorner = enableClose ? corner.small : corner.round;

  return (
    css`
      padding: 6px 16px;
      box-sizing: border-box;
      display: flex;
      width: fit-content;
      height: fit-content;
      align-items: center;
      gap: 8px;
      flex-grow: 0;
      border-radius: ${corner.round} ${rightCorner} ${rightCorner} ${corner.round};
      border: 2px solid ${getBorderStyle(theme)};
      background-color: ${getBackgroundColor(theme)};
      color: ${getTextColor(theme)};
      font-size: 15px;
    `
  );
}

const tagContainerStyle = css`
  display: flex;
  gap: 3px;
  width: fit-content;
  height: fit-content;
`;

function closeIconContainerStyle(theme?: TagTheme) {
  return (
    css`
      border-radius: ${corner.small} ${corner.round} ${corner.round} ${corner.small};
      border: 2px solid ${getBorderStyle(theme)};
      display: flex;
      align-items: center;
      padding: 7px 9px 7px 7px;
      width: fit-content;
      height: fit-content;
      cursor: pointer;
      user-select: none;
      background-color: ${getBackgroundColor(theme)};
    `
  );
}

const tagIconStyle = css`
  width: 16px;
  height: 16px;
`;

function getBorderStyle(theme?: TagTheme) {
  return theme === 'primary' ? 'transparent' : colors.border.subtle;
}

function getBackgroundColor(theme?: TagTheme) {
  return theme === 'primary' ? colors.primary.passive : 'transparent';
}

function getTextColor(theme?: TagTheme) {
  return theme === 'primary' ? colors.primary.main : colors.text.prominent;
}

export {
  tagStyle,
  tagContainerStyle,
  closeIconContainerStyle,
  tagIconStyle,
};
