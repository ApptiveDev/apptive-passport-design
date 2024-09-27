import colorTheme from '@styles/colors';
import { css } from '@emotion/react';
import { ButtonTheme } from '@/types';

function buttonStyle(buttonTheme: ButtonTheme) {
  return (
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      padding: 10px 18px;
      border-radius: 100px;
      color: ${buttonTheme === 'dark' ? colorTheme.primary.main : colorTheme.text.prominent};
      border: ${getBorderStyle(buttonTheme)};
      background-color: ${getBackgroundColor(buttonTheme)};
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      cursor: pointer;
      gap: 5px;

      &:hover {
        background-color: ${getHoverBackgroundColor(buttonTheme)};
        color: ${getHoverColor(buttonTheme)};
        border-color: ${getHoverBorderColor(buttonTheme)};
      }
  `);
}

const buttonIconStyle = css`
  width: 16px;
  height: 16px;
`;

function getBackgroundColor(buttonTheme: ButtonTheme) {
  if (buttonTheme === 'light-outlined') {
    return 'transparent';
  }

  if (buttonTheme === 'dark') {
    return colorTheme.text.prominent;
  }

  return colorTheme.background.main;
}

function getBorderStyle(buttonTheme: ButtonTheme) {
  if (buttonTheme === 'light-outlined') {
    return `2px solid ${colorTheme.absolute.black}`;
  }

  const baseStyle = '1px solid ';

  return baseStyle + (buttonTheme === 'dark' ? 'transparent' : colorTheme.text.subtle);
}

function getHoverBackgroundColor(buttonTheme: ButtonTheme) {
  if (buttonTheme === 'light-outlined') {
    return colorTheme.text.prominent;
  }

  if (buttonTheme === 'dark') {
    return colorTheme.primary.main;
  }

  return colorTheme.background.darken;
}

function getHoverColor(buttonTheme: ButtonTheme) {
  if (buttonTheme === 'light-outlined') {
    return colorTheme.background.main;
  }

  return colorTheme.text.prominent;
}

function getHoverBorderColor(buttonTheme: ButtonTheme) {
  if (buttonTheme === 'light-outlined') {
    return colorTheme.absolute.black;
  }

  return buttonTheme === 'dark' ? colorTheme.primary.main : colorTheme.border.prominent;
}

export {
  buttonStyle,
  buttonIconStyle,
  getBorderStyle,
  getHoverBackgroundColor,
  getHoverColor,
  getHoverBorderColor,
};
