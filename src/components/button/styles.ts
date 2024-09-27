import colors from '@styles/colors';
import { css } from '@emotion/react';
import { ButtonTheme } from '@/types';

function buttonStyle(theme: ButtonTheme) {
  return (
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      padding: 10px 18px;
      border-radius: 100px;
      color: ${theme === 'dark' ? colors.primary.main : colors.text.prominent};
      border: ${getBorderStyle(theme)};
      background-color: ${getBackgroundColor(theme)};
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      cursor: pointer;
      gap: 5px;

      &:hover {
        background-color: ${getHoverBackgroundColor(theme)};
        color: ${getHoverColor(theme)};
        border-color: ${getHoverBorderColor(theme)};
      }
  `);
}

const buttonIconStyle = css`
  width: 16px;
  height: 16px;
`;

function getBackgroundColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return 'transparent';
  }

  if (theme === 'dark') {
    return colors.text.prominent;
  }

  return colors.background.main;
}

function getBorderStyle(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return `2px solid ${colors.absolute.black}`;
  }

  const baseStyle = '1px solid ';

  return baseStyle + (theme === 'dark' ? 'transparent' : colors.text.subtle);
}

function getHoverBackgroundColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colors.text.prominent;
  }

  if (theme === 'dark') {
    return colors.primary.main;
  }

  return colors.background.darken;
}

function getHoverColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colors.background.main;
  }

  return colors.text.prominent;
}

function getHoverBorderColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colors.absolute.black;
  }

  return theme === 'dark' ? colors.primary.main : colors.border.prominent;
}

export {
  buttonStyle,
  buttonIconStyle,
  getBorderStyle,
  getHoverBackgroundColor,
  getHoverColor,
  getHoverBorderColor,
};
