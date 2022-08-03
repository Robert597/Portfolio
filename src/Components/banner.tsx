import React, {useEffect, useState} from 'react';
import me from "../Assets/me3.jpg";
import {BsArrowDown} from "react-icons/bs";
import "../Styles/Banner.css";
import { RiSoundModuleFill, RiZcoolLine } from 'react-icons/ri';


const Banner = () => {
    useEffect(() => {
    const text = document.getElementById("circular") as HTMLElement;
    console.log(text.innerHTML);
    text.innerHTML = text.innerText.replace(/\S/g, "<span>$&</span>");
    const ele = document.querySelectorAll('span');
    for(var i=0; i < ele.length; i++){
        ele[i].style.transform= "rotate(" + i * 15
         + "deg)";
    }
    }, []);
    
  return (
    <div className='bannerContainer'>
        <div className='creative'>
            <h1 >Creative</h1>
        </div>
        
            <div className='software' data-scroll>
            <h1 data-scroll data-scroll-speed = "10" data-scroll-direction="horizontal">Software</h1>
            <h1 data-scroll data-scroll-speed = "10" data-scroll-direction="horizontal">Software</h1>
            <h1 data-scroll data-scroll-speed = "10" data-scroll-direction="horizontal">Software</h1>
            <h1 data-scroll data-scroll-speed = "10" data-scroll-direction="horizontal">Software</h1>
            </div>
        

        <div className='developer'>
        <div className='me'>
                <img src={me} alt="me"/>
            </div>
            <h1>Developer</h1>
        </div>

        <div className='circle' data-scroll>
       <BsArrowDown className='arrowicon'/>
        
        <h2 id="circular" data-scroll>
            Scroll-down-Scroll-down.
        </h2>
        </div>
        
      
        
    </div>
  );
}


export default Banner;