import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
        color: "#000000",
      },
    },
  },
  colors: {
    primary: "#FFFFFF",
    accent: "#FFFFFF",
  },
  breakpoints: {
    sm: "200px",
  },
});

export default theme;
