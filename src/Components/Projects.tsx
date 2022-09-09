import React from 'react';
import "../Styles/project.css";
import Project from './Project';

const Projects = () => {
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
      name: "RobCommerc",
      link: "https://momentss.vercel.app",
      details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive."
    },
    {
      name: "RobCommerc",
      link: "https://momentss.vercel.app",
      details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive."
    },
    {
      name: "RobCommerc",
      link: "https://momentss.vercel.app",
      details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive."
    },
  ]
  return (
    <div  className='project' data-scroll-section >

           <span className='projectHr'
data-scroll 
data-scroll-offset="70"
data-scroll-class="showHr"
style={{left: 0}}></span>

      <div className="projectTop">
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="4">PROJECTS(5)</h1>
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="3">2021-2022</h1>
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


    </div>
  )
}

export default Projects;