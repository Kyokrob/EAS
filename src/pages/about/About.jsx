import React from "react";
import "./about.css";

import Container from "@mui/material/Container";
import { useEffect } from "react";

import Contact from "../../components/contact/Contact";
import OurService from "../../components/ourService/OurService";
import GetQuotation from "../../components/getQuotation/GetQuotation";
import video1 from "../../images/eas-video1.mp4";
import about2 from "../../images/about_2.png";
import about4 from '../../images/ourservice1.png'
import thumbnail from "../../images/thumbnail.png";

import { Helmet } from "react-helmet";
import B2bSolutions from "../../components/b2bSolutions/B2bSolutions";
import BrandSlider from '../../components/sliderBrandTestimonial/SliderBrandTestimonial';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>EASTHAI - About</title>
      </Helmet>
      <div className="about">
      <div className="aboutHeader">
        <video
          loading="lazy"
          autoPlay
          playsInline
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "1",
          }}
          poster={thumbnail}
        >
          <source src={video1} type="video/mp4" />
        </video>

        <div className="aboutHeaderText">
          <h1>
            EAS<span className="aboutHeaderTextHighlight">THAI</span>
          </h1>
          <p>EXPERIENCE IS OUR EXPERTIES</p>
        </div>
      </div>
      <BrandSlider/>

      <div className="aboutSection">
        <h1>ABOUT US</h1>
        <h3>Trusted Name in Freight Forwarding for over 25 Years</h3>
        <p>
          East asia shipping (thailand) ltd a Thailand-based freight forwarding
          company that has been serving the industry for over 25 years.
          Throughout our history, we have established a strong reputation for
          reliability and excellence in the logistics industry. Our team of
          experienced professionals is dedicated to providing high-quality,
          cost-effective solutions for our clients, and is known for our
          excellent customer service and reliable delivery. In addition to
          transportation services, we also offer customs clearance assistance to
          ensure a smooth and seamless import and export process.
        </p>
      </div>

      <Container className="aboutSection2">
        <div className="aboutLeft">
          <img src={about2} alt="" />
        </div>
        <div className="aboutRight">
          <p>
            As a trusted partner to businesses around the world, East asia shipping Thailand is
            committed to continuously improving our services and finding new
            ways to meet the needs of our clients. With our extensive experience
            and expertise in the industry, you can trust EASTHAI to handle all
            of your freight forwarding needs. Whether you are shipping by air or
            sea, we have the resources and knowledge to ensure that your goods
            reach their destination safely and on time. Let EASTHAI handle the
            logistics, so you can focus on growing your business.
          </p>
        </div>
      </Container>

      <Container className="aboutSection4">
        <div className="aboutLeft4">
          <img src={about4} alt="" />
        </div>
        <div className="aboutRight4">
          <h1>
            Makes the process of importing and exporting seamless and
            straightforward.
          </h1>
          <p>
          East asia shipping Thailand is a leading provider of air and sea freight services in
            Thailand. With a global network of partners and access to major
            airports and ports around the world, we are able to offer fast and
            efficient shipping options for our clients. Our team of experienced
            professionals is skilled in handling the unique challenges of both
            air and sea cargo, including strict weight and size restrictions,
            customs regulations and time-sensitive delivery needs. We are
            dedicated to providing the highest level of customer service and are
            committed to finding the best solution for your freight needs,
            whether by air or by sea. Whether you are shipping small packages or
            large cargo, EASTHAI has the expertise and resources to get your
            goods to their destination safely and on time.
          </p>
        </div>
      </Container>
      <div className="b2bContainer">
      <B2bSolutions/>
      </div>
      <div className="ourserviceContainer">
      <OurService />
      </div>
      <GetQuotation/>
      <Contact />
      </div>
    </>
  );
};

export default About;
