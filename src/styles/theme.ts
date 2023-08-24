import { DefaultTheme } from 'styled-components';

const colors = {
  redorange_gra_00: 'linear-gradient(180deg, #FE0000 0%, #FF7000 100%))',
  black: '#000000',
  deepred: '#FF0A00',
  white: '#FFFFFF',
  gray01: '#939393',
  gray02: '#D9D9D9',
  orange: '#FF5C00',
  orange02: '#FF8D4D',
  orange03: '#FFD28F',
};

export type ColorsTypes = typeof colors;

interface Font {
  family: string;
  weight: number;
  size: number;
  letterSpacing: number;
}

const FONT = ({ family, weight, size, letterSpacing }: Font): string => {
  return `
      font-family: ${family};
      font-weight : ${weight};
      font-size : ${size}rem;
      letter-spacing: ${letterSpacing}rem;
      `;
};

const fonts = {
  head1: FONT({ family: 'Pretendard Variable', weight: 500, size: 2, letterSpacing: -0.03 }),
  head2: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.4, letterSpacing: -0.03 }),
  head3: FONT({ family: 'Pretendard Variable', weight: 600, size: 2, letterSpacing: -0.03 }),
  name1: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.4, letterSpacing: 0 }),
  name2: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.2, letterSpacing: 0 }),
  univ1: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.2, letterSpacing: -0.3 }),
  univ2: FONT({ family: 'Pretendard Variable', weight: 400, size: 1, letterSpacing: -0.3 }),
  point1: FONT({ family: 'Pretendard Variable', weight: 700, size: 1.8, letterSpacing: 0 }),
  point2: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.6, letterSpacing: 0 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
