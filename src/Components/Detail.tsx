import React, { Key } from 'react';
import { useLocation, useNavigate } from 'react-router';
import "../Styles/detail.css";
import { BsArrowUpRight } from 'react-icons/bs';
import Transition from './transition';
import {motion} from "framer-motion";

const Detail = () => {
  const {state} = useLocation();
  const data = state as any;
  const navigate = useNavigate();

  const projectDetail = {
    initial: {
      height: 0
    },
    animate:{
      height: "50vh",
      transition: {
        duration: 1,
        delay: 1,
        ease: "easeIn"
      }
    }
  }
  const projectDetailImage = {
    initial: {
      scale: 2
    },
    animate:{
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.2,
        ease: "linear"
      }
    }
  }

  const ProjectDetailName ={
    initial: {
      y: "110%"
    },
    animate:{
      y: 0,
      transition: {
        duration: 1,
        delay: 2.2,
        ease: "linear"
      }
    }
  }

  const projectLabel = {
    initial:{
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: .5,
        delay: 3.2,
        ease: "easeIn"
      }
    }
  }
  const projectDetailLineParent = {
    animate: {
      transition: {
        staggerChildren: .3,
        delayChildren: 3.4
      }
    }
  }
  const projectDetailLine = {
    initial: {
      y: "100%"
    },
    animate: {
      y: 0,
      transition: {
        duration: .8,
        ease: "easeIn"
      }
    }
  }
  const visitProjectParent = {
    animate: {
      transition: {
        staggerChildren: .3,
        delayChildren: 4
      }
    }
  }
  const visitProject = {
    initial: {
      y: "100%",
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .8,
        ease: "easeIn"
      }
    }
  }
  const visitProjectButton = {
    initial: {
      scale: 1.5,
      opacity: 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: .8,
        ease: "easeIn"
      }
    }
  }
  return (
    <motion.div data-scroll-section className='detailImageSection'
    initial='initial'
    animate='animate'>
      <Transition/>
       <motion.div className="detailedImage" variants={projectDetail}
       initial="initial"
       animate="animate">
        <motion.img src={`/${data?.image}`} alt="detail image"  
        variants={projectDetailImage}/>
       </motion.div>

       <div className="detailProjectName">
        <h1>
          <motion.span
          variants={ProjectDetailName}
          initial="initial"
          animate="animate">{data?.name}</motion.span>
        </h1>
       </div>

       <div className="detailedPart">
        <div className="detailedabout">
        <motion.div className="detail_label"
variants={projectLabel}
>
                  <div className="section_label">
                  <span className="label_text">
                   About
                  </span>
                  <svg width="55" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h40.526L54.5 7.237v9.527L47.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>

</motion.div>
                  <motion.ul variants={projectDetailLineParent}>
                    {data?.details.map((item:String, i:Key) => (
                      <li key={i}><motion.span variants={projectDetailLine}> {item} </motion.span> </li>
                    )

                    )}
                  </motion.ul>
        </div>

        <div className="detailedabouttools">
        <motion.div className="detail_label"
variants={projectLabel}
>
                  <div className="section_label">
                  <span className="label_text">
                  Tools
                  </span>
                  <svg width="55" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h40.526L54.5 7.237v9.527L47.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>

</motion.div>
 
<motion.ul variants={projectDetailLineParent}>
                    {data?.tools?.map((item:String, i:Key) => (
                      <li key={i}><motion.span variants={projectDetailLine}> {item} </motion.span> </li>
                    )

                    )}
                  </motion.ul>

        </div>
       </div>
       <motion.div className="moreproject" 
       variants={visitProjectParent}>
    <p>
      <motion.span variants={visitProject}
      initial="initial"
      animate="animate"> Visit Site </motion.span>
    </p>

    <motion.div className="moreProjectIcon" 
    variants={visitProjectButton}
    onClick={() => {
                window.open(data?.link)
            }}>
                <BsArrowUpRight/>
            </motion.div>
</motion.div>
    </motion.div>
  )
}

export default Detail