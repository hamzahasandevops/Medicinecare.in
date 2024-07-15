import React, { useEffect, useState } from "react";
import Product from "./Product";

import { product } from "./Data/data";

export default function HomeData() {
  const [data, setData] = useState();

  useEffect(() => {
    if (product && product.length > 0) {
      setData(product);
    }
  }, []);
  console.log(data);

  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-3 g-4  d-flex  "
        style={{ flexDirection: "column" }}
      >
        {data &&
          data.map((d) => {
            return <Product product={d} />;
          })}
      </div>
    </>
  );
}

// return <Product product={prod} key={i} />;
