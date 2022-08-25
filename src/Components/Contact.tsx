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
            <div>robertseun1@gmail.com</div>
            <div>+2349050083955</div>
          </div>
          <div className="row2">
            <div>Twitter</div>
            <div>Linkedin</div>
            <div>github</div>
          </div>
        </div>
        <div className="contact-form">
          <img src={circle} alt="" />
          <span>
        <BsArrowDown className='contactArrow'/>
          </span>
        </div>
       </div>
    <span className="contactDivider"></span>
       <div className="container-2">
        <div className="inputboxes">
          <div className="row1">
            <input type="text" placeholder="Name" /><input
              placeholder="E-mail"
              type="text"
            /><input placeholder="Subject" type="text" />
          </div>
          <div className="row2">
            <div className="textarea">
              <textarea placeholder="Message"></textarea>
            </div>
          </div>
        </div>
        <div className="submitbtn">
         <BiSend className="sendBtn"/>
          <h1>Submit</h1>
        </div>
      </div>
      
      </div>

    </div>
  </div>
  )
}

export default Contact