import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    hightlight: {
      400: "#FFBA0850",
      800: "#FFBA08",
    },
    black: {
      900: "#000",
    },
    darkText: {
      500: "#47585B",
    },
    darkInfo: {
      400: "#99999950",
      900: "#999999",
    },
    white: { 900: "#FFF" },
    lightText: { 900: "#F5F8FA" },
    lightInfo: { 9000: "#DADADA" },
  },
});
