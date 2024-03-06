import {ThemeEnum} from '../context/RootContext';

interface Colors {
  primary: {
    default: string;
  };
  secondary: {
    default: string;
    dark: string;
    light: string;
    gray: string;
  };
  tertiary: {
    default: string;
  };
}

type ColorsTypes = {
  [key in ThemeEnum]: Colors;
};

export const colors: ColorsTypes = {
  dark: {
    primary: {
      default: '#FF6D1F',
    },
    secondary: {
      default: '#1D1C1C',
      dark: '#282727',
      light: '#3F3E3E',
      gray: '#8C8B8B',
    },
    tertiary: {
      default: '#F4F4F4',
    },
  },
  light: {
    primary: {
      default: '#FF6D1F',
    },
    secondary: {
      default: '#F4F4F4',
      dark: '#E0E0E0',
      light: '#D1D1D1',
      gray: '#8C8B8B',
    },
    tertiary: {
      default: '#1D1C1C',
    },
  },
};
