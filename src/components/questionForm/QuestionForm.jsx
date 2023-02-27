import React from 'react'
import '../questionForm/questionForm.css'
import faqcover from "../../images/faqcover_3.png";
import Button from "@mui/material/Button";




const QuestionForm = () => {
  return (
    <>
          <div className="courierForm">
      
      <div className="courierFormRight">
    <div className="courier2Right">
          <img
            src={faqcover}
            alt="ชิปปิ้ง นำเข้า เคลียร์สินค้า shipping freight company"
          />
          <div className="courier2RightText">
            <h1>Dear shipper,</h1>
            <p>
              ความคิดเห็นของคุณมีค่ามากสำหรับเรา
              หากคุณมีข้อสงสัยเกี่ยวกับการนำเข้าและส่งออก
              ไม่ต้องกังวลที่จะส่งคำถามมาหาเรา
            </p>
            <div className="form-row-faq">
              <div className="form-col-faq">
                <textarea
                  id="moreDetail"
                  name="moreDetail"
                  placeholder="โปรดให้ข้อมูลการติดต่อกลับ เช่น Email, เบอร์โทร พร้อมคำถามเพื่อให้ทีมงานของเราสามารถติดต่อกลับไปได้"
                />
                <Button
                  sx={{
                    marginRight: "auto",
                    marginTop: "12px",
                    padding: "6px 24px",
                    background: "#E6AF4B",
                    borderRadius: "5px",
                    color: "#000000",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>


        </div>
        </div>
      </div>
        </>
  )
}

export default QuestionForm