import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./quotationform.css";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function QuotationForm() {
  const form = useRef();
  const [alert, setAlert] = useState({ severity: "", message: "" });

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

    if (!form.current.name.value || !form.current.email.value) {
      setAlert({
        severity: "error",
        message: "Please enter the following information: Full Name, Email",
      });
      setOpen(true);
      return;
    }

    setAlert({
      severity: "success",
      message: "The Email has been sent ! We will contact you back shortly.",
    });
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
            <label htmlFor="name">ชื่อผู้ติดต่อ:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
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
              placeholder=""
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="company">ชื่อบริษัท:</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Optional"
              value={formValues.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="telephone">เบอร์ติดต่อ : </label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              placeholder=""
              value={formValues.telephone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-col">
            <label htmlFor="productType">ประเภทสินค้า :</label>
            <input
              type="text"
              id="productType"
              name="productType"
              placeholder="กรอกชื่อหรือประเภทสินค้า"
              value={formValues.productType}
              onChange={handleChange}
            />
          </div>

          <div className="form-col">
            <label htmlFor="service">บริการที่สนใจ :</label>
            {/* <input
              type="text"
              id="service"
              name="service"
              placeholder="Carton weight"
              value={formValues.weight}
              onChange={handleChange}
              /> */}

            <select
              type="text"
              id="service"
              name="service"
              value={formValues.service}
              onChange={(e) => {
                setFormValues({...formValues, service: e.target.value});
              }}
            >
              <option value="" disabled>เลือกประเภทบริการ</option>
              <option value="freightforwarding">Freight forwarding (นำเข้าส่งออก)</option>
              <option value="shipping">Shipping (พิธีการศุลกากร)</option>
              <option value="transportation">Inland transportation</option>
            </select>

          </div>
        </div>
        <div className="form-row">
          <div className="form-col1">
            <label htmlFor="moreDetail">ข้อมูลเพิ่มเติม:</label>
            <textarea
              id="moreDetail"
              name="moreDetail"
              placeholder="ระบุข้อมูลเพิ่มเติม เช่น น้ำหนัก ประเทศนำเข้า เอกสารสำคัญ ขอพิกัดศุลกากรและการคำนวนภาษี หรือ ฟอร์มต่างๆ"
              value={formValues.moreDetail}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" value="send" onClick={handleClick}>
         ขอใบเสนอราคา
        </button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity={alert.severity} sx={{ width: "100%" }}>
            {alert.message}
          </Alert>
        </Snackbar>
      </form>
    </>
  );
}
export default QuotationForm;
