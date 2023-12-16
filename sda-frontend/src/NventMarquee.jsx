import React from 'react'
import Marquee from "react-fast-marquee";

import { motion } from "framer-motion";
import nvent from './assets/nvent.png';

export default function NventMarquee() {
  return (
    <motion.div class=" m-auto z-100   top-20 text-xl sm:text-3xl text-white text-center font-extrabold "
    initial={{ y: 400 }} 
  animate={{ y: 30 }}
  transition={{ duration: 2 }}
    >
   <h2 className='mt-5 text-align: center'>Authorized Channel Partner  </h2>
   
   <Marquee play={false}>
   <a href="https://www.se.com/ww/en/"><motion.img src={nvent} className='h-20 m-10 w-30'
   whileHover={{ scale: 1.5}}
   onHoverStart={e => {}}
   onHoverEnd={e => {}}
   /></a>
      <h3 className='mt-5 text-align: center'>We Connect and Protect</h3>

   </Marquee>

</motion.div>
  )
}
