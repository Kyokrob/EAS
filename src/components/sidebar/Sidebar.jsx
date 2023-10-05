import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import blog2card from '../../images/blog2card.png'
import blog3card from '../../images/blog3card.png'
import blog4card from '../../images/blog4card.png'
import blog5card from '../../images/blog5card.png'


const Sidebar = () => {
  return (
    <>
    <div className="sidebarHeader">
    <h1>You may also like</h1>
    </div>
    <div className='sidebar'>
        <div className="sidebarPost">
            <img src={blog5card} alt="" />
            <h2>
            Freight forwarder ต่างกัน shipping อย่างไร ? 
            </h2>
            <Link to='/blog/fcl-lcl' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>
        </div>
        <div className="sidebarPost">
            <img src={blog4card} alt="" />
            <h2>
            Shipping (ตัวแทนออกของ) มีหน้าที่อะไร  
            </h2>
            <Link to='/blog/ชิปปิ้ง-ตัวแทนออกของ' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>
        </div>
         <div className="sidebarPost">
            <img src={blog2card} alt="" />
            <h2>
            นำเข้าสินค้าผลิตภัณฑ์อาหารและยาสัตว์
            </h2>
            <Link to='/blog/animal-feed-customs-clearance' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>

        </div>
        <div className="sidebarPost">
            <img src={blog3card} alt="" />
            <h2>
            ข้อควรรู้และข้อควรระวังในการใช้สิทธิประโยชน์ทางการค้า และ Form ต่างๆ
            </h2>
            <Link to='/blog/สิทธิประโยชน์-form-fta' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>

        </div>
        
        
        <div className="sidebarPostAll">
            <h2>
            View all
            </h2>
            <Link to='/blog' className='sidebarPostAllBtn'>
            <button>
                <KeyboardArrowRightIcon sx={{ fontSize: '52px' }} />
            </button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Sidebar