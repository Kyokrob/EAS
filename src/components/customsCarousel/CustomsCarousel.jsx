import React from "react";
import "./customsCarousel.css";
import customs1 from "../../images/customs_1.png";
import customs2 from "../../images/customs_2.png";
import customs3 from "../../images/customs_3.png";
import customs4 from "../../images/customs_4.png";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Carousel } from "@trendyol-js/react-carousel";

const CustomsCarousel = () => {
  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   };

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    rightArrow: (
      <button className="carousel-arrow">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    ),
    leftArrow: (
      <button className="carousel-arrow">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    ),
    swiping: true, // Enable or disable swiping
    swipeOn: ["touch", "mouse"], // Specify events on which swipe action is enabled
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-wrapper">
      <Carousel {...settings}>
        <img src={customs1} alt="นำเข้าสินค้า" />
        <img src={customs2} alt="เคลียร์สินค้า" />
        <img src={customs3} alt="เคลียร์สินค้า" />
        <img src={customs4} alt="เคลียร์สินค้า" />
      </Carousel>
    </div>

  );
};

export default CustomsCarousel;
