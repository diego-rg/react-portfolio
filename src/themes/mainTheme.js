import { responsiveFontSizes, createTheme } from "@mui/material/styles";

let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#66fcf1",
    },
    secondary: {
      main: "#0b0c10",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontFamily: "Source Sans Pro",
            color: "#c5c6c8",
            fontSize: "1.25rem",
          },
        },
        {
          props: {
            variant: "h1",
          },
          style: {
            fontFamily: "Julius Sans One",
            color: "#66fcf1",
          },
        },
        {
          props: {
            variant: "h4",
          },
          style: {
            fontFamily: "Archivo Narrow",
            color: "#66fcf1",
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontFamily: "Source Sans Pro",
          fontSize: "1.25rem",
          color: "#c5c6c8",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#c5c6c8",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#0b0c10",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
        },
      },
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
