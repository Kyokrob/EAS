import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./blog.css";
import Container from '@mui/material/Container'
import blog1card from '../../images/blog1card.png'
import blog2card from '../../images/blog2card.png'
import Contact2 from "../../components/contact2/Contact2";
import QuestionForm from '../../components/questionForm/QuestionForm'

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
        <Link to="/blog/shipping-freight" className="blogLeft-card">
        <img src={blog1card} alt="Blog post" />
          <div className="blogLeft-info">
            <p>March 16, 2023</p>
            <h2>Freight forwarder ต่างกัน shipping อย่างไร ?</h2>
            <h4>สำหรับสองบทบาทนี้มักถูกสับสนกันบ่อยครั้ง ตัวแทนขนส่งสินค้า (Freight Forwarders) และ ตัวแทนออกใบขนสินค้า (Shipping / Customs Clearance Agents) หน้าที่ของพวกเขาคืออะไร</h4>
          </div>
        </Link>
        </div>
       
       <div className="blogRight">
       <Link to="/blog/shipping-freight" className="blogRight-card">
       <div className="blogRight-img">
          <img src="https://via.placeholder.com/210x210" alt="Blog post" />
          </div>          <div className="blogRight-info">
          <p>March 16, 2023</p>
            <h2>นำเข้าอาหารสัตว์ ต้องเริ่มต้นจากอะไร สามารถนำอะได้เข้ามาได้บ้าง</h2>
          </div>
        </Link>
        <Link to="/blog/ภาษีศุลกากรและภาษีนำเข้า" className="blogRight-card">
          <div className="blogRight-img">
          <img src={blog2card} alt="Blog post" />
          </div>
          <div className="blogRight-info">
          <p>March 16, 2023</p>
            <h2>รู้จะขั้นตอนการนำเข้าสินค้า และวิธีการคำนวนค่าภาษีศุลกากร</h2>
          </div>
        </Link>
        <Link to='/blog/freight-shipping' className="blogRight-card">
        <div className="blogRight-img">
          <img src="https://via.placeholder.com/250x250" alt="Blog post" />
          </div>          <div className="blogRight-info">
          <p>March 16, 2023</p>
            <h2>นำเข้าสินค้าจากต่างประเทศคำนวนภาษีอย่างไร วิธีการเช็คพิกัดศุลกากร</h2>
          </div>
        </Link>
       </div>
      </div>
      </Container>


      <Container className="blogContents">
        <h1>Previous post </h1>
        <div className="blogContent2">
        <Link to='/blog/freight-shipping' className="blog2-card">
        <div className="blog2-img">
          <img src="https://via.placeholder.com/500x450" alt="Blog post" />
          </div>          <div className="blog2-info">
          <p>March 16, 2023</p>
            <h2>นำเข้าสินค้าจากต่างประเทศคำนวนภาษีอย่างไร วิธีการเช็คพิกัดศุลกากร</h2>
          </div>
        </Link>
        <Link to='/blog/freight-shipping' className="blog2-card">
        <div className="blog2-img">
          <img src="https://via.placeholder.com/500x450" alt="Blog post" />
          </div>          <div className="blog2-info">
          <p>March 16, 2023</p>
            <h2>นำเข้าสินค้าจากต่างประเทศคำนวนภาษีอย่างไร วิธีการเช็คพิกัดศุลกากร</h2>
          </div>
        </Link>
        <Link to='/blog/freight-shipping' className="blog2-card">
        <div className="blog2-img">
          <img src={blog1card} alt="Blog post" />
          </div>          <div className="blog2-info">
          <p>March 16, 2023</p>
            <h2>นำเข้าสินค้าจากต่างประเทศคำนวนภาษีอย่างไร วิธีการเช็คพิกัดศุลกากร</h2>
          </div>
        </Link>
        <Link to='/blog/freight-shipping' className="blog2-card">
        <div className="blog2-img">
          <img src="https://via.placeholder.com/500x450" alt="Blog post" />
          </div>          <div className="blog2-info">
          <p>March 16, 2023</p>
            <h2>นำเข้าสินค้าจากต่างประเทศคำนวนภาษีอย่างไร วิธีการเช็คพิกัดศุลกากร</h2>
          </div>
        </Link>
        <Link to='/blog/freight-shipping' className="blog2-card">
        <div className="blog2-img">
          <img src="https://via.placeholder.com/500x450" alt="Blog post" />
          </div>          <div className="blog2-info">
          <p>March 16, 2023</p>
            <h2>นำเข้าสินค้าจากต่างประเทศคำนวนภาษีอย่างไร วิธีการเช็คพิกัดศุลกากร</h2>
          </div>
        </Link>
        
        </div>
      </Container>
      <Contact2/>
      <QuestionForm/>

    </>
  );
};

export default Blog;
