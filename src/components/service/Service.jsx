import React from 'react'
import './service.css'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <Container className='serviceContainer'>
      <h1 className='serviceTitle'>Checkout our service</h1>
      <p className='serviceTitleText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, animi?</p>
    <div className='service'>
    <div className='ourservice'>
          <img src="https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" className='serviceList'/>
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Air freight</h3>
              <p>บริการขนส่งทางอากาศ นำเข้าสินค้าจากทุกประเทศทั่วโลก และส่งสินค้าออกไปยังทุกสนามบินทั่วโลก</p>
              <Button className='overlayBtn'><Link to='/airfreight'>Readmore</Link></Button>

            </div>
          </div>
    </div>
    <div className='ourservice'>
          <img src="https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" className='serviceList'/>
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Sea freight</h3>
              <p>บริการขนส่งทางทะเล นำเข้าสินค้าจากทุกพอร์ตทั่วโลก และส่งสินค้าออกไปยังทุกประเทศทั่วโลก</p>
              <Button className='overlayBtn'><Link to='/seafreight'>Readmore</Link></Button>

            </div>
          </div>
    </div>
    <div className='ourservice'>
          <img src="https://images.unsplash.com/photo-1532635042-a6f6ad4745f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" className='serviceList'/>
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Import/Export</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti.</p>
              <Button className='overlayBtn'><Link to='/about'>Readmore</Link></Button>
              
            </div>
          </div>
    </div>
    <div className='ourservice'>
          <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className='serviceList'/>
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Custom clearance</h3>
              <p>ดำเนินพิธีการศุลกากร ทั้งขาเข้า และขาออก ตรวจสอบและช่วยเหลือทางด้านภาษี</p>
              <Button className='overlayBtn'><Link to='/customclearance'>Readmore</Link></Button>

            </div>
          </div>
    </div>
    <div className='ourservice'>
          <img src="https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='serviceList'/>
          <div className="serviceOverlay">
            <div className="serviceText">
              <h3>Business consultant</h3>
              <p>บริการครบวงจร โดนคำแนะนำจากผู้เชี่ยวชาญ</p>
              <Button className='overlayBtn'>Readmore</Button>

            </div>
          </div>
    </div>
    </div>
    </Container>
  )
}

export default Service