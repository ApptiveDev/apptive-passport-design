import { css } from '@emotion/react';
import colorTheme from '@styles/colors';
import corners from 'styles/corners';

const textAreaStyle = css`
  padding: 10px;
  border-radius: ${corners.small};
  border: 1px solid ${colorTheme.border.subtle};
  width: 100%;
  box-sizing: border-box;
  font-size: 15px;
  
  &:focus {
    outline: none;
    border: 1px solid ${colorTheme.border.prominent}
  }
`;

const labelStyle = css`
  font-size: 13px;
  color: ${colorTheme.text.moderate};
  & p {
    margin-bottom: 5px;
    margin-top: 0;
  }
`;

export {
  textAreaStyle,
  labelStyle,
};
