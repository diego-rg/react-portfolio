import React, { useState } from "react";
import axios from "axios";

import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";

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
      url: "https://FormControlspree.io/f/mdobwblp",
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
    <Paper
      sx={{ background: "white", padding: 2, border: "1px solid #66fcf1" }}
    >
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Contacta conmigo
      </Typography>
      <FormControl onSubmit={handleOnSubmit}>
        <TextField
          label="Email"
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <TextField
          label="Mensaje"
          multiline
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
      </FormControl>
      {status.info.error && (
        <Typography className="error">Error: {status.info.msg}</Typography>
      )}
      {!status.info.error && status.info.msg && (
        <Typography>{status.info.msg}</Typography>
      )}
    </Paper>
  );
};

export default ContactForm;
