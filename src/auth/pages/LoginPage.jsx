import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { Google } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunk";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  console.log(status);
  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: "fcomorales.sanchez@gmail.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);
  console.log({ isAuthenticating: isAuthenticating });

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("Google Sign In");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Iniciar Sesión">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
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
              name="password"
              onChange={onInputChange}
              value={password}
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
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Acceder
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                onClick={onGoogleSignIn}
                type="submit"
                variant="contained"
                fullWidth
              >
                <Google />
                <Typography variant="button">Google</Typography>
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
