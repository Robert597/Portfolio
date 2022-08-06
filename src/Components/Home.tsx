import React, {useEffect} from 'react';
import { Dispatch, SetStateAction } from 'react';
import Banner from './banner';
import Navbar from './Navbar';
import "../Styles/Home.css";
import gsap from 'gsap'

const Home = ({loading, setLoading}: { loading: boolean; setLoading: Dispatch<SetStateAction<boolean>>; }) => {
  useEffect(() => {
    const tl = gsap.timeline({delay: 1.4});
   setTimeout(() => setLoading(false), 1500);
   tl.to(".HomeContainer", {
    scale: 1,
    duration: 1,
    ease: "easeInOut"
   })
  }, [])
  
  return (
    <section data-scroll-section  className='Homewrapper'>
        <div className='HomeContainer'>
        <Navbar loading={loading}/>
        <Banner loading={loading}/>
        </div>
    </section>
  )
}

export default Home;