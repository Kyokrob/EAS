import React from 'react'
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import getquotaion2 from "../../images/getquotation2.gif";
import './getQuotation2.css'

const GetQuotation = () => {
  return (
    <Container>
     <div className="sec5">
          <div className="sec5Left">
            <img src={getquotaion2} alt="" />
          </div>
          <div className="sec5Right">
            <h1>EAST ASIA SHIPPING (THAILAND)</h1>
            <p>
              Provides seamless logistics solutions, including freight
              forwarding and customs clearance services. We specialize in
              streamlining the shipping process, providing personalized support,
              and ensuring goods reach their destination quickly and
              efficiently.
            </p>
            <Link to="/quotation" className="sec5Btn">
              <button>Get Quotation</button>
            </Link>
          </div>
        </div>

    </Container>
  )
}

export default GetQuotation