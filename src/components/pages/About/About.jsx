import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section id='about' className="about">
      <p className='ap'>About Me</p>
      
      <div className="abtcontent">
        <div className="leftside">
        <img className='aboutimg' src='https://i.ibb.co/pBzZmwZJ/me-01-removebg-preview.png' alt='pic' />
        </div>
        <div className="rightside">
          <div className="para">
            <p>I am an experienced Frontend Developer with 1.5 years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="skills">
            <div className="skill"><p>HTML</p><hr style={{width:"50%"}}/></div>
            <div className="skill"><p>CSS</p><hr style={{width:"50%"}}/></div>
            <div className="skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="skill"><p>React js</p><hr style={{width:"70%"}}/></div>
          </div>
        </div>
      </div>
       
       <div className='achievements'>
          <div className="acontent">
            <p className='p1'>1.5+</p>
            <p className='p2'>YEARS OF EXPERIENCE</p>
          </div>
          <hr/>
          <div className="acontent">
          <p className='p1'>4+</p>
            <p className='p2'>PROJECTS COMPLETED</p>
          </div>
          <hr/>
          <div className="acontent">
          <p className='p1'>1+</p>
            <p className='p2'>HAPPY CLIENTS</p>
          </div>
       
       </div>
      
     
    </section>
  );
};

export default About;
