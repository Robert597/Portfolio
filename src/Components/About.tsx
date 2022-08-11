import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import "../Styles/about.css";

const About = () => {
 
     
 
  
 
  return (
    <section data-scroll-section className="about">
        <div className="topAbout" >
          <div className="iam" data-scroll data-scroll-sticky data-scroll-target=".about">
            <hr/>
            <div>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
              <h1>I AM ROBERT</h1>
            </div>
            <hr/>
          </div>

          <div className="centerAbout"  data-scroll>

            <div className="firstAbout">
            <div className="aboutText">

               <div className="aboutLargeText" data-scroll 
               data-scroll-class="up"
               data-scroll-repeat="true"
               data-scroll-offset="200">
                  <h1  data-scroll >
                    <span >
                      Software developer based in Lagos, Nigeria.
                    </span>
                  </h1>
                  <h1>
                    <span>
                      Specialized in fullstack web development.
                    </span>
                  </h1>
               </div>
<span className="hrline"></span>
               <div className="aboutBottomText" data-scroll 
               data-scroll-class="up"
               data-scroll-repeat="true"
               data-scroll-offset="200">
                
                <h1>
                  <span>I am Robert Oluwaseun, a fullstack web developer</span>
                </h1>

                <h1>
                  <span>dedicated to developing and optimizing</span>
                </h1>

                <h1>
                  <span>interactive, user-friendly and feature rich websites.</span>
                </h1>

                <h1>
                  <span>Leveraging analytical skills and strong attention to detail</span>
                </h1>

                <h1>
                  <span>in order to deliver original and efficient web solutions.</span>
                </h1>
               </div>
</div>
<span className='mobilehr'></span>
             <div className="skill" >
             <h1 className='skillh1' data-scroll 
            data-scroll-class="up"
            data-scroll-repeat="true"
            data-scroll-offset="200">
      <span>Skills:</span>
    </h1>

  <div className="skills" 
   data-scroll 
   data-scroll-class="up"
   data-scroll-repeat="true"
   data-scroll-offset="200">
    <h1>
      <span>Javascript</span>
    </h1>
    <h1>
      <span>Typescript</span>
    </h1>
    <h1>
      <span>Css & SASS</span>
    </h1>
    <h1>
      <span>React & Redux</span>
    </h1>
    <h1>
      <span>NodeJs & ExpressJs</span>
    </h1>
    <h1>
      <span>MongoDb & Mongoose</span>
    </h1>
    <h1>
      <span>SQL & PostgreSQL</span>
    </h1>
  </div>
 </div>

             </div>
 
 
 

          </div>

        </div>
    </section>
  )
}

export default About