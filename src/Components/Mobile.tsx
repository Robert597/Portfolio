import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import "../Styles/mobile.css";
import {FaTimes} from "react-icons/fa";
 
type state = {
    state: {
    initial: boolean | null,
    clicked: boolean | null,
    menuName: string
    },
    handleMenu: () => void
}

const Mobile = ({state, handleMenu}: state ) => {
const [close, setClose] = React.useState<Boolean>(true);
let menu = useRef<HTMLDivElement>(null);
let secondaryMenu = useRef();
    useEffect(() => {
     if(state.clicked === false){
//close
gsap.to(".menuLink p span", {
    y: -100,
    duration: .5,
    stagger: .2,
    ease: "slow (0.7, 0.7, false)"
})
gsap.to([".hamburger-menuu", ".menu-secondary"], {
    height: 0,
    delay: 1,
    duration: 1, 
    stagger: {
        amount: .2
    },
    ease: "power3.inOut"
});
gsap.to(".hamburger-menuu", {
    delay: 1,
    duration: 1.2,
    css: {display: "none"}
})
     }else if(state.clicked === true ||
        (state.clicked === true && state.initial === null)) {
//open
gsap.to(".hamburger-menuu", {
    css: {display: "block"}
})
gsap.fromTo([".menu-secondary", ".hamburger-menuu"], {
    height: 0,
    transformOrigin: "right top",
    skewY: 2
}, {
    height: "100vh",
    skewY: 0,
    delay: .2,
    duration: 1, 
    stagger: {
        amount: .2,
    },
    ease: "power3.inOut"
})
gsap.fromTo(".menuLink p span", {
    y: 100
}, {
    y: 0,
    duration: .8,
    delay: .2,
    stagger: .2,
    ease: "slow (0.7, 0.7, false)"
})
        }
    }, [state]);
    
  return (
    <div className='hamburger-menuu' ref={menu}>
        <div className="menu-secondary">
        </div>
        <div className="menu-layer" >
        <div className="menuu">
        <div className="logoContainer">
             <h1 className='logo'>
            ROBERT
            </h1>
        </div>

        <div onClick={() => handleMenu()}>
            <FaTimes/>
        </div>
        </div>
            <div className="menu-container">
                <div className="menu-wrapper">
                    <div className="menu-links">
                        <nav>
                           <div className='menuLink'>
                            <p onClick={() => handleMenu()}><span>Home</span></p>
                            <p onClick={() => handleMenu()}><span>Projects</span></p>
                            <p onClick={() => handleMenu()}><span>About</span></p>
                            <p onClick={() => handleMenu()}><span>Contact</span></p>
                           
                        </div> 
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobile