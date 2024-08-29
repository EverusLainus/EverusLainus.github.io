// chakra.config.js
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Arial, sans-serif",
        bg: "#f0f0f0",
        color: "#333",
      },
    },
  },
});
