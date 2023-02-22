import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Form = () => {
  const form = useRef();
  const [alert, setAlert] = useState({severity:'',message:''});

  const sendEmail = (e) => {
    e.preventDefault();


    if(!form.current.name.value || !form.current.email.value)
    {
      setAlert({severity:'error', message:'Please enter the following information: Full Name, Email'});
        setOpen(true);
        return;
    }

    setAlert({severity:'success', message:'The Email has been sent ! We will contact you back shortly.'});
    setOpen(true);

    emailjs
      .sendForm(
        "service_50n0r1n",
        "template_wh2cn0t",
        form.current,
        "QbyAUOGwHjpj80LAc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
    <div className="form">
      <div className="formTitle">
        <h1>ติดต่อเพื่อสอบถาม</h1>
        <p>กรอบข้อมูลสำหรับเจ้าหน้าที่เพื่อทำการติดต่อกลับ</p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="formFields">
          <div className="formField">
            <input
              type="text"
              className="form-control"
              placeholder="ชื่อสำหรับติดต่อกลับ (กรุณาระบุ)"
              name="name"
              required
            />
          </div>
          <div className="formField">
            <input
              type="text"
              className="form-control"
              placeholder="อีเมลล์ (กรุณาระบุ)"
              name="email"
              required
            />
          </div>
          <div className="formField">
            <input
              type="tel"
              className="form-control"
              placeholder="เบอร์สำหรับติดต่อกลับ"
              name="phone"
            />
          </div>
          <div className="formField">
            <input
              type="text"
              className="form-control"
              placeholder="ไลน์ไอดี"
              name="line"
            />
          </div>

          <div className="formField">
          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="4"
            placeholder="คำถามที่ต้องการปรึกษา "
            name="message"
          ></textarea>
          </div>

          <div className="formInputBtn">
            <button
              type="submit"
              value="send"
              onClick={handleClick}
            >
              Submit
            </button>



            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>

             <Alert      
                severity={alert.severity}
                sx={{ width: "100%" }}
              >
                {alert.message}
              </Alert>

            </Snackbar>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
