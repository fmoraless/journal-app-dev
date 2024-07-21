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

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Juan"
              fullWidth
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
              label="Apellido paterno"
              type="text"
              placeholder="Pérez"
              fullWidth
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
              label="Rut"
              type="text"
              placeholder="88123456-k"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FingerprintOutlinedIcon />
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
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
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
          </Grid>

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
              <Button variant="contained" fullWidth>
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
