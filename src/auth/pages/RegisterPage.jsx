import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { MailOutline } from "@mui/icons-material";

const fromData = {
  email: "fcomorales.sanchez@gmail.com",
  password: "123456",
  displayName: "Francisco Morales",
};

export const RegisterPage = () => {
  const { email, password, onInputChange, displayName } = useForm(fromData);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password, displayName });
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Juan Perez"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="juan@perez.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="tu contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Confirmar Contraseña"
              type="password"
              placeholder="Confirmar contraseña"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid> */}

          {/* BOTONES */}
          <Grid
            container
            spacing={1}
            sx={{
              mb: 2,
              mt: 1,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="end"
            alignItems="center"
          >
            <Typography sx={{ mr: 1 }} variant="overline">
              ¿Ya tienes cuenta?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              <Typography variant="overline">Iniciar sesión</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
