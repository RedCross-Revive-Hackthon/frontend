import { DefaultTheme } from 'styled-components';

const colors = {};

export type ColorsTypes = typeof colors;

interface Font {
  family: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ family, weight, size, lineHeight }: Font): string => {
  return `
      font-family: ${family};
      font-weight : ${weight};
      font-size : ${size}rem;
      line-height : ${lineHeight}rem;
      `;
};

const fonts = {};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
