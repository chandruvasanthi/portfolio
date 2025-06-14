import React from "react";
import "./Dmnature.css"; 
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Dmnature = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dmn-container">
      <img src="https://i.ibb.co/M5W1r723/DM-naturecure.png" alt="Dmnature Project" className="dmn-image"/>
      
      <div className="dmn-content">
      <a href="https://www.dmnaturecure.com/" target="_blank" rel="noopener noreferrer"className="dmn-link" > View Project </a>
        <h2 className="dmn-title">DM Nature Cure- Naturopathy Website</h2>  
        <p className="dmn-description">
           Developed a responsive website for DM Nature Cure and Wellness Centre, showcasing natural wellness services and products. The website features a clean and user-friendly design, providing detailed information about holistic therapies, yoga practices, and naturopathic remedies. With seamless navigation and a well-structured layout, visitors can easily explore services, learn about health benefits, and access product highlights. The site is optimized for all devices, ensuring a smooth browsing experience and enhancing user engagement.
        </p>
        <h3 className="dmn-subtitle">Tech Stack:</h3>
        <p className="dmn-list">HTML, CSS, Javascript, React.</p>
  
        <Link to="/" className="bth"> <span> Back to Home</span></Link>
         
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
          <Link to="/projects/flipkartclone"  className="project-title">
            <img className="project-image"src="https://i.ibb.co/F4WcfFRf/Flipkart-Clone.png" alt="Flipkart Clone" />
            <p>Flipkart Clone</p>
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

export default Dmnature;
