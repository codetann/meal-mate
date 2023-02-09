import { chakra } from "@chakra-ui/react";

export const Layout = chakra("div", {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    padding: "1rem",
    position: "relative",
    zIndex: 9000,
  },
});
