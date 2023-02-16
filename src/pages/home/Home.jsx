import React from 'react'
import './home.css'
import Service from '../../components/service/Service'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'



import Button from '@mui/material/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RecommendIcon from '@mui/icons-material/Recommend';
import GppGoodIcon from '@mui/icons-material/GppGood';


import Box from '@mui/material/Box';
import Form from '../../components/form/Form'

import { useEffect } from "react";
import eas03 from '../../images/eas-03.png'
import eas04 from '../../images/eas-04.png'
import eas05 from '../../images/eas-05.png'
import eas01 from '../../images/express1.png'

import video11 from '../../images/eas-video11.mp4'
import thumbnail from '../../images/easlogo-resize.jpg'

import { Helmet } from "react-helmet";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({duration:2000});
  },[]);


  
  return (
    
    <>   
      <Helmet>
        <title>EASTHAI - Homepage</title>
        </Helmet>     
        <div className="header">
          <img src="https://cdn.pixabay.com/photo/2021/03/28/16/22/port-6131793_1280.jpg" alt="ชิปปิ้ง" />
            <div className="headerText">
            <h1>EASTHAI</h1>
              <h3>EST. 1996</h3>
            <p>One stop service for import and exporters</p>
            <div className="headerBtn">
            <Button
            to='/about' component={Link}
            sx={{
              padding: "12px 24px",
              background: "#e6af4b",
              borderRadius: "10px",
              color: "white",
              marginTop: "2rem",
            }}
            >Discover EAS</Button>
            <Button 
            to='/quotation' 
            component={Link}
            sx={{
              padding: "12px 24px",
              background: "transparent",
              border: "1px solid #e6af4b",
              borderRadius: "10px",
              color: "#e6af4b",
              marginTop: "2rem",
            }}
            >Get Quotation</Button>
            </div>


            <a aria-label="scrolldown" id="scroll-btn" href='#section-2'>.</a>
            </div>

            

        </div>

        <div className="contactSection" id="section-2">
          <h1>บริการแก้ใขปัญหา สินค้า ภาษีนำเข้า ทุกประเภท ติดปัญหาใบอนุญาต อย. มอก. กสทช. สมอ.</h1>
          <Button
            href="tel:0867780808"
           >
              ติดต่อเจ้าหน้าที่
            </Button>
        </div>
        



        <div className="about1">
        <div className="about1Text">
            <h1>ตัวแทนของผู้ส่งออกและผู้นำเข้าในการจัดส่งสินค้าระหว่างประเทศ</h1>
          </div>

          <div className="about1Cards">

          <div className="about1Card" data-aos='slide-up'> 
            <img src={eas04} alt="ภาษีนำเข้า" />
              <div className="about1CardText">
                <h1>
                EASTHAI Express service
                 </h1>
                <p>เมื่อนำเข้าสินค้าจากต่างประเทศ ติดขัดปัญหาการนำเข้าต่างๆ เช่น เอกสารผิด ภาษี ไปรษณีย์, ท่าเรือ, DHL, FEDEX, UPS, TNT เรายินดีให้บริการช่วยเหลือ
                </p>
                <Button 
            sx={{
              padding: "4px",
              background: "transparent",
              border: "1px solid #ffffff",
              borderRadius: "10px",
              color: "white"
            }} className="contactSectionBtn"
            to='/courier'
            component={Link}
            >
              <ArrowForwardIosIcon/>
            </Button>
                
              </div>             
            </div>

            <div className="about1Card" data-aos='slide-up'>
              <img src={eas03} alt="ชิปปิ้ง" />
              <div className="about1CardText">
                <h1>บริการงาน Freight Forwarder</h1>
                <p>การนำเข้าส่งออกนั้นมีขั้นตอนและงานเอกสารมากมาย หากคุณมีทีมงานมืออาชีพช่วยประสานงาน คุณจะสามารถลดได้ทั้งต้นทุนและเวลาได้อย่างมากมาย
                </p>
                <Button 
            sx={{
              padding: "4px",
              background: "transparent",
              border: "1px solid #ffffff",
              borderRadius: "10px",
              color: "white"
            }} className="contactSectionBtn"
            to='/import-export'
            component={Link}
            >
              <ArrowForwardIosIcon/>
            </Button>
                
              </div>
            </div>


            <div className="about1Card" data-aos='slide-up'>
            <img src={eas05} alt="Shipping" />
              <div className="about1CardText">
                <h1>บริการงาน Shipping</h1>
                <p>Custom clearance 
                คือการเตรียมงานเอกสาร เพื่อสำแดงภาษีให้กับกรมศุลกากร เราเป็นตัวแทนในการเดินพิธีการศุลกากรและเคลียร์สินค้าทั้งขาออกและขาเข้าประเทศไทย
                </p>
                <Button 
            sx={{
              padding: "4px",
              background: "transparent",
              border: "1px solid #ffffff",
              borderRadius: "10px",
              color: "white"
            }} className="contactSectionBtn"
            to='/customclearance'
            component={Link}
            >
              <ArrowForwardIosIcon/>
            </Button>
                
              </div>
                           
            </div>


           

        </div>

        <div className="section1">
          <div className="left">
            <video
      autoPlay
      playsInline
      loop
      muted
      style={{
        position: "relative",
        width: "768px",
        height: "450px",
        objectFit: "cover",
        zIndex: "1"
      }}
      >
        <source src={video11} type="video/mp4" poster={thumbnail}/>
        Your browser does not support the video tag.
      </video>
          </div>
          <div className="rightAboutHome">
            <h3 data-aos='slide-up'>Setting the Reliable and Efficient Standard for Freight Forwarding Excellence</h3>

            <Button 
            sx={{
              color: "white",
              textAlign: "center",
              boxShadow: 10,
              background: "#e6af4b"
            }} to='/about'
            component={Link}
            data-aos='slide-up'
            >
              About us
            </Button>
          </div>
        </div>

        <div className="section11">
          <div className="left11">
            <img src={eas01} alt="ภาษีนำเข้า" />
          </div>
          <div className="rightAboutHome">
            <h3 data-aos='slide-up'>
            สั่งของต่างประเทศติดขัดปัญหาการนำเข้าสินค้า เราช่วยคุณได้ไม่มีขั้นต่ำ
            </h3>
            <Button 
            sx={{
              color: "white",
              textAlign: "center",
              boxShadow: 10,
              background: "#e6af4b",
            }} to='/courier'
            component={Link}
            data-aos='slide-up'
            >
              Express Service
            </Button>
          </div>
        </div>


           {/* Section3 */}
                <div className="section3">
        <Box className='boxCardHome' sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: "100%"
        }}>
        <div className='cardHome' data-aos='slide-up'>
          <div className="cardTop">
          <h1>25+</h1>
          </div>
          <div className='cardContent'>
            <h3>
            Years experience
            </h3>
            <p>ขนส่งชัดเจนมีมาตราฐาน ให้คำแนะนำผ่านทีมงานมืออาชีพ</p>
          </div>
        </div>

        <div className='cardHome' data-aos='slide-up'>
          <div className="cardTop">
          <div className="cardTopIcon">
          <RecommendIcon fontSize="48px"/>
          </div>
          </div>
          <div className='cardContent'>
            <h3>
            Efficiency
            </h3>
            <p>
            จัดส่งสินค้าอย่างมีประสิทภาพรวดเร็วและปลอยภัย
            </p>
          </div>
        </div>

        <div className='cardHome' data-aos='slide-up'>
          <div className="cardTop">
            <GppGoodIcon fontSize="48px"/>
          </div>
          <div className='cardContent'>
            <h3>
            Reliable
            </h3>
            <p>
            มีความชำนาญเป็นพิเศษในกลุ่มสินค้า Beauty, Food, Electronic, Medicine
            </p>
          </div>
        </div>
        </Box>
        </div>

     

