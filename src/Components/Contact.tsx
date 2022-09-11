import React from 'react';
import {BsArrowDown} from "react-icons/bs";
import {BiSend} from "react-icons/bi";
import "../Styles/contact.css";
import circle from "../Assets/circle.svg";

const Contact = () => {
  return (
    <div
  className='contact'
  data-scroll-section>
    
                  <div className="section_label">
                  <span className="label_text">
                    Contact
                  </span>
                  <svg width="55" height="24" fill="none">
                    <path d="M7.237 23.5.5 16.764V7.237L7.237.5h40.526L54.5 7.237v9.527L47.764 23.5H7.236Z" stroke="#484b45"></path>
                  </svg>
                  </div>

    <hr className="contactHr" />
        <div className='marquee1'>Let's Talk - Let's Collaborate - Say Hello - Let's Talk - Let's Collaborate - Say Hello</div>
       <hr className="contactHr" />
      
<div className='container1'>
      <div className="container-1">
        <div className="content">
          <h1>
            <p  data-scroll 
      data-scroll-offset="70"
      data-scroll-repeat="true"
      data-scroll-class="showcontact">  Do you have a question,</p>
          </h1>
          <h1>
            <p  data-scroll 
      data-scroll-offset="70"
      data-scroll-repeat="true"
      data-scroll-class="showcontact"> an idea, or a project you</p>
          </h1>
          <h1>
            <p  data-scroll 
      data-scroll-offset="70"
      data-scroll-repeat="true"
      data-scroll-class="showcontact">
            need help with?</p>
          </h1>
          <h1>
            <p  data-scroll 
      data-scroll-offset="70"
      data-scroll-repeat="true"
      data-scroll-class="showcontact">
           Contact Me!</p>
          </h1>
        </div>
        <div className="social-links">
          <div className="row1">
            <div 
             data-scroll 
             data-scroll-offset="70"
             data-scroll-repeat="true"
             data-scroll-class="input-show"><a href="mailto:robertseun1@gmail.com" target="_blank" rel="noreferrer">robertseun1@gmail.com</a></div>
            <div  data-scroll 
             data-scroll-offset="70"
             data-scroll-repeat="true"
             data-scroll-class="input-show">
            <a href="https://wa.me/09050083955" target="_blank" rel="noreferrer">Whatsapp</a>
            </div>
          </div>
          <div className="row2" >
            <div  data-scroll 
             data-scroll-offset="70"
             data-scroll-repeat="true"
             data-scroll-class="input-show"> <a href="https://twitter.com/Rohbert001" target="_blank" rel="noreferrer">Twitter</a></div>
            <div  data-scroll 
             data-scroll-offset="70"
             data-scroll-repeat="true"
             data-scroll-class="input-show"> <a href="https://www.linkedin.com/in/oluwaseun-robert-a43b3221b" target="_blank" rel="noreferrer">LinkedIn</a></div>
            <div  data-scroll 
             data-scroll-offset="70"
             data-scroll-repeat="true"
             data-scroll-class="input-show"> <a href="https://github.com/Robert597" target="_blank" rel="noreferrer">Github</a></div>
          </div>
        </div>
        <div className="contact-form" 
        data-scroll 
        data-scroll-offset="70"
        data-scroll-repeat="true"
        data-scroll-class="contact-form-show">
          <img src={circle} alt="" />
          <span>
        <BsArrowDown className='contactArrow'/>
          </span>
        </div>
       </div>
       
    
      </div>

    </div>

  )
}

export default Contact