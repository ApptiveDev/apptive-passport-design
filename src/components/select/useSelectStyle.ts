import { css } from '@emotion/react';
import { useTheme } from '../../hooks';

function useSelectStyle() {
  const theme = useTheme();

  const selectContainerStyle = (
    css`
      position: relative;
    `
  );

  const selectStyle = (
    css`
      outline: none;
      border: none;
      text-indent: 5px;
      &::after {
        color: ${theme.colors.text.subtle};
      }
    `
  );

  const selectIconStyle = (
    css`
      position: absolute;
    `
  );

  return { selectIconStyle, selectContainerStyle, selectStyle };
}

export default useSelectStyle;
