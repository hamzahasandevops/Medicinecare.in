import axios from "axios";
import React from "react";
import { useState } from "react";

export default function ProductForm() {
  // const [values, setValues] = useState({
  //   pro_name: "dfg",
  //   pro_name1: "dfgdfg",
  //   pro_mrp: "dfgdg",
  //   images: "",
  // });
  // const handleChange = (event) => {
  //   setValues({ ...values, [event.target.name]: [event.target.value] });
  // };

  const [pro_name, setPro_name] = useState("");
  const [pro_name1, setPro_name1] = useState("");
  const [pro_mrp, setPro_mrp] = useState("");
  const [file, setFile] = useState();

  const upload = () => {
    const formData = new FormData();
    formData.append("pro_name", pro_name);
    formData.append("pro_name1", pro_name1);
    formData.append("pro_mrp", pro_mrp);
    formData.append("file", file);
    axios
      .post("http://localhost:8090/create", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios({
  //     method: "post",
  //     url: "http://localhost:8000/users",
  //     data: values,
  //   })
  //     .then((res) => console.log("ho gva be"))
  //     .catch((err) => {
  //       throw err;
  //     });
  // };

  // console.log(values);
  return (
    <div>
      <div className="">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control container w-25"
              placeholder="Enter your product name here"
              name="pro_name"
              onChange={(e) => setPro_name(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control container w-25"
              placeholder="Enter your product second name here"
              name="pro_name1"
              onChange={(e) => setPro_name1(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control container w-25"
              placeholder="Enter your product price here"
              name="pro_mrp"
              onChange={(e) => setPro_mrp(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control container w-25"
              placeholder="Enter the amount"
              name="images"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <input
            onClick={upload}
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
