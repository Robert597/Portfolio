import React from 'react';



const Project = ({item, index}:  {item: {
    name: string;
    link: string;
    details: string
}, index: number}) => {
  
    const[showDetails, setShowDetails] = React.useState<boolean>(false);
  return (
    <>
         <div className='mainProjectContainer'>

<div className='projectDetailsContainer'>
  <h1 data-scroll
  data-scroll-offset="70"
  data-scroll-repeat="true"
  data-scroll-class="projectUp"><span>
  {item.name}
    </span></h1>
  <div className='projectDetailButtons'>
    <button className='button-17' onClick={() => setShowDetails(prev => !prev)} 
    data-scroll
    data-scroll-offset="70"
    data-scroll-repeat="true"
    data-scroll-class="showBtn">{!showDetails ? "Expand" : "Collapse" }</button>
    <button className='button-17'
     data-scroll
     data-scroll-offset="70"
     data-scroll-repeat="true"
     data-scroll-class="showBtn"><a href={item.link} target="_blank" rel="noreferrer">Live Site</a></button>
  </div>
</div>

{showDetails && <div className='projectLowerPart'>
<p>{item.details}</p>
</div>
}

<span className='projectHr'
data-scroll 
data-scroll-offset="70"
data-scroll-repeat="true"
data-scroll-class="showHr"
style={ index % 2  ?  {right: 0} : {left: 0}}></span>
</div>
    </>
  )
}

export default Project;