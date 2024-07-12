import axios from "axios";
import React from "react";
import { useState } from "react";

export default function ProductForm() {
  const [values, setValues] = useState({
    pro_name: "dfg",
    pro_name1: "dfgdfg",
    pro_mrp: "dfgdg",
    images: "",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8000/users",
      data: values,
    })
      .then((res) => console.log("ho gva be"))
      .catch((err) => {
        throw err;
      });
  };

  console.log(values);
  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control container w-25"
              placeholder="Enter your product name here"
              name="pro_name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control container w-25"
              placeholder="Enter your product second name here"
              name="pro_name1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control container w-25"
              placeholder="Enter your product price here"
              name="pro_mrp"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control container w-25"
              placeholder="Enter the amount"
              name="images"
              onChange={handleChange}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary "
            value="submit"
            style={{ marginLeft: "760px" }}
          />
        </form>
      </div>
    </div>
  );
}
