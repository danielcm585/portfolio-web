import React from "react";

import App from "./pages/App.js";
import Portfolio from "./pages/Portfolio.js"

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <Router>
        <Routes>
          <Route path="/" element={<App />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
