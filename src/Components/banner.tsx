import React, {useEffect, useState} from 'react';
import {BsArrowDown, BsArrowUpRight} from "react-icons/bs";
import "../Styles/Banner.css";
import {motion} from 'framer-motion';
import {useLocomotiveScroll} from 'react-locomotive-scroll';
import {useNavigate} from 'react-router-dom';






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

  const spanParentVariant = {
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 2
        }
    }
}
  const spanParentVariant2 = {
    animate: {
        transition: {
            staggerChildren: .3,
            delayChildren: 1.5
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
        data-scroll
        data-scroll-class="blueContentShow"
        data-scroll-offset="200"
        >

            <div className="blueAbout" onClick={() => {
                navigate("/about")
            }}>
                <BsArrowUpRight/>
            </div>
            <div className="blueLeftContent">
                <h1 className="blueTitle"
                data-scroll
                data-scroll-class="bluesmallcontent"
                data-scroll-offset="200"
                >
                    <span>Area of Expertise &#8212;</span>
                </h1>
                <h1 className="bluecontent"
                 data-scroll
                 data-scroll-class="bluesmallcontent"
                 data-scroll-offset="200">
                    <span>Frontend Development</span>
                </h1>
                <h1 className="bluecontent"
                 data-scroll
                 data-scroll-class="bluesmallcontent"
                 data-scroll-offset="200">
                    <span>Backend Development</span>
                </h1>
                <h1 className="bluecontent"
                 data-scroll
                 data-scroll-class="bluesmallcontent"
                 data-scroll-offset="200">
                    <span>API-Design</span>
                </h1>
            </div>

            <div className="blueRightContent">
            <div className='circle'
            data-scroll
            data-scroll-class="showcircle"
            data-scroll-offset="200"
       >
       <BsArrowDown className='arrowicon'/>
        
        <h2 id="circular">
            Scroll-down-Scroll-down.
        </h2>
        </div>
            </div>
        </motion.div>
           
        

      

       





    </div>
  )
}


export default Banner;