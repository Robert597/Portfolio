import React from 'react';
import "../Styles/project.css";
import Project from './Project';
import Transition from './transition';
import {data} from "../utils/project.js";

const Projects = () => {
  
  return (
    <div  className='project' data-scroll-section >
<Transition/>


      <div className="projectTop">
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="4">PROJECTS</h1>
        <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed ="3">2021-2022</h1>
      </div>
      <span className='projectTopHr'
      data-scroll 
      data-scroll-offset="50"
      data-scroll-class="showHr"></span>

      <div className='projectContainer'>
        {
          data.map((item, index) => (
       <Project item={item} index={index} key={index}/> 
          ))
        }
      </div>


    </div>
  )
}

export default Projects;