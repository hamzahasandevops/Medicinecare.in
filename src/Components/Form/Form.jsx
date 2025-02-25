import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    name: "dfg",
    email: "dfgdfg",
    password: "dfgdg",
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8090/users",
      data: values,
    })
      .then((res) => console.log("ho gva be"))
      .catch((err) => {
        throw err;
      });
  };

  console.log(values);

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control container w-25"
            placeholder="Enter your product name here"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control container w-25"
            placeholder="Enter your product1 name here"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control container w-25"
            placeholder="Enter the amount"
            name="password"
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
  );
}
