import React, {useEffect, useState} from 'react';
import {BsArrowDown, BsArrowUpRight} from "react-icons/bs";
import "../Styles/Banner.css";
import {motion} from 'framer-motion';
import {useLocomotiveScroll} from 'react-locomotive-scroll';
import {useNavigate, Link} from 'react-router-dom';






const Banner = () => {

const navigate= useNavigate();

  const [line, setLine] = useState(2);

  useEffect(() => {
   const text = document.getElementById("circular") as HTMLElement;
    text.innerHTML = text.innerText.replace(/\S/g, "<span class='rolls'>$&</span>");

    const ele = document.querySelectorAll('.rolls') as any;

    for(var i=0; i < ele.length; i++){
        ele[i].style.transform= "rotate(" + i * 15
         + "deg)";
    };
    
}, []);

  const lineParentVariant = {
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 1.5
        }
    }
}
  const lineParentVariant3 = {
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 3.1
        }
    }
}
  const lineParentVariant2 = {
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 1.5
        }
    }
}

 const blueContentVariant = {
    initial: {
        opacity: 0,
        scaleY: 1.2
    },
    animate: {
        scaleY: 1,
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.6,
            ease: "easeInOut"
        }
    }
 }
const blueContentSpanParent = {
    animate: {
        transition: {
            delayChildren: 2.6,
            staggerChildren: .3
        }
    }
}
 const blueContentSpan = {
    initial: {
        y: "100%"
    },
    animate: {
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
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
            duration: .5,
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


        <div className='bannerTopContainer'>

        <div className='Mobilecreative' 
       data-scroll>
            <h1 data-scroll>
                 <motion.span
            variants={lineParentVariant}
            initial = 'initial'
            animate='animate'>
                <motion.span 
                variants={lineVariant}>S</motion.span>
                <motion.span variants={lineVariant}>O</motion.span>
                <motion.span variants={lineVariant}>F</motion.span>
                <motion.span variants={lineVariant}>T</motion.span>
                <motion.span variants={lineVariant}>W</motion.span>
                <motion.span variants={lineVariant}>A</motion.span>
                <motion.span variants={lineVariant}>R</motion.span>
                <motion.span variants={lineVariant}>E</motion.span>
            </motion.span>
            </h1>
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
            }}>-</span>
            <motion.span data-scroll
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
     
        </div>
        
        <motion.div className="blueContent" 
        variants={blueContentVariant}
        initial="initial"
        animate="animate"
        >

            <Link to="/about" className="blueAbout" 
             >
                <BsArrowUpRight/>
            </Link>
            <motion.div className="blueLeftContent"
        variants={blueContentSpanParent}
        >
                <h1 className="blueTitle"
                >
                    <motion.span variants={blueContentSpan}>Area of Expertise &#8212;</motion.span>
                </h1>
                <h1 className="bluecontent"
        >
                    <motion.span variants={blueContentSpan}>Frontend Development</motion.span>
                </h1>
                <h1 className="bluecontent"
                 >
                    <motion.span
                    variants={blueContentSpan}>Backend Development</motion.span>
                </h1>
                <h1 className="bluecontent"
                 >
                    <motion.span variants={blueContentSpan}>API-Design</motion.span>
                </h1>
            </motion.div>

            <div className="blueRightContent">
            <motion.div className='circle'
           initial={
            {
                opacity: 0,
                scale: 1.3
            }
           }
           animate={{
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                delay: 3.6,
                ease: "circIn"
            }
           }}
       >
       <BsArrowDown className='arrowicon'/>
        
        <h2 id="circular">
            Scroll-down-Scroll-down.
        </h2>
        </motion.div>
            </div>
        </motion.div>
           
        

      

       





    </div>
  )
}


export default Banner;