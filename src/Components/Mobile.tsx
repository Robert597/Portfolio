import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import "../Styles/mobile.css";
import { BsArrowUpRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


 
type state = {
    state: {
    initial: boolean | null,
    clicked: boolean | null,
    menuName: string
    },
    handleMenu: () => void
}

const Mobile = ({state, handleMenu}: state ) => {
const navigate = useNavigate();
let menu = useRef<HTMLDivElement>(null);
    useEffect(() => {
     if(state.clicked === false){
//close
gsap.to(".menulinkname", {
        y: 120,
        duration: 1,
        ease: "power3.inOut"
});
gsap.to(".menuSocialsContainer h1 span", {
    y: 120,
    duration: 1,
    ease: "power3.inOut"
})
gsap.to(".menuContactMe",  {
    opacity: 0,
    duration: 1,
    ease: "power3.inOut"
})
gsap.to(".menuBottomContainer p", {
    opacity: 0,
    duration: 1,
    ease: "power3.inOut"
});
gsap.to(".topContent", {
    opacity: 0,
    duration: 1,
    ease: "power3.inOut"
});
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
gsap.fromTo(".menulinkname", {
    y: 120
}, {
    y: 0,
    duration: 1,
    delay: 1,
    stagger: .2,
    ease: "slow (0.7, 0.7, false)"
})
gsap.fromTo(".topContent", {
    opacity: 0
},{
    opacity: 1,
    delay: 1,
    duration: 1,
    ease: "slow (0.7, 0.7, false)"
});
gsap.fromTo(".menuSocialsContainer h1 span", {
    y: 120
}, {
    y: 0,
    duration: 1,
    delay: 1,
    stagger: .2,
    ease: "slow (0.7, 0.7, false)"
})
gsap.fromTo(".menuContactMe", {
    opacity: 0,
    scale: 1.4
}, {
    opacity: 1,
    scale: 1,
    duration: .8,
    delay: 1.2,
    ease: "slow (0.7, 0.7, false)"
})
gsap.fromTo(".menuBottomContainer p", {
    opacity: 0,
}, {
    opacity: 1,
    duration: 1,
    delay: 1,
    stagger: .4,
    ease: "slow (0.7, 0.7, false)"
})
        }
    }, [state]);
    
  return (
    <div className='hamburger-menuu' ref={menu}>
        <div className="menu-secondary">
        </div>
        <div className="menu-layer" >
            <div className="topContent">
            <div className="logoContainer">
             <h1 className='logo'>
                <span className='logoname'>ROBERT</span>
                <span className="logoCircle"></span>
            </h1>
        </div>
         
<div className='hamburger-menu' onClick={() => handleMenu()} >
<span>Close</span>
</div>
            </div>

            <div className="menuCenterContent">
                <div className="menuLinkContainer">
                    <h1 className="menuLink" onClick={() => {
                        handleMenu()
                        navigate("/")
                    }}>
                        <span className="menulinkno">01.</span>
                        <span className="menulinkname">Home</span>
                    </h1>
                    <h1 className="menuLink"
                    onClick={() => {
                        handleMenu()
                        navigate("/about")
                    }}>
                        <span className="menulinkno">02.</span>
                        <span className="menulinkname">About</span>
                    </h1>
                    <h1 className="menuLink"
                    onClick={() => {
                        handleMenu()
                        navigate("/projects")
                    }}>
                        <span className="menulinkno">03.</span>
                        <span className="menulinkname">Projects</span>
                    </h1>
                </div>
                <div className="menuSocialsContainer">
                <h1>
                        <span>
                        <a href="mailto:robertseun1@gmail.com">Ma.il <BsArrowUpRight/></a></span>
                    </h1>
                    <h1>
                        <span> <a href="https://twitter.com/Rohbert001" target="_blank" rel="noreferrer">Twitter <BsArrowUpRight/></a> </span>
                    </h1>
                    <h1>
                        <span> <a href="https://www.linkedin.com/in/oluwaseun-robert-a43b3221b" target="_blank" rel="noreferrer">LinkedIn <BsArrowUpRight/></a> </span>
                    </h1>
                    <h1>
                        <span><a href="https://github.com/Robert597" target="_blank" rel="noreferrer">Github <BsArrowUpRight/></a></span>
                    </h1>
                </div>
            </div>

            <div className="menuBottomContainer">
                <p>
                    <span>Available for work worldwide</span>
                </p>
                <p>
                    <span>{new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})} - Lagos, Ng.</span>
                </p>
                <p>
                    <span>Robert Folio &copy;2022.</span>
                </p>
            </div>

            <div className="menuContactMe">
                <p>Say Hi</p>
            </div>
        </div>
        
    </div>
  )
}

export default Mobile