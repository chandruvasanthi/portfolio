import React from "react";
import "./FlipkartClone.css"; 
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const FlipkartClone = () => {
  
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

  return (
    <div className="flipkart-container">
      <img src="https://i.ibb.co/F4WcfFRf/Flipkart-Clone.png" alt="Flipkart Clone Project" className="flipkart-image"/>
      
      <div className="flipkart-content">
        <a href="https://github.com/chandruvasanthi" target="_blank" rel="noopener noreferrer" className="flipkart-link"> View Project </a>
        <h2 className="flipkart-title">Flipkart Clone - E-Commerce Website</h2>
        
        <p className="flipkart-description">
        Designed and developed a static, e-commerce website inspired by Flipkart,
        offering a seamless shopping experience. The platform features a well-structured layout
        with product listings, categorized sections, and smooth browsing. With a clean and modern design,
        it provides a visually appealing and organized interface.
        </p>
        
        <h3 className="flipkart-subtitle">Tech Stack:</h3>
        <p className="flipkart-list">HTML, CSS, Javascript, Bootstrap.</p>
        <Link to="/" className="btn"> <span> Back to Home </span></Link>
       <h3 className="otherprojecth3">Other Projects:</h3>
              <div className="project-list">

                <div className="project-card">
                  <Link to="/projects/movieapp" className="project-title">
                    <img className="project-image" src="https://i.ibb.co/wNNgjxyh/movieapp.png" alt="Movie App" />
                    <p>Movie App</p>
                  </Link>
                </div>

                <div className="project-card">
                  <Link to="/projects/formandfetch" className="project-title">
                    <img className="project-image" src="https://i.ibb.co/6c4LWGfF/formandfetch.png" alt="Form And Fetch" />
                    <p>FormAndFetch</p>
                  </Link>
                </div>
              <div className="project-card">
                <Link to="/projects/swiggyclone" className="project-title">
                  <img className="project-image" src="https://i.ibb.co/20H5MMGR/Swiggy-Clone.png" alt="Swiggy Clone" />
                  <p>Swiggy Clone</p>
                </Link>
                </div>
                
                <div className="project-card">
                <Link to="/projects/dmnature" className="project-title">
                  <img className="project-image"src="https://i.ibb.co/M5W1r723/DM-naturecure.png" alt="dmnature" />
                  <p>DM-Nature Cure</p> 
                </Link>
                </div>

                <div className="project-card">
                <Link to="/projects/portfolio" className="project-title">
                  <img className="project-image" src="https://i.ibb.co/cc8N39Ck/Portfolio.png" alt="Portfolio" />
                  <p>Portfolio website</p>
                </Link>
                </div>
      
              </div>
            </div>

    </div>
  );
};

export default FlipkartClone;