import React, {useEffect} from 'react';
import { Dispatch, SetStateAction } from 'react';
import Banner from './banner';
import "../Styles/Home.css";

const Home = ({loading, setLoading, width}: { loading: boolean; setLoading: Dispatch<SetStateAction<boolean>>; width:Number; }) => {
 

 
  
  return (
    <section data-scroll-section  className='Homewrapper' >
       <Banner loading={loading} width={width}/>
    </section>
  )
}

export default Home;