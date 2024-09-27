import { css } from '@emotion/react';
import corners from 'styles/corners';
import colorTheme from '@styles/colors';
import { TagTheme } from '@/types';

function tagStyle(enableClose: boolean, theme?: TagTheme) {
  const rightCorner = enableClose ? corners.small : corners.round;

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
      border-radius: ${corners.round} ${rightCorner} ${rightCorner} ${corners.round};
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
      border-radius: ${corners.small} ${corners.round} ${corners.round} ${corners.small};
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
  return theme === 'primary' ? 'transparent' : colorTheme.border.subtle;
}

function getBackgroundColor(theme?: TagTheme) {
  return theme === 'primary' ? colorTheme.primary.passive : 'transparent';
}

function getTextColor(theme?: TagTheme) {
  return theme === 'primary' ? colorTheme.primary.main : colorTheme.text.prominent;
}

export {
  tagStyle,
  tagContainerStyle,
  closeIconContainerStyle,
  tagIconStyle,
};
