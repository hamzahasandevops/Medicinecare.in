import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ImpMedicines2() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/users")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .then((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <Card sx={{ display: "flex" }}>
      {data &&
        data.map((d, i) => {
          return (
            <>
              <Card
                sx={{
                  boxShadow: "0 0 1 0 black",
                }}
                key={d.id}
              >
                <CardContent sx={{}} key={d.id}>
                  <CardMedia
                    sx={{
                      height: 200,
                      width: 200,
                      backgroundSize: "contain",
                      marginLeft: 5,
                      borderColor: "divider",
                    }}
                    image={d.images}
                    title="green iguana"
                  />
                  <CardContent sx={{ marginLeft: 5 }} key={d.images}>
                    <Typography sx={{ flexWrap: "wrap" }}>
                      {d.pro_name}
                    </Typography>
                    <Typography sx={{}}>{d.pro_name1}</Typography>
                    <Typography sx={{ fontFamily: "sans-serif", fontSize: 25 }}>
                      MRP <del>{d.pro_mrp}</del>
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ marginLeft: 5 }}>
                    <Button
                      variant="contained"
                      endIcon={<AddShoppingCartIcon />}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </>
          );
        })}
    </Card>
  );
}
