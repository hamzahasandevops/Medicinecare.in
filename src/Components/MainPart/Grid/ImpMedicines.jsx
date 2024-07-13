import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ImpMedicines() {
  return (
    <div sx={{ border: 1 }}>
      <Card>
        <Typography
          variant="h5"
          sx={{
            flexWrap: "wrap",
            padding: "0px",
            margin: "5px 7px 0 7px",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Trending Homeopathic Medicines
        </Typography>
        <CardMedia
          sx={{
            height: 200,
            width: 200,
            backgroundSize: "contain",
            marginLeft: 5,
            borderColor: "divider",
          }}
          image="src/assets/Images/spondin.jfif"
          title="green iguana"
        />
        <CardContent sx={{ marginLeft: 5 }}>
          <Typography sx={{ flexWrap: "wrap" }}>
            Bhargava Spondin Drop
          </Typography>
          <Typography sx={{}}>For Pain Relief from Neck & Shoulder</Typography>
          <Typography sx={{ fontFamily: "sans-serif", fontSize: 25 }}>
            MRP <del>$200</del>
          </Typography>
        </CardContent>
        <CardActions sx={{ marginLeft: 5 }}>
          <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia
          sx={{
            height: 200,
            width: 200,
            backgroundSize: "contain",
            marginLeft: 5,
          }}
          image="src/assets/Images/gar.jfif"
          title="green iguana"
        />
        <CardContent>
          <Typography sx={{ marginLeft: 5 }}>Garcinia Cambogia Drop</Typography>
          <Typography
            sx={{ fontFamily: "sans-serif", fontSize: 25, marginLeft: 5 }}
          >
            MRP <del>$200</del>
          </Typography>
        </CardContent>
        <CardActions sx={{ marginLeft: 5 }}>
          <Button variant="contained" endIcon={<AddShoppingCartIcon />}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
