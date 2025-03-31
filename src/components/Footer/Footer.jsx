import React from 'react';
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
  
    <footer>
      <div className="footerdiv">
      <hr className='fhr'/>
      <div className="footer">
      <p className='footerleft'>© 2025 Chandru | All Rights Reserved</p>
      <div className="footerright">
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
        
        <div className='upicondiv' onClick={scrollToTop}>
           <FaArrowUp className='upicon' />
        </div> 
      </div>  
      </div>
      </div>     
    </footer>
   
  );
};

export default Footer;
