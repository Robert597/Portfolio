import React from 'react';
import "../Styles/Navbar.css";
import {motion} from "framer-motion";
import {RiMenu4Fill} from "react-icons/ri";
import Mobile from "./Mobile";



const Navbar = () => {
    const [state, setState] = React.useState<{
        initial: boolean | null,
        clicked: boolean | null,
        menuName: string
    }>({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

    const handleMenu = () => {
        if(state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            })
        }else if (state.clicked === true) {
            setState({
                initial: state.initial,
                clicked: !state.clicked,
                menuName: "Menu"
            })
        }else if (state.clicked === false) {
            setState({
                initial: state.initial,
                clicked: !state.clicked,
                menuName: "CLose"
            })
        }
    }
   
      
       
    
  return (

    <motion.div className='navv'
   
    >
        <>
        <div className="navbarcont">
    <motion.div className="NavbarContainer">
        <div className="logoContainer">
             <h1 className='logo'>
                <span className='logoname'>ROBERT</span>
                <span className="logoCircle"></span>
            </h1>
        </div>
         




<motion.div className='hamburger-menu' onClick={() => handleMenu()} >
<span>Menu</span>
</motion.div>

</motion.div>
</div>

<Mobile state={state} handleMenu={handleMenu}/>

</>
</motion.div>
  )
}


export default Navbar;