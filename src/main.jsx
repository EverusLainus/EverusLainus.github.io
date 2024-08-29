import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../chakra.config.js";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
