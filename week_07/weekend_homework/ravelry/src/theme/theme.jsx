import { ThemeProvider } from "styled-components";

const theme = {
  colours: {
    background: "#120f14",
    cardBackground: "#1c1e27",
    buttonBackground: "#212327",
    contrast1: "#db8d15",
    contrast2: "#ae184c",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
