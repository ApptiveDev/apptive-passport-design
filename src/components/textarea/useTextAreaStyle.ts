import { css } from '@emotion/react';
import useTheme from '@hooks/useTheme';

function useTextAreaStyle() {
  const theme = useTheme();
  const textAreaStyle = css`
    padding: 10px;
    border-radius: ${theme.corners.small};
    border: 1px solid ${theme.colors.border.subtle};
    width: 100%;
    box-sizing: border-box;
    font-size: 15px;
    
    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.border.prominent}
    }
  `;

  const labelStyle = css`
    font-size: 13px;
    color: ${theme.colors.text.moderate};
    & p {
      margin-bottom: 5px;
      margin-top: 0;
    }
  `;

  return {
    textAreaStyle,
    labelStyle,
  };
}

export default useTextAreaStyle;
