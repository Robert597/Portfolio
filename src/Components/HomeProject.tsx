import React from 'react';
import Project from './Project';
import "../Styles/homeproject.css";
import { BsArrowUpRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HomeProject = () => {
    const navigate = useNavigate();
        const Projects = [
          {
            name: "Moments",
            link: "https://momentss.vercel.app",
            details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive. This project was built using Reactjs for user Interface, Node and expressJs for server, MongoDb for database and use of javascript animation library(GSAP) for animations.",
          }, 
          {
            name: "RobCommerce",
            link: "https://momentss.vercel.app",
            details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive."
          },
          {
            name: "gate",
            link: "https://momentss.vercel.app",
            details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive."
          },
          
        ]
  return (
    <div className='homeProject'>
         <div className="projectTop">
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="4">Featured</h1>
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="3">Projects</h1>
      </div>
      <span className='projectTopHr'
      data-scroll 
      data-scroll-offset="50"
      data-scroll-class="showHr"></span>

      <div className='projectContainer'>
        {
          Projects.map((item, index) => (
       <Project item={item} index={index} key={index}/> 
          ))
        }
      </div>

      <div className="moreproject" 
      data-scroll
      data-scroll-class="moreprojectUp"
      data-scroll-offset="200">
    <p>
      <span>More Projects</span>
    </p>

    <div className="moreProjectIcon" onClick={() => {
                navigate("/projects")
            }}>
                <BsArrowUpRight/>
            </div>
</div>
     </div>
  )
}

export default HomeProject