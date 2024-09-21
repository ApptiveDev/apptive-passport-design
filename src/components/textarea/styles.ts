import { css } from '@emotion/react';
import colors from '@styles/colors';
import corner from '@styles/corner';

const textAreaStyle = css`
  padding: 10px;
  border-radius: ${corner.small};
  border: 1px solid ${colors.light.border.subtle};
  width: 100%;
  box-sizing: border-box;
  font-size: 15px;
  
  &:focus {
    outline: none;
    border: 1px solid ${colors.light.border.prominent}
  }
`;

const labelStyle = css`
  font-size: 13px;
  color: ${colors.light.text.moderate};
  & p {
    margin-bottom: 5px;
    margin-top: 0;
  }
`;

export {
  textAreaStyle,
  labelStyle,
};
