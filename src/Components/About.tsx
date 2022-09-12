import { useEffect } from "react";
import me from "../Assets/me3.jpg";
import "../Styles/about.css";
import Transition from "./transition";

const About = () => {
 
     
 
  
 
  return (
    <div data-scroll-section>

<Transition/>

    <section className="about">
      
      

<div className="aboutTop">
  <h1 data-scroll
  data-scroll-class="textUp"
  data-scroll-offset="300"
>
   <div className="textrow" >
<span>Hello!</span>

<span className="text-image"><img src={me} alt="me"/></span>

<span>
  I'M ROBERT OLUWASEUN 
</span>
   </div>
   <div className="textrow" >
<span>A FULLSTACK </span>
<span>
  WEB DEVELOPER.
</span>
   </div>
    
  </h1>
</div>

          <div className="about_bio">
              <div className="about_label">
                  <div className="section_label">
                  <span className="label_text">
                    About
                  </span>
                  <svg width="55" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h40.526L54.5 7.237v9.527L47.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>

                  <div className="section_label">
                  <span className="label_text">
                    ME
                  </span>
                  <svg width="32" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h17.527L31.5 7.237v9.527L24.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>
</div>
            <div className="aboutText"> 
            <div className="about_desc">
                <p>
                  Web developer based in Lagos, Nigeria, specialized in fullstack web development, dedicated to developing and optimizing interactive, user-friendly and feature rich websites. leveraging analytical skills and strong attention to details in order to deliver original and efficient web solutions.
                </p>
              </div>

               <div className="skill" >

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
    </section>
    </div>
  )
}

export default About