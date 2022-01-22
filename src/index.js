import React from "react";

import App from "./pages/App.js";
import Portfolio from "./pages/Portfolio.js"
import ProjectDetails from "./pages/ProjectDetails.js";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
