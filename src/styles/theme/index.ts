import { colorTheme as colors, type Colors } from '../colors';
import { corners, type Corners } from '../corners';

export type Theme = {
  colors: Colors;
  corners: Corners;
};

export type Sliced<T> = {
  [K in keyof T]?: Partial<T[K]>
};

export type ExtendedTheme = {
  [K in keyof Theme]?: Sliced<Theme[K]>;
};

export const defaultTheme: Theme = {
  colors, corners,
};
