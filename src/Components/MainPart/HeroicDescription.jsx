import React from "react";
import Box from "@mui/material/Box";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import { Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function FullBorderedGrid() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <div
        className="grid-container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="grid-item d-flex mt-3">
          <i
            className="fa-solid fa-user-doctor"
            style={{ fontSize: "30px", color: "skyblue" }}
          ></i>
          <Typography
            className=""
            style={{ marginLeft: "20px", fontSize: "20px", flexWrap: "wrap" }}
          >
            FREE (CHAT) DOCTOR CONULTATION
          </Typography>
        </div>
        <div className="grid-item d-flex mt-3">
          <HealthAndSafetyIcon style={{ fontSize: "30px", color: "skyblue" }} />

          <Typography
            className=""
            style={{ margin: "0px", fontSize: "20px", flexWrap: "wrap" }}
          >
            Safe & 100% Natural
          </Typography>
        </div>
        <div className="grid-item d-flex mt-3">
          <LocalShippingIcon style={{ fontSize: "30px", color: "skyblue" }} />

          <Typography
            className=""
            style={{ marginLeft: "10px", fontSize: "20px", flexWrap: "wrap" }}
          >
            DOORSTEP DELIVERY
          </Typography>
        </div>
        <div className="grid-item d-flex mt-3">
          <i
            className="fa-solid fa-calendar-days"
            style={{ fontSize: "30px", color: "skyblue" }}
          ></i>

          <Typography
            className=""
            style={{ marginLeft: "10px", fontSize: "20px", flexWrap: "wrap" }}
          >
            SERVING SINCE 2000
          </Typography>
        </div>
      </div>
    </Box>
  );
}
