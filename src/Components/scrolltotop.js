import { useEffect } from "react";
import { useLocation } from "react-router";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const ScrollToTop = () => {
  const {pathname} = useLocation();
const {scroll} = useLocomotiveScroll();
  useEffect(() => {
    //document.documentElement.//scrollTo({
      //  top: 0,
       // left: 0,
       // behavior: "instant"
   // })
 
    console.log("changed");
  }, [pathname]);

 return null;
};

export default ScrollToTop;