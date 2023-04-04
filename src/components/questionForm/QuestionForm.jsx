import React from 'react'
import '../questionForm/questionForm.css'
import faqcover from "../../images/faqcover_3.png";
import Button from "@mui/material/Button";


const QuestionForm = () => {
  return (
    <>
          <div className="courierFormNew">     
      <div className="courierFormRight">
    <div className="courier2Right">
          <img
            src={faqcover}
            alt="ชิปปิ้ง นำเข้า เคลียร์สินค้า shipping freight company"
          />
          <div className="courier2RightText">
            <h1>Dear Shipper,</h1>
            <p>
              หากคุณมีข้อสงสัยและคำถามเกี่ยวกับการนำเข้าและส่งออกส่งคำถามมาเรายินดีให้คำปรึกษาพร้อมช่วยเหลือ
            </p>
            <div className="form-row-faq">
              <div className="form-col-faq">
                <textarea
                  id="moreDetail"
                  name="moreDetail"
                  placeholder="กรอกข้อมูลเบื้อต้นสำหรับผู้ติดต่อกลับ เช่น Email หรือ เบอร์โทร พร้อมคำถามเพื่อให้ทีมงานสามารถติดต่อกลับ"
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