import React from 'react'
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import cover5 from "../../images/cover5.gif";
import './getQuotation.css'

const GetQuotation = () => {
  return (
    <Container>
     <div className="sec4">
          <div className="sec4Left">
            <img src={cover5} alt="Shipping" />
          </div>
          <div className="sec4Right">
            <h1>ขนส่งอย่างไม่มีข้อจำกัด</h1>
            <p>
            บริการขนส่งสินค้าจากผู้เชี่ยวชาญดูแลอย่างมืออาชีพรับรองว่าสินค้าจะถึงสถานที่ปลายทางได้อย่างรวดเร็วและมีประสิทธิภาพ 
            </p>
            <Link to="/quotation" className="sec4Btn">
              <button>ใบเสนอราคา (ฟรี)</button>
            </Link>
          </div>
        </div>

    </Container>
  )
}

export default GetQuotation