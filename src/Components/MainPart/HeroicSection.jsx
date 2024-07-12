import React from "react";

import { Link, List } from "@mui/material";

export default function HeroicSection() {
  return (
    <>
      <List
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexGrow: "1",
          padding: "20px",
        }}
      >
        <Link
          underline="none"
          href="#"
          sx={{ fontSize: "25px", fontWeight: "400" }}
        >
          Diseases
        </Link>
        <Link
          underline="none"
          href="#"
          sx={{ fontSize: "25px", fontWeight: "400" }}
        >
          Herbal supplimen
        </Link>
        <Link
          underline="none"
          href="#"
          sx={{ fontSize: "25px", fontWeight: "400" }}
        >
          Personal care & cosmetics
        </Link>
        <Link
          underline="none"
          href="#"
          sx={{ fontSize: "25px", fontWeight: "400" }}
        >
          Bio chemics
        </Link>
        <Link
          underline="none"
          href="#"
          sx={{ fontSize: "25px", fontWeight: "400" }}
        >
          Mother tinctures
        </Link>
        <Link
          underline="none"
          href="#"
          sx={{ fontSize: "25px", fontWeight: "400" }}
        >
          Dillutions
        </Link>
        <Link
          underline="none"
          href="#"
          sx={{ fontSize: "25px", fontWeight: "400" }}
        >
          Blogs
        </Link>
      </List>
    </>
  );
}
