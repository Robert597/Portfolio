import React, {useRef, useEffect} from 'react';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
 
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
  
  <div data-scroll-container ref={containerRef} className={loading ? "main nope" : "main"} id="main">
   <Home loading={loading} setLoading={setLoading} />
   <About/>
  </div>
  
</LocomotiveScrollProvider>
</>
)
}

export default App;
