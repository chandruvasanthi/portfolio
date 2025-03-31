import React from "react";
import { useNavigate } from "react-router-dom";
import "./projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const ProjectData = [
    {
      p_no: 1,
      p_name: "dmnaturecure",
      p_img: "https://i.ibb.co/M5W1r723/DM-naturecure.png",
      p_url: "/projects/dmnature", 
    },
    {
      p_no: 2,
      p_name: "portfolio",
      p_img: "https://i.ibb.co/cc8N39Ck/Portfolio.png",
      p_url: "/projects/portfolio", 
    },
    {
      p_no: 3,
      p_name: "swiggyclone",
      p_img: "https://i.ibb.co/20H5MMGR/Swiggy-Clone.png",
      p_url: "/projects/swiggyclone",
    },
    {
      p_no: 4,
      p_name: "flipkartclone",
      p_img: "https://i.ibb.co/F4WcfFRf/Flipkart-Clone.png",
      p_url: "/projects/flipkartclone",
    },
  ];

  return (
    <div id="project" className="project">
      <p className="ptp">My Latest Work</p>
      <div className="projectcontainer">
        {ProjectData.map((work, index) => (
          <div key={index} className="projectitem">
            <img
              className="projectimg" src={work.p_img} alt={work.p_name} onClick={() => navigate(work.p_url)}  />               
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
