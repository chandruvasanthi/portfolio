import React from "react";
import "./Portfolio.css"; 
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Portfolio = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-container">
      <img src="https://i.ibb.co/cc8N39Ck/Portfolio.png" alt="Portfolio Project" className="portfolio-image"/>
      
      <div className="portfolio-content">
      <Link to="/" className="portfolio-link"> View Project </Link>
        <h2 className="portfolio-title">Portfolio Website</h2>
        
        <p className="portfolio-description">
          Designed and developed a personal portfolio website to showcase projects, skills, and experience in web development. The site features a modern and intuitive UI, smooth navigation, and interactive elements that enhance user engagement. It includes dedicated sections for projects, technical skills, contact details, and a professional resume. The website is fully responsive, ensuring an optimal viewing experience across all devices.
        </p>
        
        <h3 className="portfolio-subtitle">Tech Stack:</h3>
        <p className="portfolio-list">HTML, CSS, JavaScript, React.</p>
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
                        <img className="project-image" src="https://i.ibb.co/M5W1r723/DM-naturecure.png" alt="dmnature" /> 
                        <p>DM-Nature Cure</p> 
                      </Link>
                      </div>
            
                      <div className="project-card">
                     <Link to="/projects/flipkartclone" className="project-title">
                       <img className="project-image" src="https://i.ibb.co/F4WcfFRf/Flipkart-Clone.png" alt="Flipkart Clone" />
                       <p>Flipkart Clone</p> 
                     </Link>
                     </div>
                    </div>
            </div>

    </div>
  );
};

export default Portfolio;
