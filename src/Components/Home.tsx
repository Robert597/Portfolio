import React, {useEffect} from 'react';
import { Dispatch, SetStateAction } from 'react';
import Banner from './banner';
import "../Styles/Home.css";
import Transition from './transition';

const Home = () => {
 

 
  
  return (
    <div data-scroll-section>
      <Transition/>

     <section className='Homewrapper' >
       <Banner/>
    </section>
    </div>
  )
}

export default Home;