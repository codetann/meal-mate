import { extendTheme, type Theme } from "@chakra-ui/react";

const colors = {
  background: {
    light: "#1D2335",
    dark: "#181D2D",
  },
};

const global: Theme["styles"]["global"] = {
  html: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  body: {
    height: "100vh",
    width: "100vw",
    background: colors.background.dark,
    color: "white",
  },
  h1: {
    fontSize: "3rem",
    fontWeight: "black",
  },
  h3: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  span: {
    fontSize: "1.5rem",
  },
};

export const theme = extendTheme({
  colors,
  styles: {
    global,
  },
});
