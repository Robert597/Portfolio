import React from 'react';
import "../Styles/project.css";

const Project = () => {
  const Projects = [
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
            <div className='mainProjectContainer'>

              <div className='projectDetailsContainer'>
                <h1>{item.name}</h1>
                <div className='projectDeatilButtons'>
                  <button>Expand</button>
                  <button><a href={item.link} target="_blank" rel="noreferrer">Live Site</a></button>
                </div>
</div>

<div className='projectLowerPart'>
  <p>{item.details}</p>
  <div className='projectSkills'>
    {item.stacks.map(skill => (
      <span>{skill}</span>
    ))}
  </div>
</div>

<hr/>
            </div>
          ))
        }
      </div>


    </div>
  )
}

export default Project;