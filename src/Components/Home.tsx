import React, {useEffect} from 'react';
import { Dispatch, SetStateAction } from 'react';
import Banner from './banner';
import Navbar from './Navbar';
import "../Styles/Home.css";
import gsap from 'gsap'

const Home = ({loading, setLoading}: { loading: boolean; setLoading: Dispatch<SetStateAction<boolean>>; }) => {
  const [shift, setShift] = React.useState<boolean>(false);
  const [play, setPlay] = React.useState<boolean>(false);
  useEffect(() => {
    const tl = gsap.timeline({delay: 1.7});
   setTimeout(() => {setLoading(false);
  }, 2700);
   setTimeout(() => {setPlay(true);
  }, 4800);

   tl.to(".HomeContainer", {
    scale: 1,
    duration: 1,
    ease: "easeInOut"
   })

   setTimeout(() => setShift(true), 4400);
  }, [])

 
  
  return (
    <section data-scroll-section  className='Homewrapper' >
        <div className='HomeContainer' >
        <Navbar loading={loading}/>
        <Banner loading={loading} shift={shift} play={play}/>
        </div>
    </section>
  )
}

export default Home;