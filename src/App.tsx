import React, {useRef} from 'react';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import About from './Components/About';
import Home from './Components/Home';


function App() {
  const containerRef = useRef(null)
return (
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
  <main data-scroll-container ref={containerRef}>
   <Home/>
   <About/>
  </main>
</LocomotiveScrollProvider>
)
}

export default App;
