import React from 'react'
import './sidebar.css'
import { Link } from "react-router-dom";
import sideimg from '../../images/air_card_resize.webp'
import sideimg2 from '../../images/slider9_resize.webp'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Sidebar = () => {
  return (
    <>
    <div className="sidebarHeader">
    <h1>Other posts you may like</h1>
    </div>
    <div className='sidebar'>
        <div className="sidebarPost">
            <img src={sideimg} alt="" />
            <h2>
            คุณรู้ไหมว่าตัวแทนขนส่งสินค้าและตัวแทนออกใบขนสินค้าคืออะไร
            </h2>
            <Link to='/' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>
        </div>
         <div className="sidebarPost">
            <img src="https://via.placeholder.com/250x150" alt="" />
            <h2>
            คุณรู้ไหมว่าตัวแทนขนส่งสินค้าและตัวแทนออกใบขนสินค้าคืออะไร
            </h2>
            <Link to='/' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>

        </div>
        <div className="sidebarPost">
            <img src={sideimg2} alt="" />
            <h2>
            คุณรู้ไหมว่าตัวแทนขนส่งสินค้าและตัวแทนออกใบขนสินค้าคืออะไร
            </h2>
            <Link to='/' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>
        </div>
        <div className="sidebarPost">
            <img src="https://via.placeholder.com/250x150" alt="" />
            <h2>
            คุณรู้ไหมว่าตัวแทนขนส่งสินค้าและตัวแทนออกใบขนสินค้าคืออะไร
            </h2>
            <Link to='/' className='sidebarPostBtn'>
            <button>
                Read more
            </button>
            </Link>

        </div>
        <div className="sidebarPost">
            <img src="https://via.placeholder.com/250x150" alt="" />
            <h2>
            คุณรู้ไหมว่าตัวแทนขนส่งสินค้าและตัวแทนออกใบขนสินค้าคืออะไร
            </h2>
            <Link to='/' className='sidebarPostBtn'>
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