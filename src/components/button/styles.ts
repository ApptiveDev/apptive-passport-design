import colorTheme from '@styles/colors';
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
      color: ${theme === 'dark' ? colorTheme.primary.main : colorTheme.text.prominent};
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
    return colorTheme.text.prominent;
  }

  return colorTheme.background.main;
}

function getBorderStyle(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return `2px solid ${colorTheme.absolute.black}`;
  }

  const baseStyle = '1px solid ';

  return baseStyle + (theme === 'dark' ? 'transparent' : colorTheme.text.subtle);
}

function getHoverBackgroundColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colorTheme.text.prominent;
  }

  if (theme === 'dark') {
    return colorTheme.primary.main;
  }

  return colorTheme.background.darken;
}

function getHoverColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colorTheme.background.main;
  }

  return colorTheme.text.prominent;
}

function getHoverBorderColor(theme: ButtonTheme) {
  if (theme === 'light-outlined') {
    return colorTheme.absolute.black;
  }

  return theme === 'dark' ? colorTheme.primary.main : colorTheme.border.prominent;
}

export {
  buttonStyle,
  buttonIconStyle,
  getBorderStyle,
  getHoverBackgroundColor,
  getHoverColor,
  getHoverBorderColor,
};
