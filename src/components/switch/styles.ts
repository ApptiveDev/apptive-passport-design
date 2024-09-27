import { css } from '@emotion/react';
import colorTheme from '@styles/colors';
import corners from 'styles/corners';

const switchInputStyle = css`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
  display: block;
`;

function switchWrapperStyle() {
  return (
    css`
      width: 42px;
      height: 24px;
      border: 1px solid ${colorTheme.border.subtle};
      background-color: transparent;
      border-radius: ${corners.round};
      position: relative;
      transition: 0.2s;
      box-sizing: border-box;
      
      .switch-checked + & {
        background-color: ${colorTheme.primary.main};
        border: 1px solid transparent;
      } 
    `
  );
}

function switchCircleStyle() {
  return (
    css`
      background-color: ${colorTheme.absolute.black};
      border-radius: 100%;
      width: 14px;
      height: 14px;
      position: absolute;
      top: 5px;
      left: 5px;
      transition: all 0.2s ease-in-out;
      
      .switch-checked + div > & {
        left: 22px;
        transition: all 0.2s ease-in-out;
      }
    `
  );
}

export {
  switchInputStyle,
  switchWrapperStyle,
  switchCircleStyle,
};
