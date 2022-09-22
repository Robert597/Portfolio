import React, {useEffect} from 'react';
import { Dispatch, SetStateAction } from 'react';
import Banner from './banner';
import "../Styles/Home.css";
import Transition from './transition';
import HomeAbout from './HomeAbout';
import HomeProject from './HomeProject';

const Home = () => {
 

 
  
  return (
    <div data-scroll-section className='homemaincontainer'>

     <div className='Homewrapper' >
       <Banner/>
       <HomeAbout/>
       <HomeProject/>
    </div>
    </div>
  )
}

export default Home;