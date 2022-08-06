import React, {useRef} from 'react';
import {LocomotiveScrollProvider} from "react-locomotive-scroll";
import About from './Components/About';
import Home from './Components/Home';
import {AnimatePresence} from 'framer-motion';


function App() {
  const containerRef = useRef(null);
  const [loading, setLoading] = React.useState(true);
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
  
  <div data-scroll-container ref={containerRef} className="main">
   <Home loading={loading} setLoading={setLoading}/>
   <About/>
  </div>
  
</LocomotiveScrollProvider>
)
}

export default App;
