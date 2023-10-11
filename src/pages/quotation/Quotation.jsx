import React from "react";
import "./quotation.css";
import QuotationForm from "../../components/quotationForm/QuotationForm";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import quotaimg from '../../images/quotacover.png'

import { Helmet } from "react-helmet";

const Quotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>EASTHAI - Get Quotation</title>
      </Helmet>
      <Container>
      <div className="quotation">
      <div className="quotationLeft">
        <img src={quotaimg} alt="ใบเสนอราคาชิปปิ้ง" />
      </div>
      <div>
        <div className="quotationRight">
          <QuotationForm />
        </div>
      </div>
      </div>
      </Container>

    </>
  );
};

export default Quotation;
