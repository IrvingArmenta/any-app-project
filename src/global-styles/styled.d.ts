import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      divider: string;
      text: string;
      textSecondary: string;
      neutral: {
        light: string;
        grey: string;
        dark: string;
      };
    };
  }
}
