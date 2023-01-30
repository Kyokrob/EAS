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
        <h1>ติดต่อเรา</h1>
        <p>ต้องการนำเข้าส่งออกสินค้าเพียงกรอบข้อมูล</p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="formFields">
          <div className="formField">
            <input
              type="text"
              className="form-control"
              placeholder="ชื่อนาม - สกุล (กรุณาระบุ)"
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
              type="number"
              className="form-control"
              placeholder="เบอร์โทร (กรุณาระบุ)"
              name="number"
            />
          </div>
          <div className="formField">
            <input
              type="text"
              className="form-control"
              placeholder="Line Id"
              name="line"
            />
          </div>

          <textarea
            className="form-control"
            id=""
            cols="30"
            rows="4"
            placeholder="How Can We Help You. Please provide more detail from your package - Type, weight, country"
            name="message"
          ></textarea>

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
