import React, {useRef, useEffect} from 'react';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import "./Styles/locomotive.css";
import gsap from "gsap";
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {Route, Routes} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Loader from './Components/Loader';
import ScrollToTop from './Components/scrolltotop';

function App() {
 
  const containerRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
  const [width, setWidth] = React.useState(window.innerWidth);
const {pathname} = useLocation();


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
  <Navbar/>
    <>
<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      },
    
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
     pathname
    ]
  }
  location={pathname}
  //@ts-ignore
  onLocationChange={scroll => scroll.scrollTo(0, {duration: 0, disableLerp: true})}
  containerRef={containerRef}
>

  <div data-scroll-container ref={containerRef} className="main" id="main">
  <Routes>
    <Route  path='/' element={<Home />} />
    <Route  path='/about' element={<About />}/>
    <Route  path='/projects' element={<Projects />}/>
    </Routes>
   <Contact/>
  </div>
 
</LocomotiveScrollProvider>
</>
</>
)
}

export default App;
