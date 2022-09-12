import React, { useEffect } from 'react';
import gsap from 'gsap';


const Transition = () => {
    useEffect(() => {
        gsap.to(".transition-effect",  {
                height: 0,
                duration: 1,
                ease: "power4.inOut"
            }
            );
            gsap.to(".transition-effect-1", {
                height: 0,
                duration: 1,
                ease: "power4.inOut"
            }
            );

    }, [])
    
  return (
    <div className='transition'
    >
        <div className="transition-effect" >
        </div>
        <div className="transition-effect-1" 
        >
        </div>
    </div>
  )
}

export default Transition