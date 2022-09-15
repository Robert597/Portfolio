import React from 'react';
import "../Styles/contact.css";
import { BsArrowUpRight } from 'react-icons/bs';

const Contact = () => {
  return (
    <div
  className='contact3'
  data-scroll-section
  >
   <div className="contactCollaborations">
      <h1>
        <p>To talk collaborations or </p>
      </h1>
      <h1>
        <p>Partnerships, send an email to: </p>
      </h1>
      <h1>
        <p><a href="mailto:robertseun1@gmail.com">
          robertseun1@gmail.com <span><BsArrowUpRight/></span>
          </a>
          </p>
      </h1>
    </div>        

  <hr className="contactHr" 
  data-scroll
  data-scroll-class="hrwidth"
  data-scroll-offset="100"/>
        <div className='marquee1'>Let's Talk - Let's Collaborate - Say Hello - Let's Talk - Let's Collaborate - Say Hello</div>
       <hr className="contactHr" 
       data-scroll
       data-scroll-class="hrwidth"
       data-scroll-offset="100"/>
      
       <div className="bottomcontactdetails">
    <div className="contactDetails">
        <h1>Contact Details</h1>
        <div>
            <a href="https://wa.me/09050083955" target="_blank" rel="noreferrer">Whatsapp</a>
            </div>
    </div>

    <div className="socials">
      <h1>Socials</h1>
      <div className="socialsaccount">
      <div> <a href="https://www.linkedin.com/in/oluwaseun-robert-a43b3221b" target="_blank" rel="noreferrer">LinkedIn</a></div>

      <div> <a href="https://twitter.com/Rohbert001" target="_blank" rel="noreferrer">Twitter</a></div>

      <div> <a href="https://github.com/Robert597" target="_blank" rel="noreferrer">Github</a></div>
      </div>
    </div>

    <div className="location">
      <h1>Location</h1>
      <h1 className="lagos">
        <span>Lagos, NG. </span>
        <span>{new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})} </span>
      </h1>
    </div>
       </div>

       

    </div>

  )
}

export default Contact