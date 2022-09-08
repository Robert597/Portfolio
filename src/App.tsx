import React, {useRef, useEffect} from 'react';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import "./Styles/locomotive.css";
import gsap from "gsap";
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
 
  const containerRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);

useEffect(() => {
  window.addEventListener("load", ()=> {
    gsap.to("body", {css: {
      display: "block"
    }})
  })
})

  useEffect(() => {
    //SETTING DOCUMENT HEIGHT ON LOAD
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    //@ts-ignore
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      setWidth(window.innerWidth);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    })
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
   <Home loading={loading} setLoading={setLoading} width={width}/>
   <About/>
   <Projects/>
   <Contact/>

  </div>
  
</LocomotiveScrollProvider>
</>
)
}

export default App;
