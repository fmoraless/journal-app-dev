import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
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
  startLoginWithEmailPassword,
} from "../../store/auth/thunk";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe contener un @"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener más 6 caracteres",
  ],
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData, formValidations);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({ email, password });
    dispatch(
      startLoginWithEmailPassword({
        email,
        password,
      })
    );
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

          <Grid container display={errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12} sx={{ mt: 2 }}>
              {status === "error" && (
                <Alert severity="error">{errorMessage}</Alert>
              )}
            </Grid>
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
