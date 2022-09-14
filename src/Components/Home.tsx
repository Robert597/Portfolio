import React, {useEffect} from 'react';
import { Dispatch, SetStateAction } from 'react';
import Banner from './banner';
import "../Styles/Home.css";
import Transition from './transition';
import HomeAbout from './HomeAbout';
import HomeProject from './HomeProject';

const Home = () => {
 

 
  
  return (
    <div data-scroll-section>
      <Transition/>
     <section className='Homewrapper' >
       <Banner/>
       <HomeAbout/>
       <HomeProject/>
    </section>
    </div>
  )
}

export default Home;