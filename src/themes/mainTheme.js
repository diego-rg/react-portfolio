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
            fontFamily: "Josefin Sans",
            fontSize: "2rem",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

mainTheme = responsiveFontSizes(mainTheme);

export default mainTheme;
