import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

export default function MainSection() {
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: 280 }}
          image="src/assets/Images/banner.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography variant="h4" mt={2}>
            Latest and Affordable prices medicines available.
          </Typography>
          <Typography variant="h4">Presenting Garcinia combogia</Typography>
        </CardContent>
      </Card>
    </>
  );
}
