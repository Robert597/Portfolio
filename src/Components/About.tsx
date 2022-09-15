import { useEffect } from "react";
import me from "../Assets/me3.jpg";
import "../Styles/about.css";
import Transition from "./transition";
import {motion} from "framer-motion";

const About = () => {


     
 
  
 
  return (
    <div data-scroll-section>
 <Transition/>
 

    <section className="about">
      
   


      

    <div className="aboutTop">
  <motion.h1
>
   <motion.div className="textrow" >
<span>Hello!</span>

<span className="text-image"><img src={me} alt="me"/></span>

<span>
  I'M ROBERT OLUWASEUN 
</span>


<span className="text-image"><video autoPlay loop muted playsInline src="https://player.vimeo.com/external/614736932.sd.mp4?s=c310d9c4bc625d2af201c1d8b7b8d3d76d47ba0d&profile_id=165&oauth2_token_id=57447761"></video></span>

   </motion.div>
   <motion.div className="textrow" >
<span>A FULLSTACK </span>

<span className="text-image"><video autoPlay loop muted playsInline src="https://player.vimeo.com/external/547953937.hd.mp4?s=1da276d905656724ca1c2f912e3a72557560bdc7&profile_id=174&oauth2_token_id=57447761"></video></span>



<span>
  WEB DEVELOPER.
</span>
   </motion.div>
    
  </motion.h1>
</div>
          <div className="about_bio">
              
            <div className="aboutText"> 
            <motion.div className="about_desc" 
          >
                <motion.p 
            
                >
                  Web developer based in Lagos, Nigeria, specialized in fullstack web development, dedicated to developing and optimizing interactive, user-friendly and feature rich websites. leveraging analytical skills and strong attention to details in order to deliver original and efficient web solutions.
                </motion.p>
                <motion.p   
                >
                 I started coding in the university, i majored in Computer Science in school, it wasnt easy when i started but it's something i've come to really love. 
                </motion.p>
                <motion.p   
               >
                  i've been a part of this industry for few years and within those years, ive honed my analytic and collaborative skills which makes working with a team easier.
                </motion.p>
                <motion.p   
                >
                  I'm all about growth, i always want to add one or two more skills to my stack, a mentor once told me there's no end to learning in this industry.
                </motion.p>
              </motion.div>

               < div className="skill" >
              <div className="vital_info">
               <div className="section_label">
                  <span className="label_text">
                   Focus
                  </span>
                  <svg width="55" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h40.526L54.5 7.237v9.527L47.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>

  <ul className="skills">
    <li>Frontend</li>
    <li>Backend</li>
    <li>API - Design </li>
  </ul>
  </div>
              <div className="vital_info">
               <div className="section_label section_label_edu">
                  <span className="label_text">
                   Study
                  </span>
                  <svg width="75" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h40.526L54.5 7.237v9.527L47.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>

  <ul className="skills">
    <li>Olabisi Onabanjo University</li>
    <li>Computer Science - 2022</li>
    <li>Ogun State, Nigeria. </li>
  </ul>
  </div>

  <div className="vital_info">
               <div className="section_label">
                  <span className="label_text">
                    Skills
                  </span>
                  <svg width="55" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h40.526L54.5 7.237v9.527L47.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>

  <ul className="skills">
    <li>Javascript</li>
    <li>Typescript</li>
    <li>Css & Sass</li>
    <li>React & Redux</li>
    <li>SQL & postgreSQL</li>
    <li>Node.js & Express.js</li>
    <li>MongoDB & Mongoose</li>
  </ul>
  </div>
 </div>
</div>

          

             </div>
    </section>
    </div>
  )
}

export default About