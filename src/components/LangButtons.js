import React from "react";

import i18next from "i18next";

import { Container, Button } from "@mui/material";

const LangButtons = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        size="small"
        sx={{
          color: "transparent",
          padding: 0,
          backgroundImage: "url(/static/img/spain.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minWidth: "35px",
          maxHeight: "20px",
        }}
        onClick={() => i18next.changeLanguage("es")}
      >
        es
      </Button>
      <Button
        size="small"
        sx={{
          color: "transparent",
          padding: 0,
          backgroundImage: "url(/static/img/britain.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minWidth: "35px",
          maxHeight: "20px",
        }}
        onClick={() => i18next.changeLanguage("en")}
      >
        en
      </Button>
    </Container>
  );
};
export default LangButtons;
