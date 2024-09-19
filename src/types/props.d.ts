import { ButtonHTMLAttributes } from 'react';
import { CSSObject } from '@emotion/react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc?: string;
  css?: CSSObject;
  theme?: ButtonTheme;
}

export type ButtonTheme = 'dark' | 'light' | 'light-outlined';
