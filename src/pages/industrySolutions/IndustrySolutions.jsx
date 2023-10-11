import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./industrySolutions.css";

import feed1 from "../../images/feed-1.png";
import b2b2 from "../../images/b2b-2.png";
import b2b3 from "../../images/b2b-3.png";
import b2b4 from "../../images/b2b-4.png";
import b2b5 from "../../images/b2b-5.png";
import Contact from "../../components/contact/Contact";
import GetQuotation2 from "../../components/getQuotation2/GetQuotation2";
import { Link } from "react-router-dom";

const IndustrySolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>EASTHAI - Business Solutions</title>
      </Helmet>
      <div className="industrySolutions">
        <div className="industrySolutionsContent">
          <h1>Business Solutions</h1>
         
          <h3>  <span>"</span> Tailor-made solution designed to meet your unique business requirements  <span>"</span> </h3>
         
        </div>
      </div>

        <div className="industrySection container">
          <div className="image-container">
            <img src={feed1} alt="นำเข้าอาหารสัตว์" />
            <div className="image-overlay">
              <h1>Animal feed</h1>
              <div className="overlay-text">
                <span>Animal Health Product</span>
                <span>Nutrition Product</span>
                <span>Dianostic Product</span>
                <span>Complete Feed Product</span>
                <span>Ingredient Product</span>
                <Link to='/blog/animal-feed-customs-clearance'>
                <button>Read more</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img src={b2b2} alt="นำเข้าอุปกรณ์นิรภัย" />
            <div className="image-overlay">
              <h1>Safety Equipment</h1>
              <div className="overlay-text">
                
              </div>
            </div>
          </div>

          <div className="image-container">
            <img src={b2b3} alt="นำเข้าเครื่องเสียง" />
            <div className="image-overlay">
              <h1>Audio System</h1>
              <div className="overlay-text">
                
              </div>
            </div>
          </div>

          <div className="image-container">
            <img src={b2b4} alt="นำเข้าเครื่องสำอาง" />
            <div className="image-overlay">
              <h1>Beauty Product</h1>
              <div className="overlay-text">
                
              </div>
            </div>
          </div>

          <div className="image-container">
            <img src={b2b5} alt="นำเข้าอุปกรณ์" />
            <div className="image-overlay">
              <h1>Machine Part</h1>
              <div className="overlay-text">
                
              </div>
            </div>
          </div>
          
        </div>
        <GetQuotation2/>
        <Contact/>


    </>
  );
};

export default IndustrySolutions;
