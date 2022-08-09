import React from 'react';
import "../Styles/Navbar.css";
import {motion} from "framer-motion";
import {RiMenu4Fill} from "react-icons/ri";
import Mobile from "./Mobile";



const Navbar = ({loading}:{loading: Boolean}) => {
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
    <div>
    <div className="NavbarContainer">
        <div className="logoContainer">
             <h1 className='logo'>
            ROBERT
            </h1>
        </div>
        {
            !loading && 
        <motion.ul className='navbar'>

            <motion.li>
                <motion.p
                whileHover={
                    {
                        scale: 1.1,
                        y: -2,
                        transition: {
                            ease: "easeInOut",
                            duration: .5
                        }
                    }
                }>Home</motion.p>
            </motion.li>
            <motion.li>
            <motion.p
            whileHover={
                {
                    scale: 1.1,
                    y: -2,
                    transition: {
                        ease: "easeInOut",
                        duration: .5
                    }
                }
            }>About</motion.p>
            </motion.li>
            <motion.li>
            <motion.p
            whileHover={
                {
                    scale: 1.1,
                    y: -2,
                    transition: {
                        ease: "easeInOut",
                        duration: .5
                    }
                }
            }>Projects</motion.p>
            </motion.li>
        </motion.ul>
}
{!loading && 
        <motion.div className="contact">
        <motion.p
        whileHover={
            {
                scale: 1.1,
                y: -2,
                transition: {
                    ease: "easeInOut",
                    duration: .5
                }
            }
        }>Contact</motion.p>
        </motion.div>
}

{
    !loading && 

<motion.div className='hamburger-menu' onClick={() => handleMenu()} >
<RiMenu4Fill/>
</motion.div>
}
</div>
<Mobile state={state} handleMenu={handleMenu}/>
</div>
  )
}


export default Navbar;