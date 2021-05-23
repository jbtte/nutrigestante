import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    pinkPrimary: "#f79ef7",
    purpleSecondary: "#c155c1",
    blueDark: "#2e669e",
    grayShadow: '#999'
  },
  fonts: ['Dancing Script', 'cursive'],

  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;