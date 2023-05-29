import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import blog1bar from '../../images/blog1bar.png'
import blog2card from '../../images/blog2card.png'


const Sidebar = () => {
  return (
    <>
    <div className="sidebarHeader">
    <h1>You may also like</h1>
    </div>
    <div className='sidebar'>
        <div className="sidebarPost">
            <img src={blog1bar} alt="" />
            <h2>
            Freight forwarder ต่างกัน shipping อย่างไร ? 
            </h2>
            <Link to='/blog/shipping-freight' className='sidebarPostBtn'>
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