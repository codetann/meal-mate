import { chakra } from "@chakra-ui/react";

export const Button = chakra("button", {
  baseStyle: {
    w: "100%",
    h: "3rem",
    background: "background.dark",
    borderRadius: "0.7rem",
    fontWeight: "bold",
    transition: "all 0.15s ease-in-out",
    fontSize: ".9rem",
    zIndex: 0,
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "md",
    },
  },
});
