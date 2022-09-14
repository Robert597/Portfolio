 import React from 'react';
 import "../Styles/homeabout.css";
 import me from "../Assets/me3.jpg";
 import me1 from "../Assets/flower.jpg";
 import { BsArrowUpRight } from 'react-icons/bs';
 import { useNavigate } from 'react-router';

 const HomeAbout = () => {
  const navigate = useNavigate();
   return (
     <div className='homeabout'>

<div className="about_label"
data-scroll
data-scroll-class="showlabel"
data-scroll-offset="200" 
>
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

<div className="aboutTop">
  <h1 data-scroll
  data-scroll-class="textUp"
  data-scroll-offset="200"
>
   <div className="textrow" >
<span>Hello!</span>

<span className="text-image"><img src={me} alt="me"/></span>

<span>
  I'M ROBERT OLUWASEUN 
</span>

<span className="text-image"><img src={me1} alt="me"/></span>

   </div>
   <div className="textrow" >
<span>A FULLSTACK </span>

<span className="text-image"><img src={me1} alt="me"/></span>



<span>
  WEB DEVELOPER.
</span>
   </div>
    
  </h1>
</div>

<div className="homedetailsmallcontent" >
  <p  data-scroll
  data-scroll-class="smalltextUp"
  data-scroll-offset="200">
    <span>
      Web developer based in Lagos, Nigeria, constantly seeking out innovative solutions to everyday problems. i'm available for full-time roles and freelance projects worldwide. 
    </span>
    </p>
</div>

<div className="moreabout" 
 data-scroll
 data-scroll-class="moretextUp"
 data-scroll-offset="200">
    <p>
      <span>More About Me</span>
    </p>

    <div className="moreAboutIcon" onClick={() => {
                navigate("/about")
            }}>
                <BsArrowUpRight/>
            </div>
</div>

     </div>
   )
 }
 
 export default HomeAbout;