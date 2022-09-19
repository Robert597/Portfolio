import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { useNavigate } from 'react-router';





const Project = ({item, index}:  {item: {
    name: string;
    link: string;
    details: string[]
}, index: number}) => {
  
    const navigate = useNavigate();
  return (
    <>
         <div className='mainProjectContainer'>

<div className='projectDetailsContainer'>
  <h1 data-scroll
  data-scroll-offset="70"
  data-scroll-class="projectUp"><span>
  {item.name}
    </span></h1>
  <div className='projectDetailButtons'>
    <button className='button-17'  
    data-scroll
    data-scroll-offset="70"
    data-scroll-class="showBtn"
    onClick={() => navigate("/details", {state: item})}>View <BsArrowUpRight/></button>
    <button className='button-17'
     data-scroll
     data-scroll-offset="70"
     data-scroll-class="showBtn"><a href={item.link} target="_blank" rel="noreferrer">Live Site</a></button>
  </div>
</div>



<span className='projectHr'
data-scroll 
data-scroll-offset="70"
data-scroll-class="showHr"
style={ index % 2  ?  {right: 0} : {left: 0}}></span>
</div>
    </>
  )
}

export default Project;