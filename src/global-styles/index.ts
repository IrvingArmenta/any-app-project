import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
// reset
html {
  font-size: 16px;
}

*, *::before, *::after {
    box-sizing: border-box;
}

* {
  margin: 0;
 }

 html, body {
  height: 100%;
 }

 body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  color: ${(p) => p.theme.colors.text};
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  background-color: ${(p) => p.theme.colors.background};
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

ul, ol {
  padding: 0;
  margin: 0;
  list-style: none;
}

p, h1, h2, h3, h4, h5, h6 {
  color: inherit;
  overflow-wrap: break-word;
}

#root {
  isolation: isolate;
  height: 100%;
}  

`;

export default GlobalStyles;
