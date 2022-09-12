  import React from 'react';
  import { Dispatch, SetStateAction } from 'react';
  import gsap from "gsap";
  
  const Loader = ({setFirst}: {setFirst: Dispatch<SetStateAction<boolean>>; }) => {
    React.useEffect(() => {
       const tl = gsap.timeline({
        onComplete: () => {
            setFirst(false);
        }
       });
       const line = document.querySelector(".loaderline");

       for(let i =1 ; i < 5; i++){
       tl.to('.loaderline', {
        width: `${25*i}%`,
        duration: 0.2,
       })
        .to([".counter-list-1", ".counter-list-2"], {
            y: `-${15 * i}vw`,
            duration: 0.2,
            stagger: .3,
       })
       }

       tl.to([".topLoader", ".loaderline", ".counter-container"], {
        opacity: 0,
        duration: 0.2,
        stagger: 0.3,
        ease: "power4.inOut"
       }).to(".loader-container", {
        height: 0,
        duration: 1,
        ease: "power4.inOut"
       })
    }, [])
   
    return (
      <div className='loader-container'>

      <div className="topLoader">
        <h1>Loading</h1>
      </div>

<div className="loaderLine">
    <span className='loaderline'></span>
</div>

        <div className="counter-container">
             <ul className='counter-list-1'>
                <li>
                    <h3>0</h3>
                </li>
                <li>
                    <h3>2</h3>
                </li>
                <li>
                    <h3>4</h3>
                </li>
                <li>
                    <h3>6</h3>
                </li>
                <li>
                    <h3>9</h3>
                </li>
             </ul>

             <ul className='counter-list-2'>
                <li>
                    <h3>0</h3>
                </li>
                <li>
                    <h3>3</h3>
                </li>
                <li>
                    <h3>9</h3>
                </li>
                <li>
                    <h3>8</h3>
                </li>
                <li>
                    <h3>9</h3>
                </li>
             </ul>
        </div>
      </div>
    )
  }
  
  export default Loader