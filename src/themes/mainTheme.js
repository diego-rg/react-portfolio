import { responsiveFontSizes, createTheme } from "@mui/material/styles";

let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#66fcf1",
    },
    secondary: {
      main: "#0b0c10",
    },
    success: {
      main: "#45a29f",
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
            variant: "body2",
          },
          style: {
            fontFamily: "Source Sans Pro",
            color: "#c5c6c8",
            fontSize: "1.1rem",
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
        {
          props: {
            variant: "h5",
          },
          style: {
            fontFamily: "Source Sans Pro",
            fontSize: "1.25rem",
            color: "#c5c6c8",
          },
        },
        {
          props: {
            variant: "h6",
          },
          style: {
            fontFamily: "Archivo Narrow",
            color: "#0b0c10",
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
          borderRadius: "0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
          fontFamily: "Archivo Narrow",
          letterSpacing: "0.05em",
          fontSize: "1rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Source Sans Pro",
        },
      },
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
