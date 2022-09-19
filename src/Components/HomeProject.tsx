import React from 'react';
import Project from './Project';
import "../Styles/homeproject.css";
import { BsArrowUpRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { data } from '../utils/project';

const HomeProject = () => {
    const navigate = useNavigate();
      
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
          data.slice(0, 3).map((item, index) => (
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