</div>



      


        {/* <Container className="section2" display='flex'>
          <div className="section2Header">
          <h1>Talk about import/export in Thailand, What is trendy in 2023 !</h1>
          </div>
          <div className="section2BoxContainer">


          <div className="section2Box">
          <div className="top2">
            <img src={easblog3} alt="" />
          </div>
          <div className="btm2">
          <h1>Articles</h1>
            <h3>อากรขาเข้า ภาษีสรรพสามิต ภาษีเพื่อมหาดไทย ภาษีมูลค่าเพิ่ม สิ่งที่ควรรู้ก่อนนำเข้าสินค้าจากต่างประเทศ
          </h3>
            <Button sx={{
              color: "black"
            }}
            to='/customclearance'
            component={Link}>
              อ่านเพิ่มเติม
            </Button>
          </div>
          </div>

          <div className="section2Box">
          <div className="top2">
            <img src={easblog1} />
          </div>
          <div className="btm2">
            <h1>Tips</h1>
            <h3> Fright Forwarder กับ Shipping ต่างกันอย่างไรทำความรู้จักก่อนเริ่มต้นนำเข้าส่งออกกับกับธุรกิจของคุณ</h3>
            <Button 
            sx={{
              color: "black"
            }}
            to='/courier'
            component={Link}
            >
              อ่านเพิ่มเติม
            </Button>
          </div>
          </div>

          

          <div className="section2Box">
          <div className="top2">
            <img src={easblog2} alt="" />
          </div>
          <div className="btm2">
            <h1>Tips</h1>
            <h3> Fright Forwarder กับ Shipping ต่างกันอย่างไรทำความรู้จักก่อนเริ่มต้นนำเข้าส่งออกกับกับธุรกิจของคุณ</h3>
            <Button 
            sx={{
              color: "black"
            }}
            to='/courier'
            component={Link}
            >
              อ่านเพิ่มเติม
            </Button>
          </div>
          </div>



          </div>   

        </Container> */}
                   {/* Service component */}
         <Service/>

        



        <div className="homeForm">
            <div className="homeFormRight">
          <Form/>
            </div>


        </div>



        

    </>
  )
}

export default Home