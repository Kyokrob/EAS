import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import Container from '@mui/material/Container'
import blog2card from '../../images/blog2card.png'
import blog3card from '../../images/blog3card.png'
import blog4card from '../../images/blog4card.png'
import blog5card from '../../images/blog5card.png'
import Contact from "../../components/contact/Contact";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="blogHeader">
        <h1>EASTHAI BLOG</h1>
      </div>
      <Container className="blogContents">
        <h1>New post</h1>
      <div className="blogContent">
        <div className="blogLeft">
        <Link to="/blog/fcl-lcl" className="blogLeft-card">
        <img src={blog5card} alt="FCL LCL คืออะไร" />
          <div className="blogLeft-info">
            <p>September 27, 2023</p>
            <h2>FCL และ LCL ต่างกันอย่างไร การขนส่งสินค้าทางทะเลในโลกธุรกิจที่คุณควรรู้</h2>
          </div>
        </Link>
        </div>
       
       <div className="blogRight">
        <Link to="/blog/animal-feed-customs-clearance" className="blogRight-card">
          <div className="blogRight-img">
          <img src={blog2card} alt="นำเข้าอาหารสัตว์" />
          </div>
          <div className="blogRight-info">
          <p>May 23, 2023</p>
            <h2>นำเข้าอาหารสัตว์ ต้องเริ่มต้นจากอะไร สามารถนำอะได้เข้ามาได้บ้าง</h2>
          </div>
        </Link>
        <Link to="/blog/form-fta" className="blogRight-card">
          <div className="blogRight-img">
          <img src={blog3card} alt="form fta ลดภาษี" />
          </div>
          <div className="blogRight-info">
          <p>August 23, 2023</p>
            <h2>ข้อควรรู้และข้อควรระวังในการใช้สิทธิประโยชน์ทางการค้า และ Form ต่างๆ</h2>
          </div>
        </Link>
        <Link to="/blog/shippingbroker" className="blogRight-card">
          <div className="blogRight-img">
          <img src={blog4card} alt="หน้าที่ชิปปิ้ง" />
          </div>
          <div className="blogRight-info">
          <p>September 27, 2023</p>
            <h2>Shipping (ตัวแทนออกของ) มีหน้าที่อะไร </h2>
          </div>
        </Link>      
       </div>
      </div>
      
      </Container>
      <Contact/>

    </>
  );
};

export default Blog;
