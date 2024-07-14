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
import HomeData from "../Data/HomeData";

export default function Medicine() {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        <Grid item xs={12} md={3} sm={12} sx={{}}>
          <ImpMedicines />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          xl={9}
          sx={{
            display: { xs: "none", lg: "block", xl: "none", sm: "block" },
          }}
        >
          <HomeData />
        </Grid> 
        {/* <Grid item xs={6} md={6}>
          <Typography>3</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography>4</Typography>
        </Grid> */}
      </Grid>
    </>
  );
}
