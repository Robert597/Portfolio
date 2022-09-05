import React, {useEffect, useState} from 'react';
import me from "../Assets/me3.jpg";
import {BsArrowDown} from "react-icons/bs";
import "../Styles/Banner.css";
import {motion, useScroll} from 'framer-motion';
import {useLocomotiveScroll} from 'react-locomotive-scroll';






const Banner = ({loading, shift, play}: { loading: boolean; shift: boolean; play: boolean;}) => {
    const[count, setCount] = useState(0);
  const [line, setLine] = useState(2);

   
    useEffect(() => {
        if(!loading) {
            const text = document.getElementById("circular") as HTMLElement;
            text.innerHTML = text.innerText.replace(/\S/g, "<span class='rolls'>$&</span>");
            const ele = document.querySelectorAll('.rolls') as any;
            for(var i=0; i < ele.length; i++){
                ele[i].style.transform= "rotate(" + i * 15
                 + "deg)";
            }
        }
    }, [loading]);

    useEffect(() => {
  
        const  introCount = setInterval(() => {
            if(count >= 100){
           clearInterval(introCount);
            }else{
                setCount(prev => prev + 10);
            }
        }, 120);

        return () => clearInterval(introCount);
    }, [count]);
    
      const {scroll} = useLocomotiveScroll();

    useEffect(() => {
        scroll?.on('scroll', (args: any) => {
        setLine(2 + (args.scroll.y / 100));
        })
    }, [scroll]);
  return (
    <div className={`bannerContainer ${play && 'animateMarquee'}`}>
        <div className='creative' 
       data-scroll>
            <h1 data-scroll> <span data-scroll
           
            data-scroll-direction="horizontal"
            data-scroll-speed="7">SOFT</span>
            
            <span className='dash' style={{
                transform: `scale(${line}, 1)`
            }}>-</span><span data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-7">WARE</span></h1>
        </div>

        <div className='developer'
       >
       <h1>Developer</h1>
        </div>
        
           
        

      
{!loading &&
        <motion.div className='circle'>
       <BsArrowDown className='arrowicon'/>
        
        <h2 id="circular">
            Scroll-down-Scroll-down.
        </h2>
        </motion.div>
}

{
    !loading && (
        <div className="focus">
            <h1>
                <p>Focus:</p>
                <span></span>
            </h1>
             <p>
                <span className="numbering">01.</span> <span>Frontend</span>
             </p>
             <p>
             <span className="numbering">02.</span>  <span>Backend</span>
             </p>
             <p>
             <span className="numbering">03.</span>  <span>API Design</span>
             </p>
        </div>
    )
}       


{loading && (
    <div className="introLoader">
        <p className='text'>Loading...</p>
        <p className='count'>{count}%</p>
    </div>
)}
    </div>
  )
}


export default Banner;