import React from 'react'
import Banner from './banner';
import Navbar from './Navbar';
import "../Styles/Home.css";

const Home = () => {
  return (
    <section data-scroll-section className='Homewrapper'>
        <div className='HomeContainer'>
        <Navbar/>
        <Banner/>
        </div>
    </section>
  )
}

export default Home;