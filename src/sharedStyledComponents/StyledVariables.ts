interface IVariables {
  COLOR_WHITE: string;
  COLOR_BLACK: string;
  COLOR_PURPLE: string;
  COLOR_YELLOW: string;
  COLOR_ORANGE: string;
  COLOR_LIGHTBROWN: string;
  COLOR_TURQUOISE: string;
  FONT_HEADLINE: string;
  FONT_TEXT: string;
  FONT_FAMILY_HEADLINE: string;
  FONT_FAMILY_TEXT: string;
  FONT_WEIGHT_LIGHT: number;
  FONT_WEIGHT_BOLD: number;
  HEADER_HEIGHT: string;
  INPUT_HEIGHT: string;
  BUTTON_HEIGHT: string;
}

export const StyledVariables: IVariables = {
  // colors
  COLOR_WHITE: '#ffffff',
  COLOR_BLACK: '#5e5e5e',
  COLOR_PURPLE: '#A64AC9',
  COLOR_YELLOW: '#FCCD04',
  COLOR_ORANGE: '#FFB48F',
  COLOR_LIGHTBROWN: '#F5E6CC',
  COLOR_TURQUOISE: '#17E9E0',

  // typography
  FONT_FAMILY_HEADLINE: "'Libre Franklin', serif",
  FONT_FAMILY_TEXT: "'Libre Franklin', serif",
  FONT_HEADLINE: "800 normal 32px 'Libre Franklin', serif",
  FONT_TEXT: "300 normal inherit  'Libre Franklin', serif",
  FONT_WEIGHT_LIGHT: 300,
  FONT_WEIGHT_BOLD: 800,

  // components variables
  HEADER_HEIGHT: '100px',
  INPUT_HEIGHT: '54px',
  BUTTON_HEIGHT: '80px',
};
