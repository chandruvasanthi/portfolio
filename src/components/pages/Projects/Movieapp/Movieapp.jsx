import React from 'react';
import './Movieapp.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Movieapp = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="mapp-container">
      <img src="https://i.ibb.co/ccZw2n3Z/movieapp.png" alt="Movieapp Project" className="mapp-image"/>
      
      <div className="mapp-content">
      <a href="https://movieapp-list.vercel.app/" target="_blank" rel="noopener noreferrer"className="mapp-link" > View Project  </a>
        <h2 className="mapp-title">MovieApp Website</h2>  
        <p className="mapp-description">
          The Movie App is a responsive front-end web application that allows users to search for movies by title and view detailed information such as release year, genre, poster. It uses the TMDB (The Movie Database) API to fetch real-time movie data and presents it in an intuitive, mobile-friendly layout. This project demonstrates core front-end development skills including API integration, dynamic DOM manipulation, responsive layout design, and clean user interface. 
        </p>
        <h3 className="mapp-subtitle">Tech Stack:</h3>
        <p className="mapp-list">HTML, CSS, JavaScript, React, Bootstrap, and TMDB API.</p>
  
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
  )
}

export default Movieapp;