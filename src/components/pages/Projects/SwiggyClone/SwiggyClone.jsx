import React from "react";
import "./SwiggyClone.css"; 
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const SwiggyClone = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <div className="swiggy-container">
      <img src="https://i.ibb.co/20H5MMGR/Swiggy-Clone.png" alt="Swiggy Clone Project" className="swiggy-image"/>
      
      <div className="swiggy-content">
        <a href="https://github.com/chandruvasanthi" target="_blank" rel="noopener noreferrer" className="swiggy-link"> View Project </a>
        <h2 className="swiggy-title">Swiggy Clone - Food Delivery Website</h2>
        
        <p className="swiggy-description">
        Designed and developed a static, responsive food delivery app inspired by Swiggy, 
        offering a seamless browsing experience. The platform features well-structured restaurant listings, 
        search filters, and a user-friendly interface. With a clean and modern design,
        it provides an engaging and visually appealing layout, ensuring smooth accessibility 
        and performance across all devices.
        </p>
        
        <h3 className="swiggy-subtitle">Tech Stack:</h3>
        <p className="swiggy-list">HTML, CSS, JavaScript, React.</p>
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
                    <Link to="/projects/portfolio" className="project-title">
                     <img className="project-image" src="https://i.ibb.co/cc8N39Ck/Portfolio.png" alt="Portfolio" />
                     <p>Portfolio website</p>
                    </Link>
                   </div>

                   <div className="project-card">
                      <Link to="/projects/dmnature" className="project-title">
                        <img className="project-image"src="https://i.ibb.co/M5W1r723/DM-naturecure.png" alt="dmnature" /> 
                        <p>DM-Nature Cure</p> 
                      </Link>
                      </div>

                      <div className="project-card">
                     <Link to="/projects/flipkartclone" className="project-title">
                       <img className="project-image"src="https://i.ibb.co/F4WcfFRf/Flipkart-Clone.png" alt="Flipkart Clone" /> 
                       <p>Flipkart Clone</p> 
                     </Link>
                     </div>  
            
                    </div>
            </div>

    </div>
  );
};

export default SwiggyClone;
