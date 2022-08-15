import React from 'react';
import "../Styles/project.css";
import Project from './Project';

const Projects = () => {
  const Projects = [
    {
      name: "Moments",
      link: "https://momentss.vercel.app",
      details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive.",
      stacks: ["Reactjs", "Nodejs", "MongoDb", "Firebase"]
    },
    {
      name: "Moments",
      link: "https://momentss.vercel.app",
      details: "A full stack social media application with email and Google Authentication, pagination, search and filtering capabilities, comments and  fully responsive.",
      stacks: ["Reactjs", "Nodejs", "MongoDb", "Firebase"]
    }
  ]
  return (
    <div data-scroll-section className='project'>
      <div className="projectTop">
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="4">PROJECTS(5)</h1>
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="3">2021-2022</h1>
      </div>
      <span className='projectTopHr'
      data-scroll 
      data-scroll-offset="200"
      data-scroll-repeat="true"
      data-scroll-class="showHr"></span>

      <div className='projectContainer'>
        {
          Projects.map(item => (
       <Project item={item}/>
          ))
        }
      </div>


    </div>
  )
}

export default Projects;