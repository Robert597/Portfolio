import React, {useRef, useEffect} from 'react';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
//@ts-ignore 
import LocomotiveScroll from 'locomotive-scroll';

function App() {
 const scroll = new LocomotiveScroll();
 //@ts-ignore 
 scroll.on('scroll', ({limit, scroll}) => {
 if(scroll.y > 25){
  //@ts-ignore
  document.querySelector(".NavbarContainer").style.backdropFilter = "blur(10px)";
 }
 })
  const containerRef = useRef(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    //SETTING DOCUMENT HEIGHT ON LOAD
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  })

 
  

return (
  <>
  <Navbar loading={loading}/>
<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
     
    ]
  }
  containerRef={containerRef}
>
  
  <div data-scroll-container ref={containerRef} className="main" id="main">
   <Home loading={loading} setLoading={setLoading} />
   <About/>
  </div>
  
</LocomotiveScrollProvider>
</>
)
}

export default App;
