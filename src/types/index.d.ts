export type ButtonTheme = 'default' | 'dark' | 'light-outlined';

export type TagTheme = 'default' | 'primary';

export type Theme = {
  primary: {
    main: string;
    lighten: string;
    darken: string;
    passive: string;
  };
  text: {
    prominent: string;
    moderate: string;
    subtle: string;
  };
  background: {
    main: string;
    lighten: string;
    darken: string;
  };
  border: {
    subtle: string;
    prominent: string;
  };
  absolute: {
    black: string;
    white: string;
  };
  other: {
    link: string;
    success: string;
    warn: string;
    error: string;
  };
  brand: {
    background: string;
    text: string;
    primary: string;
  };
};

export type ThemeSlice<T extends keyof Theme> = Partial<Theme[T]>;

export type ThemeExtend = {
  [K in keyof Theme]: ThemeSlice<K>;
};
