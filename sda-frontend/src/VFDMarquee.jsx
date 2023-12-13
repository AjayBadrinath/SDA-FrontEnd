import React from 'react'
import Marquee from "react-fast-marquee";

import { motion } from "framer-motion";
import se from './assets/se.png';
import abb from './assets/abb.png';
import siemens from './assets/siemens.png';
export default function VFDMarquee() {
  return (
    <motion.div class=" m-auto z-100   top-20 text-xl sm:text-3xl text-white text-center font-extrabold "
    initial={{ y: 400 }} 
  animate={{ y: 30 }}
  transition={{ duration: 2 }}
    >
   <h2 className='mt-5 text-align: center'>Distributors For </h2>
   
   <Marquee>
   <a href="https://hoffman.nvent.com/en-us/"><motion.img src={se} className='h-20 m-10 w-30'
   whileHover={{ scale: 1.5}}
   onHoverStart={e => {}}
   onHoverEnd={e => {}}
   /></a>
   <a href="https://www.bharatbijlee.com/"><motion.img src={siemens} className='h-20 m-10 w-30'
   whileHover={{ scale: 1.5}}
   onHoverStart={e => {}}
   onHoverEnd={e => {}}
   /></a>
   <a href="https://www.bharatbijlee.com/"><motion.img src={abb} className='h-20 m-10 w-30'
   whileHover={{ scale: 1.5}}
   onHoverStart={e => {}}
   onHoverEnd={e => {}}
   /></a>
   </Marquee>

</motion.div>
  )
}
