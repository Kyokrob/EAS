import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./quotationform.css";

function QuotationForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    origin: "",
    destination: "",
    productType: "",
    dimensions: "",
    weight: "",
    moreDetail: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      email,
      origin,
      destination,
      productType,
      weight,
      moreDetail,
    } = formValues;

    const templateParams = {
      from_name: name,
      from_email: email,
      origin: origin,
      destination: destination,
      product_type: productType,
      weight: weight,
      more_detail: moreDetail,
    };

    emailjs
      .send(
        "service_50n0r1n",
        "template_l7zb1k9",
        templateParams,
        "QbyAUOGwHjpj80LAc"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <div className="quotationTitle">
        <h1>กรอกข้อมูลสำหรับใบเสนอราคา</h1>
        {/* <h3>กรุณากรอกข้อมูลเพื่อขอใบเสนอราคา</h3> */}
        <p>
          หรือสอบถามพูดคุยทางไลน์{" "}
          <a className="quotationClick" href="https://page.line.me/999piqzj">
            กดตรงนี้
          </a>{" "}
        </p>
      </div>
      <form className="quotation-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="origin">Origin:</label>
            <input
              type="text"
              id="origin"
              name="origin"
              placeholder="Place of origin"
              value={formValues.origin}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="destination">Destination:</label>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Place of destination"
              value={formValues.destination}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="productType">Type of Product:</label>
            <input
              type="text"
              id="productType"
              name="productType"
              placeholder="What are your product"
              value={formValues.productType}
              onChange={handleChange}
            />
          </div>

          <div className="form-col">
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              id="weight"
              name="weight"
              placeholder="Carton weight"
              value={formValues.weight}
              onChange={handleChange}
              />
        </div>
              </div>
        <div className="form-row">
          <div className="form-col1">
            <label htmlFor="moreDetail">More Detail:</label>
            <textarea
              id="moreDetail"
              name="moreDetail"
              placeholder="How can we help"
              value={formValues.moreDetail}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Get Quotation</button>
      </form>
    </>
  );
}
export default QuotationForm;
