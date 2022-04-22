import React, { useState } from "react";
import axios from "axios";

import { useTranslation } from "react-i18next";

import { Typography, TextField, Button, Card, Box } from "@mui/material";

//Formulario de contacto usando Formspree
const ContactForm = () => {
  const { t } = useTranslation();

  //required para captcha
  window.onload = function () {
    var el = document.getElementById("g-recaptcha-response");
    if (el) {
      el.setAttribute("required", "required");
    }
  };

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mdobwblp",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, t("formSuccess"));
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <Card
      sx={{
        textAlign: "center",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        minWidth: { xs: "100%", md: "50%" },
        maxWidth: "350px",
        padding: 2,
        border: "1px solid #66fcf1",
      }}
    >
      <Typography variant="body1" sx={{ color: "#0b0c10", marginBottom: 2 }}>
        {t("formHeader")}
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        onSubmit={handleOnSubmit}
      >
        <TextField
          sx={{ marginBottom: 1 }}
          label="Email"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <TextField
          multiline
          rows={5}
          sx={{ marginBottom: 2 }}
          label={t("formLabelMsg")}
          variant="outlined"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <div
          className="g-recaptcha"
          data-sitekey="6Leyf4QfAAAAAICpjzRI-iXaLuttSI74IGOWPh5U"
        ></div>
        <Button
          color="success"
          variant="contained"
          type="submit"
          disabled={status.submitting || status.submitted}
        >
          {!status.submitting
            ? !status.submitted
              ? t("formButtonSubmit")
              : t("formButtonSubmitted")
            : t("formButtonSubmitting")}
        </Button>
      </Box>
      {status.info.error && (
        <Typography
          variant="body1"
          sx={{ color: "#0b0c10", marginTop: 2 }}
          className="error"
        >
          Error: {status.info.msg}.
        </Typography>
      )}
      {!status.info.error && status.info.msg && (
        <Typography variant="body1" sx={{ color: "#0b0c10", marginTop: 2 }}>
          {status.info.msg}
        </Typography>
      )}
    </Card>
  );
};

export default ContactForm;
