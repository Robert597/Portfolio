import React, {useEffect} from 'react';
import { Dispatch, SetStateAction } from 'react';
import Banner from './banner';
import "../Styles/Home.css";
import gsap from 'gsap'

const Home = ({loading, setLoading}: { loading: boolean; setLoading: Dispatch<SetStateAction<boolean>>; }) => {
  const [shift, setShift] = React.useState<boolean>(false);
  const [play, setPlay] = React.useState<boolean>(false);
  useEffect(() => {
    const tl = gsap.timeline({delay: 1.7});
   setTimeout(() => {setLoading(false);
  }, 2800);
  

   setTimeout(() => {setPlay(true);
  }, 3900);

   tl.to(".HomeContainer", {
    scale: 1,
    duration: 1,
    ease: "easeInOut"
   }).to(".bannerContainer", {css:{
    marginTop: "3.2rem"
   }});

   setTimeout(() => setShift(true), 2900);
  }, []);

 
  
  return (
    <section data-scroll-section  className='Homewrapper' >
        <div className='HomeContainer' >
        <Banner loading={loading} shift={shift} play={play}/>
        </div>
    </section>
  )
}

export default Home;