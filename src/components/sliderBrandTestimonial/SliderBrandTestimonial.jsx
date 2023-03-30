import React from 'react'
import './sliderBrandTestimonial.css'

import partnerlogo1 from '../../images/partnerlogo1.svg'
import partnerlogo2 from '../../images/partnerlogo2.svg'
import easgrey from '../../images/easgrey.svg'
import thumbnailgrey from '../../images/thumbnailgrey.svg'

const SliderBrandTestimonial = () => {


  return (
    <>
            <div className="sliderBrandHeader">
            <h1>As Trusted by</h1>
            </div>
        <div className='sliderBrand'>
            <div className="slideBrand-track">
            <div className="slideBrand">
                <img src={partnerlogo1} alt="shipping freight by east asia shipping" />
            </div>
            <div className="slideBrand">
                <img src={partnerlogo2} alt="shipping freight by east asia shipping" />
            </div>
            <div className="slideBrand">
                <img src={easgrey} alt="shipping freight by east asia shipping" />
            </div>
            <div className="slideBrand">
                <img src={easgrey} alt="shipping freight by east asia shipping" />
            </div>
            <div className="slideBrand">
                <img src={thumbnailgrey} alt="shipping freight by east asia shipping" />
            </div>
            <div className="slideBrand">
                <img src={partnerlogo1} alt="" />
            </div>
            <div className="slideBrand">
                <img src={partnerlogo2} alt="" />
            </div>
            <div className="slideBrand">
                <img src={easgrey} alt="" />
            </div>
            <div className="slideBrand">
                <img src={easgrey} alt="" />
            </div>
            <div className="slideBrand">
                <img src={thumbnailgrey} alt="" />
            </div>
            </div>
        </div>

        </>


  )
}

export default SliderBrandTestimonial