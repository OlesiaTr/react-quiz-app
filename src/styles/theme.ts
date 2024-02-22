const colors = {
  white: '#FFFFFF',
  titleGray: '#F2F3F5',
  subtitleGray: '#C4C8CC',
  mainPink: '#E4229B',
  mainPinkWithOpacity: 'rgba(228,34,155,0.2)',
  secondaryPink: '#E4229C',
  mainBg: '#1f002b',
  secondaryBg: '#36173d',
  checkboxBg: '#6D4376',
};

const fonts = {
  albert: "'Albert Sans', sans-serif",
  nunito: "'Nunito Sans', sans-serif",
  cursive: '"Niconne", cursive',
};

const fontWeights = {
  normal: 400,
  medium: 500,
  'semi-bold': 600,
  bold: 700,
  'extra-bold': 800,
};

const fontSizes = {
  xs: '12px',
  s: '15px',
  m: '17px',
  xm: '18px',
  l: '24px',
  xl: '28px',
  xxl: '36px',
  xxxl: '52px',
};

const borders = {
  medium: '2px solid',
};

const transition = {
  main: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const media = {
  medium: '(min-width: 768px)',
  large: '(min-width: 1440px)',
};
/* usage
   @media screen and (${(p) => p.theme.media.large}) {
    height: ;
    color: ;
    ...
  }
  */

export const theme = {
  colors,
  fonts,
  fontWeights,
  fontSizes,
  borders,
  transition,
  media,
};
