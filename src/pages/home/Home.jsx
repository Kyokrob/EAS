import React from 'react'
import './home.css'
import Service from '../../components/service/Service'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Contact from '../../components/contact/Contact'
import Form from '../../components/form/Form'

import { useEffect } from "react";
import video from '../../images/eas-video.mp4'



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <>        
        {/* Header */}
        <div className="header">
        <video
      autoPlay
      playsinline 
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
        zIndex: "1"
      }}
      >
        <source src={video} type="video/mp4"/>
      </video>

            <div className="headerText">
            <h1>Leading digital freight network !</h1>
            <p>Your business is evolving and so should your logistics. Go beyond freight forwarding service. Supercharged with visionary technology that takes your supply chain operations into the future.</p>
            <Button sx={{
              padding: "12px 24px",
              background: "#e6af4b",
              borderRadius: "10px",
              color: "white",
              marginTop: "2rem",
            }}>Read more</Button>
            </div>
        </div>

         {/* Section3 */}
         <div className="section3">
          {/* <h1>Our experties </h1> */}

          <Box className='boxCardHome' sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 2
          }}>
          <div className='cardHome'>
            <div className="cardIcon">
            <AccessAlarmIcon className='cardIconIcon'/>
            </div>
            <div className='cardContent'>
              <h3>
              บริการให้คำปรึกษาทุกขั้นตอน
              </h3>
              <p>ไม่ว่าจะเป็นในส่วนของการนำเข้าสินค้า ติดต่อโรงงาน โอนเงิน ต่างๆ เรามีเจ้าหน้าที่ที่เชี่ยวชาญคอยให้บริการด้านข้อมูลการนำเข้าสินค้ากับท่าน</p>
            </div>
          </div>

          <div className='cardHome'>
            <div className="cardIcon">
            <FlightLandIcon className='cardIconIcon'/>
            </div>
            <div className='cardContent'>
              <h3>
              มีเจ้าหน้าที่ดูแล SUPPORT ให้ท่านตลอดเวลา
              </h3>
              <p>
              ท่านสามารถติดต่อเราได้ทุกช่องทาง เช่น line@ website หรือ social media
              </p>
            </div>
          </div>

          <div className='cardHome'>
            <div className="cardIcon"><GppGoodIcon className='cardIconIcon'/>
            </div>
            <div className='cardContent'>
              <h3>
              รวดเร็ว ปลอดภัย โปร่งใส ผ่านตำปรึกษาผ่านผู่เชียวชาญ
              </h3>
              <p>
              ด้วยประสบการณ์นำเข้าสินค้ามายาวนาน เราคือผู้เชี่ยวชาญในการนำเข้าสินค้าจากทั่วโลก พร้อมบริการที่หลากหลายช่วยอำนวยความสะดวกในการนำเข้าสินค้าจากทุกที่ให้คุณในทุกขั้นตอน
              </p>
            </div>
          </div>
          </Box>
          </div>

           {/* Service component */}
        <Service/>


           {/* Section 2 */}
        <Container className="section1">
          <div className="left">
            <img src="https://images.unsplash.com/photo-1592063648619-7e520034f357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" />
          </div>
          <div className="right">
            <h1>Import your shipment today !!</h1>
            <p>บริการการขนส่งทั้งในประเทศ และระหว่างประเทศ ทั้งทางทะเล และทางอากาศ บริการพิธีการศุลกากร ขาเข้า และขาออก (Shipping Clearance) และบริการอื่นๆในด้านLogistics</p>
            <Button 
            sx={{
              padding: "10px",
              background: "#e6af4b",
              borderRadius: "10px",
              color: "white"
            }}>
              Read more
            </Button>
          </div>
        </Container>

        <Container className="section2">
          <div className="left">
            <img src="https://images.unsplash.com/photo-1600633532411-13ed06f7bcc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="" />
          </div>
          <div className="right">
            <h1>นำเข้า-ส่งออกอย่างไร *ให้ถูกกฎหมาย ไร้กังวล </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores laborum iure repellendus aperiam nostrum aliquam quibusdam a nemo est explicabo earum consectetur cumque alias, minus animi, recusandae, magni impedit exercitationem velit iste? Impedit aliquid, odio sint nesciunt nemo incidunt quos?</p>
            <Button sx={{
              padding: "10px",
              background: "#e6af4b",
              borderRadius: "10px",
              color: "white"
            }}>
              Read more
            </Button>
          </div>
        </Container>


        <Container className="homeForm">
            <div className="homeFormLeft">
              <h1>You're One Step Closer to Becoming the Supplier That Always Delivers</h1>
              <p>There's a lot at stake for you when it comes to picking a transportation provider you trust to move your freight. If you make the wrong choice, it can be truly detrimental to your business and your reputation.</p>
              <p>
              Not ready for a quote yet, but still have questions? <a href="" className='homeFormContact'>Contact us now.</a>
              </p>
            </div>
            <div className="homeFormRight">
          <Form/>
            </div>


        </Container>



          <Contact/>

    </>
  )
}

export default Home