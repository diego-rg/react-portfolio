// import logo from "./logo.png";
import "./App.css";

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

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Box className="app-container">
        <Header />
        <About />
        <Projects />
        <Portfolio />
        <Contact />
      </Box>
    </ThemeProvider>
  );
};

export default App;
