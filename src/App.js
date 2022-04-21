// import logo from "./logo.png";
import "./App.css";

import "./i18n";

import "@fontsource/julius-sans-one";
import "@fontsource/archivo-narrow";
import "@fontsource/source-sans-pro";

import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import mainTheme from "./themes/mainTheme";

import { Box } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";

const App = () => {
  //Suspense para esperar a carga da traducción
  return (
    <Suspense>
      <ThemeProvider theme={mainTheme}>
        <Box className="app-container">
          <Header />
          <About />
          <Projects />
          <Portfolio />
          <Contact />
        </Box>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
