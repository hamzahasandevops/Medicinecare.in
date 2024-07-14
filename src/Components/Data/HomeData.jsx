import { Male } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cart from "../Cart/Cart";
export default function HomeData() {
  const [data, setData] = useState("");

  const FetchApi = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    if (data && data.products) {
      setData(data.products);
    }
  };

  useEffect(() => {
    FetchApi();
  }, []);

  console.log(data);

  return (
    <>
      <div>
        {data &&
          data.length > 0 &&
          data.map((prod, i) => {
            return (
              <>
                <img
                  src={prod.images}
                  width="200px"
                  height="200px"
                  className="border rounded"
                />
                <br />
                <span>{prod.title}</span>
                <p>${prod.price}</p>
                <p>{prod.brand}</p>
                <p>{prod.availabilityStatus}</p>
                <h4>{prod.description}</h4>
                <h2>rating {prod.rating}</h2>
                <button className="btn btn-primary  ">ADD TO CART</button>
              </>
            );
          })}
      </div>
    </>
  );
}
