import React from 'react'
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import cover4 from "../../images/cover4.gif";
import './getQuotation.css'

const GetQuotation = () => {
  return (
    <>
     <Container className="sec4">
          <div className="sec4Left">
            <img src={cover4} alt="" />
          </div>
          <div className="sec4Right">
            <h1>EAST ASIA SHIPPING (THAILAND)</h1>
            <p>
              Provides seamless logistics solutions, including freight
              forwarding and customs clearance services. We specialize in
              streamlining the shipping process, providing personalized support,
              and ensuring goods reach their destination quickly and
              efficiently.
            </p>
            <Link to="/quotation" className="sec4Btn">
              <button>Get Quotation</button>
            </Link>
          </div>
        </Container>

    </>
  )
}

export default GetQuotation