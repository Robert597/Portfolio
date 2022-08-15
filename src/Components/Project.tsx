import React from 'react';



const Project = ({item}:  {item: {
    name: string;
    link: string;
    details: string;
    stacks: string[];
}}) => {
    const[showDetails, setShowDetails] = React.useState<boolean>(false);
  return (
    <>
         <div className='mainProjectContainer'>

<div className='projectDetailsContainer'>
  <h1 data-scroll
  data-scroll-offset="200"
  data-scroll-repeat="true"
  data-scroll-class="projectUp"><span>
  {item.name}
    </span></h1>
  <div className='projectDetailButtons'>
    <button className='button-17' onClick={() => setShowDetails(prev => !prev)}>{!showDetails ? "Expand" : "Collapse" }</button>
    <button className='button-17'><a href={item.link} target="_blank" rel="noreferrer">Live Site</a></button>
  </div>
</div>

{showDetails && <div className='projectLowerPart'>
<p>{item.details}</p>
<div className='projectSkills'>
{item.stacks.map(skill => (
<span>{skill}</span>
))}
</div>
</div>
}

<span className='projectHr'
data-scroll 
data-scroll-offset="200"
data-scroll-repeat="true"
data-scroll-class="showHr"></span>
</div>
    </>
  )
}

export default Project;