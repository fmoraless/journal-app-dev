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
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar Sesión">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
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
                Acceder
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Link component={RouterLink} color="inherit" to="/auth/recovery">
              <Typography variant="overline">Olvidé mi contraseña</Typography>
            </Link>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              <Typography variant="overline">Crear una cuenta</Typography>
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
