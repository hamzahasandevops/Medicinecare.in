import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ImpMedicines from "./Grid/ImpMedicines";
import ImpMedicines2 from "./Grid/ImpMedicines2";

export default function Medicine() {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12} md={3} sm={12} sx={{}}>
          <ImpMedicines />
        </Grid>
        <Grid item xs={12} md={9} sx={{ display: { xs: "none", sm: "block" } }}>
          <ImpMedicines2 />
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography>3</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography>4</Typography>
        </Grid>
      </Grid>
    </>
  );
}
