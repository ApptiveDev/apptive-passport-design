export type Colors = {
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

export const colorTheme: Colors = {
  primary: {
    main: '#FF9433',
    lighten: '#FFA14D',
    darken: '#FF861A',
    passive: 'rgba(255, 148, 51, 0.13)',
  },
  text: {
    prominent: '#191B1C',
    moderate: '#71787F',
    subtle: '#B2B6BB',
  },
  background: {
    main: '#FFFFFF',
    lighten: '#FFFFFF',
    darken: '#F2F3F4',
  },
  border: {
    subtle: '#ECEDEE',
    prominent: '#DFE1E3',
  },
  absolute: {
    black: '#191B1C',
    white: '#FFFFFF',
  },
  other: {
    link: '#3C89FF',
    success: '#45C768',
    warn: '#FFBF44',
    error: '#FC4F4F',
  },
  brand: {
    background: '#131415',
    text: '#FFFFFF',
    primary: '#FF7900',
  },
};
