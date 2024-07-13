import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Cart({ products }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        sx={{ height: 140 }}
        // image={products.thumbnail}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {products.carts.title} */}
      {/* </Typography>
        <Typography variant="body2" color="text.secondary"></Typography> */}
      {/* </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions> */}{" "}
      {/* /} */}
    </Card>
  );
}
