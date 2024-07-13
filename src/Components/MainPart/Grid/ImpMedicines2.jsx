import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ImpMedicines2() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/create")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .then((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <>
      {" "}
      <Grid sx={{ display: "flex" }} sm={12} md={12} lg={8}>
        {data &&
          data.length > 0 &&
          data.map((d, i) => {
            return (
              <>
                {/* <div className="col-md-4" key={d.id}>
                  <CardMedia
                    sx={{ height: 140 }}
                    // image={`http://localhost:8000/images/` + d.images}
                    title="green iguana"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div> */}
              </>
            );
          })}
      </Grid>
    </>
  );
}
