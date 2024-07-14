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
import Product from "./Product";
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



  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4  ">
        {data &&      
          data.length > 0 &&
          data.map((prod, i) => {
            return (
            <Product product = {prod} key={i}/>
            );
          })}
      </div>
    </>
  );
}
