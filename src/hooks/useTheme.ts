import { useContext } from 'react';
import { PassportContext, type PassportContextData } from '../providers';

export function useTheme() {
  const { theme } = useContext<PassportContextData>(PassportContext);

  return theme;
}

export default useTheme;
