import React, {useEffect, useState} from 'react';
import {BsArrowDown} from "react-icons/bs";
import "../Styles/Banner.css";
import {motion} from 'framer-motion';
import {useLocomotiveScroll} from 'react-locomotive-scroll';






const Banner = ({loading, width}: { loading: boolean; width: Number;}) => {

  const [line, setLine] = useState(2);

  useEffect(() => {
   window.addEventListener("load", () => {
    setTimeout(() => {
        const text = document.getElementById("circular") as HTMLElement;
    text.innerHTML = text.innerText.replace(/\S/g, "<span class='rolls'>$&</span>");
    const ele = document.querySelectorAll('.rolls') as any;
    for(var i=0; i < ele.length; i++){
        ele[i].style.transform= "rotate(" + i * 15
         + "deg)";
    }
    }, 1000)
   })
    
});

  const lineParentVariant = {
    animate: {
        transition: {
            staggerChildren: .3,
        }
    }
}
  const lineParentVariant3 = {
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 1.6
        }
    }
}
  const lineParentVariant2 = {
    animate: {
        transition: {
            staggerChildren: .3,
        }
    }
}

  const spanParentVariant = {
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 2
        }
    }
}

const lineVariant = {
    initial: {
        y: "120%"
    },
    animate: {
        y: 0,
        transition: {
            duration: .7,
            ease: "easeInOut"
        }
    }
}
   


    
      const {scroll} = useLocomotiveScroll();

    useEffect(() => {
        scroll?.on('scroll', (args: any) => {
        setLine(2 + (args.scroll.y / 100));
        })
    }, [scroll]);
  return (
    <div className="bannerContainer">
        <div className="mobileCreative">
            <motion.h1
            initial={{
                y: "100%"
            }}
            animate={{
                y: 0,
                transition: {
                    duration: 1,
                    delay: .5,
                    ease: "easeIn"
                }
            }}>
                <span>SOFT</span>
                <br/>
                <span>&#8212;</span> <span>WARE</span>
                <br/>
                 <span>DEVELOPER</span>
            </motion.h1>
        </div>
        <div className='creative' 
       data-scroll>
            <h1 data-scroll> <motion.span data-scroll
           data-scroll-direction="horizontal"
            data-scroll-speed="3"
            variants={lineParentVariant}
            initial = 'initial'
            animate='animate'>
                <motion.span 
                variants={lineVariant}>S</motion.span>
                <motion.span variants={lineVariant}>O</motion.span>
                <motion.span variants={lineVariant}>F</motion.span>
                <motion.span variants={lineVariant}>T</motion.span>
            </motion.span>
            
            <span className='dash' style={{
                transform: `scale(${line}, 1)`
            }}>-</span><motion.span data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-3"
            variants={lineParentVariant3}
            initial = 'initial'
            animate='animate'>
                 <motion.span variants={lineVariant}>W</motion.span>
                <motion.span variants={lineVariant}>A</motion.span>
                <motion.span variants={lineVariant}>R</motion.span>
                <motion.span variants={lineVariant}>E</motion.span>
            </motion.span></h1>
        </div>
<div className='lower-bottom'>
        <div className='developer'
       >
       <motion.h1
         variants={lineParentVariant2}
         initial = 'initial'
         animate='animate'>
                <motion.span variants={lineVariant}>D</motion.span>
                <motion.span variants={lineVariant}>E</motion.span>
                <motion.span variants={lineVariant}>V</motion.span>
                <motion.span variants={lineVariant}>E</motion.span>
                <motion.span variants={lineVariant}>L</motion.span>
                <motion.span variants={lineVariant}>O</motion.span>
                <motion.span variants={lineVariant}>P</motion.span>
                <motion.span variants={lineVariant}>E</motion.span>
                <motion.span variants={lineVariant}>R</motion.span>
                
                </motion.h1>
       </div>
       <motion.div className="focus"
       variants={spanParentVariant}
       initial='initial'
       animate='animate'>
            <motion.h1>
                <motion.p variants={lineVariant}>Focus:</motion.p>
                <span></span>
            </motion.h1>
             <motion.p>
                <span className="numbering">01.</span> <motion.span variants={lineVariant}>Frontend</motion.span>
             </motion.p>
             <motion.p>
             <span className="numbering">02.</span>  <motion.span variants={lineVariant}>Backend</motion.span>
             </motion.p>
             <motion.p>
             <span className="numbering">03.</span>  <motion.span variants={lineVariant}>API Design</motion.span>
             </motion.p>
        </motion.div>
        </div>
        
           
        

      

        <motion.div className='circle'
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1,
            transition: {
                duration: 1,
                delay: 3,
                ease: "circIn"
            }
        }}>
       <BsArrowDown className='arrowicon'/>
        
        <h2 id="circular">
            Scroll-down-Scroll-down.
        </h2>
        </motion.div>





    </div>
  )
}


export default Banner;