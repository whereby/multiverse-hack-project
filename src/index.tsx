import React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, Text } from "@chakra-ui/react";

import App from "./App";
import theme from "./theme";

import "./index.css";

const ROOM = "funtimes.whereby.com/james3a2c14b5-5f60-4007-8ca5-5da3eb4cc6a8";

const urlParams = new URLSearchParams(window.location.search);
const roomUrl = urlParams.get("roomUrl") || ROOM;

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    {!roomUrl ? <Text>Missing roomUrl!</Text> : <App roomUrl={roomUrl} />}
  </ChakraProvider>
);
