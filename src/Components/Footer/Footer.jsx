import React from 'react'
import './Footer.css'
import { assets } from '../../assets /assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

   <div className="footer-content">
    <div className="footer-content-left">
            <img src={assets.logo} alt="" className='logo'/>
            <p>This website was designed and developed by Varun GM, a passionate React JS, Frontend, and MERN Stack Developer from Shivamogga, focused on creating responsive, high-performance web applications with clean design and seamless functionality.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
    </div>
    <div className="footer-content-center">
    <h2>COMPANY</h2>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy-Policy</li>
    </ul>
</div>
    <div className="footer-content-right">
        <h2>Get in Touch</h2>
        <ul>
            <li>+91 7618782564</li>
            <li>mongodbvgm@gmail.com</li>
        </ul>
    </div>
 
   </div>
   <hr />
   <p className="footer-copyright">Copyright 2025 © Varungm.com - All Right Reserved </p>
    </div>
  )
}

export default Footer