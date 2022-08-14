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
        {!loading && <>
    <div className="NavbarContainer">
        <div className="logoContainer">
             <h1 className='logo'>
            ROBERT
            </h1>
        </div>
         




<motion.div className='hamburger-menu' onClick={() => handleMenu()} >
<RiMenu4Fill/>
</motion.div>

</div>
<Mobile state={state} handleMenu={handleMenu}/>
</>
}
</div>
  )
}


export default Navbar;