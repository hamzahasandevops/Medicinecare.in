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
        <CardContent>
          <Typography variant="body2" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Continue reading…</Button>
        </CardActions>
      </Card>
    </>
  );
}
