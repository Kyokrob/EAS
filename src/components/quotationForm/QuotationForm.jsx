import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./quotationform.css";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function QuotationForm() {
  const form = useRef();
  const [alert, setAlert] = useState({severity:'',message:''});

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    company: "",
    telephone: "",
    productType: "",
    service: "",
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
      company,
      telephone,
      productType,
      service,
      moreDetail,
    } = formValues;

    const templateParams = {
      from_name: name,
      from_email: email,
      company: company,
      telephone: telephone,
      product_type: productType,
      service: service,
      more_detail: moreDetail,
    };


    if(!form.current.name.value || !form.current.email.value)
    {
      setAlert({severity:'error', message:'Please enter the following information: Full Name, Email'});
        setOpen(true);
        return;
    }

    setAlert({severity:'success', message:'The Email has been sent ! We will contact you back shortly.'});
    setOpen(true);

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

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
      <form className="quotation-form" ref={form} onSubmit={handleSubmit}>
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
              required
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
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company name"
              value={formValues.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="telephone">Tel : </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              placeholder="Enter your contact number"
              value={formValues.telephone}
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
            <label htmlFor="service">Service:</label>
            {/* <input
              type="text"
              id="service"
              name="service"
              placeholder="Carton weight"
              value={formValues.weight}
              onChange={handleChange}
              /> */}
              <select value={formValues.service} onChange={(e) => setFormValues(e.target.value)}>
          <option value="">--Please choose an service--</option>
          <option value="option1">Freight forwarding</option>
          <option value="option2">Shipping</option>
          <option value="option3">Transportation</option>
        </select>
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
        <button type="submit" value="send"
              onClick={handleClick}>Get Quotation</button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

             <Alert      
                severity={alert.severity}
                sx={{ width: "100%" }}
              >
                {alert.message}
              </Alert>

            </Snackbar>
      </form>
    </>
  );
}
export default QuotationForm;
