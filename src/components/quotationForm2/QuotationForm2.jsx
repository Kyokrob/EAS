// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import "./quotationform2.css";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";

// function QuotationForm2() {
//   const form = useRef();
//   const [alert, setAlert] = useState({ severity: "", message: "" });

//   const [quotationForm2Data , setQuotationForm2Data ] = useState({
//     name: "",
//     email: "",
//     telephone: "",
//     service: "",
//   });


//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setQuotationForm2Data((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const {
//       name, email, telephone, service
//     } = quotationForm2Data;

//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       telephone: telephone,
//       service: service,
//     };

//     if (!form.current.name.value || !form.current.email.value) {
//       setAlert({
//         severity: "error",
//         message: "Please enter the following information: Full Name, Email",
//       });
//       setOpen(true);
//       return;
//     }

//     setAlert({
//       severity: "success",
//       message: "The Email has been sent ! We will contact you back shortly.",
//     });
//     setOpen(true);

//     emailjs
//       .send(
//         "service_50n0r1n",
//         "template_wh2cn0t",
//         templateParams,
//         "QbyAUOGwHjpj80LAc",
//       )
//       .then(
//         function (response) {
//           console.log("SUCCESS!", response.status, response.text);
//         },
//         function (error) {
//           console.log("FAILED...", error);
//         }
//       );
//   };

//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };


//   return (
//     <div className="form">
       
//       <form ref={form} onSubmit={handleSubmit}>
//         <div className="formFields">
//         <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#042b3b",}} />
//             <div className="formField">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="ชื่อผู้ติดต่อ*"
//                 name="name"
//                 value={formValues.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#042b3b",}} />
//             <div className="formField">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="อีเมลล์ของคุณ*"
//                 name="email"
//                 value={formValues.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <FontAwesomeIcon icon={faPhone} size="lg" style={{color: "#042b3b",}} />
//             <div className="formField">
//               <input
//                 type="tel"
//                 className="form-control"
//                 placeholder="เบอร์โทรศัพท์"
//                 id="telephone"
//                 name="telephone"
//                 value={formValues.telephone}
//                 onChange={handleChange}
//               />
//             </div>
//             <FontAwesomeIcon icon={faBoxOpen} size="lg" style={{ color: '#042b3b' }}/>
//             <div className="formField">
//               <select
//                 className="form-control"
//                 type="text"
//                 id="service"
//                 name="service"
//                 value={formValues.service}
//                 onChange={(e) => {
//                   setFormValues({ ...formValues, service: e.target.value });
//                 }}
//               >
//                 <option value="" disabled>
//                   เลือกประเภทบริการ
//                 </option>
//                 <option value="express">Express support</option>
//               <option value="airfreight">Air Freight</option>
//               <option value="seafreight">Sea Freight</option>
//               <option value="shipping">Customs clearance (พิธีการศุลกากร)</option>
//               <option value="transportation">Inland transportation (ขนส่งภายในปรเทศ)</option>
//               </select>
//             </div>
//           <div className="formInputBtn">
//             <button type="submit" value="send" onClick={handleClick}>
//               <p>ติดต่อเรา </p><FontAwesomeIcon icon={faPaperPlane} bounce size="lg" style={{color: "#ffffff",}} />
//             </button>

//             <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//               <Alert severity={alert.severity} sx={{ width: "100%" }}>
//                 {alert.message}
//               </Alert>
//             </Snackbar>
//           </div>

//         </div>
//       </form>
//     </div>
//   );
// }
// export default QuotationForm2;
