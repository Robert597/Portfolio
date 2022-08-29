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
    <div className='contactTop'>
     
      <div className="contactMarquee"
      data-scroll data-scroll-sticky data-scroll-target=".contact">
        <hr />
        <div className='marquee1'>Let's Talk - Let's Collaborate - Say Hello-Let's Talk - Let's Collaborate - Say Hello</div>
        <hr />
      </div>
<div className='container1'>
      <div className="container-1">
        <div className="content">
          <h1>
            <p>  Do you have a question,</p>
          </h1>
          <h1>
            <p> an idea, or a project you</p>
          </h1>
          <h1>
            <p>
            need help with?</p>
          </h1>
          <h1>
            <p>
           Contact Me!</p>
          </h1>
        </div>
        <div className="social-links">
          <div className="row1">
            <div><a href="mailto:robertseun1@gmail.com" target="_blank" rel="noreferrer">robertseun1@gmail.com</a></div>
            <div>
            <a href="https://wa.me/09050083955" target="_blank" rel="noreferrer">Whatsapp</a>
            </div>
          </div>
          <div className="row2">
            <div> <a href="https://twitter.com/Rohbert001" target="_blank" rel="noreferrer">Twitter</a></div>
            <div> <a href="https://www.linkedin.com/in/oluwaseun-robert-a43b3221b" target="_blank" rel="noreferrer">LinkedIn</a></div>
            <div> <a href="https://github.com/Robert597" target="_blank" rel="noreferrer">Github</a></div>
          </div>
        </div>
        <div className="contact-form">
          <img src={circle} alt="" />
          <span>
        <BsArrowDown className='contactArrow'/>
          </span>
        </div>
       </div>
       
    
      </div>

    </div>
  </div>
  )
}

export default Contact