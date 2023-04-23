import { extendTheme } from "@chakra-ui/react";

const fonts = {
  fonts: {
    heading: "Montserrat",
    body: "Inter",
  },
};

const theme = extendTheme({ fonts });

export default theme;
