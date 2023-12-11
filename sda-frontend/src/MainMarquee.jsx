import React from 'react'
import Marquee from "react-fast-marquee";
import nVent  from './assets/nvent.png';
import BB  from './assets/bb.png';
export default function MainMarquee() {
  return (
    <div class=" m-auto z-100  sticky top-20 text-xl sm:text-3xl text-white text-center font-extrabold ">
   <h2 className='mt-5 text-align: center'>Authorised channel Partners For </h2>
   
   <Marquee>
   <a href="https://hoffman.nvent.com/en-us/"><img src={nVent} className='h-20 m-10 w-30'/></a>
   <a href="https://www.bharatbijlee.com/"><img src={BB} className='h-20 m-10 w-30'/></a>
   </Marquee>

</div>
  )
}
