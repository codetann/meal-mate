import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

export const ThemeProvider = ({ children }: any) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
