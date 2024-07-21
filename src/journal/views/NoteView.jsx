import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems={"center"}
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography variant="h5">28 agosto 2024</Typography>
      </Grid>
      <Grid item sx={{ padding: 2 }}>
        <Button color="primary">
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Título"
          sx={{ border: "none", marginBottom: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué pasó hoy?"
          minRows={5}
          sx={{ border: "none", marginBottom: 1 }}
        />
      </Grid>

      {/* Galeria de imatgenes */}
    </Grid>
  );
};
