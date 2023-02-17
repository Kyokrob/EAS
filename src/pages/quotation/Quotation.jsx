import React from "react";
import "./quotation.css";
import QuotationForm from "../../components/quotationForm/QuotationForm";
import { useEffect } from "react";
import Container from "@mui/material/Container";

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
          <QuotationForm />
        </div>
      </Container>
    </>
  );
};

export default Quotation;