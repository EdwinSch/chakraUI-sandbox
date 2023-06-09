import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// customize input styles
const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: " brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

// customize THEME
const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2e032",
        500: "#8ac919",
        600: "#71ab09",
        700: "#578602",
        800: "#3c5e00",
        900: "#203300",
      },
    },
    fonts: {
      heading: "Montserrat",
      body: "Inter",
    },
    // customize default components
    components: {
      Button: {
        variants: {
          primary: {
            rounded: "none",
          },
        },
      },
      //spread from custom objects
      Input: {
        ...inputSelectStyles,
      },
      //spread from custom objects
      Select: {
        ...inputSelectStyles,
      },
    },
  },
  // use withDefault hooks
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

// ----APP----
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
