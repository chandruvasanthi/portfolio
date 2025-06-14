import React from 'react';
import './FormAndFetch.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const FormAndFetch = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="faf-container">
      <img src="https://i.ibb.co/6c4LWGfF/formandfetch.png" alt="Dmnature Project" className="faf-image"/>
      
      <div className="faf-content">
      <a href="https://formandfetch.vercel.app/" target="_blank" rel="noopener noreferrer"className="faf-link" > View Project  </a>
        <h2 className="faf-title">FormAndFetch Website</h2>  
        <p className="faf-description">
          FormAndFetch is a responsive React-based web application focused on implementing form validation and real-time data fetching from a public API. It provides users with an interactive interface to enter data, validates inputs, and dynamically fetches and displays data using the JSONPlaceholder API.This project is designed to demonstrate front-end best practices including responsive UI, real-time data interaction, and clean component structuring.
        </p>
        <h3 className="faf-subtitle">Tech Stack:</h3>
        <p className="faf-list">HTML, CSS, Javascript, React, JSONPlaceholder API.</p>
  
        <Link to="/" className="bth"> <span> Back to Home</span></Link>
         
        <h3 className="otherprojecth3">Other Projects:</h3>
        <div className="project-list">

         <div className="project-card">
            <Link to="/projects/dmnature" className="project-title">
            <img className="project-image" src="https://i.ibb.co/M5W1r723/DM-naturecure.png" alt="dmnature" /> 
            <p>DM-Nature Cure</p> 
             </Link>
         </div>   

        <div className="project-card">
           <Link to="/projects/movieapp" className="project-title">
           <img className="project-image" src="https://i.ibb.co/wNNgjxyh/movieapp.png" alt="Movie App" />
           <p>Movie App</p>
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
  )
}

export default FormAndFetch;