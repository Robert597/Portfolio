import React, {useEffect, useState} from 'react';
import me from "../Assets/me3.jpg";
import {BsArrowDown} from "react-icons/bs";
import "../Styles/Banner.css";
import {motion} from 'framer-motion';
import { rollText, floatIn} from '../utils/framerVariants';




const Banner = ({loading, shift, play}: { loading: boolean; shift: boolean; play: boolean;}) => {
    const[count, setCount] = useState(0);

    useEffect(() => {
        if(!loading) {
    const text = document.getElementById("circular") as HTMLElement;
    text.innerHTML = text.innerText.replace(/\S/g, "<span>$&</span>");
    const ele = document.querySelectorAll('span');
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
    
    
  return (
    <div className={`bannerContainer ${play && 'animateMarquee'}`}>
        <div className='creative'>
            <h1 >Creative</h1>
        </div>
        
            <div className='software' >
            <h1>Software</h1>
            <h1>Software</h1>
            <h1>Software</h1>
            <h1>Software</h1>
            </div>
        

        <div className={shift ? 'developer shift' : 'developer'}>
        <div className='me'>
                <img src={me} alt="me"/>
            </div>
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
        
        {!loading &&
        <motion.div className='downContent'>
        <hr/>
        <div className='downcontent'>
        <p>Robert Oluwaseun</p>
            <p>Available for freelance work.</p>
            <p>Portfolio 2021/2022</p>
            </div>
        </motion.div>
}

{loading && (
    <div className="introLoader">
        <p className='text'>Loading...</p>
        <p className='count'>{count}%</p>
    </div>
)}
    </div>
  );
}


export default Banner;