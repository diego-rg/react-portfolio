import { responsiveFontSizes, createTheme } from "@mui/material/styles";

let mainTheme = createTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
    secondary: {
      main: "#4A45D0",
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
          color: "#c5c6c8",
        },
      },
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
