import React, { useState } from "react";
import axios from "axios";

import { Typography, TextField, Button, Card } from "@mui/material";

//Formulario de contacto usando Formspree
const ContactForm = () => {
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
        handleServerResponse(true, "Mensaje enviado. Saludos!");
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <Card
      sx={{
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
      <Typography variant="h6" sx={{ textAlign: "center", paddingBottom: 1 }}>
        Contacta conmigo
      </Typography>
      <form onSubmit={handleOnSubmit}>
        <TextField
          sx={{ paddingBottom: 1 }}
          label="Email"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <TextField
          sx={{ paddingBottom: 1 }}
          label="Mensaje"
          variant="outlined"
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <Button
          color="secondary"
          variant="outlined"
          type="submit"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? "Enviar"
              : "Enviado"
            : "Enviando..."}
        </Button>
      </form>
      {status.info.error && (
        <Typography className="error">Error: {status.info.msg}</Typography>
      )}
      {!status.info.error && status.info.msg && (
        <Typography>{status.info.msg}</Typography>
      )}
    </Card>
  );
};

export default ContactForm;
