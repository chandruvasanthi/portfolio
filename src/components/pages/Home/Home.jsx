import React from 'react';
import "./Home.css";
import { motion } from 'framer-motion';

const Home = () => {

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight - window.innerHeight - 100, 
      behavior: "smooth" 
    });
  };

  return (
    <div id='home' className="hero" >
       <img className='heroimg' src='https://i.ibb.co/pBzZmwZJ/me-01-removebg-preview.png' alt='pic' />
       <motion.h1 className='heroh1' 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        
       ><span className='span'>I'm Chandru,</span> frontend developer based in India.</motion.h1>
       <p className='herop'>I am a frontend developer from Tamil Nadu, India, with 1.5 years of experience at Foisys.</p>
       <div className='herobtns'>
       <button className='cwmbtn' onClick={scrollToBottom}>Connect with me</button>
         <button className='mrbtn'   onClick={() => window.open('/Chandru-Resume..pdf', '_blank')}>My resume</button>
       </div>
   
    </div>
  );
};

export default Home;

