import React, { useState } from "react";

export default function ImpMedicines2() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/create")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <Grid
        sm={12}
        md={12}
        lg={8}
        sx={{ display: "flex", flexDirection: "column" }}
      ></Grid>
    </>
  );
}
