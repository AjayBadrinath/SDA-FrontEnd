import React from 'react'
import Marquee from "react-fast-marquee";
import nVent  from './assets/nvent.png';
import BB  from './assets/bb.png';
import { motion } from "framer-motion";
export default function MainMarquee() {
  return (
    <motion.div class=" m-auto z-100   top-20 text-xl sm:text-3xl text-white text-center font-extrabold "
    initial={{ y: 400 }} 
  animate={{ y: 30 }}
  transition={{ duration: 2 }}
    >
   <h2 className='mt-5 text-align: center'>Authorised channel Partners For </h2>
   
   <Marquee>
   <a href="https://hoffman.nvent.com/en-us/"><motion.img src={nVent} className='h-20 m-10 w-30'
   whileHover={{ scale: 1.5}}
   onHoverStart={e => {}}
   onHoverEnd={e => {}}
   /></a>
   <a href="https://www.bharatbijlee.com/"><motion.img src={BB} className='h-20 m-10 w-30'
   whileHover={{ scale: 1.5}}
   onHoverStart={e => {}}
   onHoverEnd={e => {}}
   /></a>
   </Marquee>

</motion.div>
  )
}
