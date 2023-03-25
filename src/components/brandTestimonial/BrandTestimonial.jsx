import React, { useState } from 'react';
import Slider from 'react-slick';
import './brandTestimonial.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import partnerLogo from '../../images/partnerlogo1.png'
import testlogo from '../../images/E_resize.webp'
import partnerlogo2 from '../../images/partnerlogo2.png'

const BrandTestimonial = () => {
    const [clients] = useState([
        {
            id: 1,
            logo: partnerLogo,
          },
          {
            id: 2,
            logo: partnerlogo2,
          },
          {
            id: 3,
            logo: testlogo,
          },
          {
            id: 4,
            logo: testlogo,
          },
          {
            id: 5,
            logo: testlogo,
          }
    ]);
  
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    };
  
    return (
      <div className="brand-testimonial">
        <h2>Trusted us</h2>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} className="client">
              <img src={client.logo} alt={`Client ${client.id}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default BrandTestimonial;
  