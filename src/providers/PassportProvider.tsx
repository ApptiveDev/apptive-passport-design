import { createContext, ReactNode, useMemo } from 'react';
import { defaultTheme, type ExtendedTheme, type Theme } from '../styles';
import { mergeTheme } from '../utils';

export interface PassportContextData {
  theme: Theme;
}

export interface PassportContextProps {
  extendedTheme?: ExtendedTheme;
  children?: ReactNode;
}

export const PassportContext = createContext<PassportContextData>({
  theme: defaultTheme,
});

function PassportProvider({ extendedTheme, children }: PassportContextProps) {
  const mergedTheme = useMemo(() => (extendedTheme ? { theme: mergeTheme(extendedTheme) }
    : { theme: defaultTheme }), [extendedTheme]);

  return (
    <PassportContext.Provider value={mergedTheme}>
      {children}
    </PassportContext.Provider>
  );
}

export default PassportProvider;
