import { css, CSSObject } from '@emotion/react';
import corner from '@styles/corner';
import colors from '@styles/colors';

function inputStyle(hasIcon?: boolean, enableToggleShow?: boolean): CSSObject {
  return (
    css`
      padding: 10px ${enableToggleShow ? '34px' : '10px'} 10px ${hasIcon ? '34px' : '10px'};
      border-radius: ${corner.small};
      border: 1px solid ${colors.border.subtle};
      width: 100%;
      box-sizing: border-box;
      font-size: 15px;
      
      &:focus {
        outline: none;
        border: 1px solid ${colors.border.prominent}
      }
    `
  );
}

function inputIconStyle(isToggleShowIcon?: boolean) {
  return (
    css`
      position: absolute;
      left: ${isToggleShowIcon ? 'auto' : '10px'};
      right: ${isToggleShowIcon ? '10px' : 'auto'};
      top: 10px;
      width: 16px;
      height: 16px;
      cursor: ${isToggleShowIcon ? 'pointer' : 'default'};
    `
  );
}

const inputContainerStyle = css`
  position: relative;
`;

const labelStyle = css`
  font-size: 13px;
  color: ${colors.text.moderate};
  & p {
    margin-bottom: 5px;
    margin-top: 0;
  }
`;

export {
  inputIconStyle,
  inputStyle,
  labelStyle,
  inputContainerStyle,
};
