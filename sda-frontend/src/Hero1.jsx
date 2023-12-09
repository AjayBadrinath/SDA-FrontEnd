import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css'
import { motion } from "framer-motion";
import sdaLogo  from './assets/sdalogo.svg'
import {  useScroll } from "framer-motion"
import NavBar from './NavBar';
import ScrollAnim from './ScrollAnim';
import img1 from  './assets/splc.jpg'
import zIndex from '@mui/material/styles/zIndex';

export default function Hero1(){


    const videourl="https://www.se.com/in/en/assets/380/video/199675/Header_Montage.mp4";
    const { scrollYProgress } = useScroll();
    const text="We Are Service providers For Industries".split(" ");
    const text2="Smart Drives Automation (SDA) is a partnership firm founded and incorporated in 2018.SDA     started it’s operations as a sales and services support provider to leading multi-national vendors  in the arena of LV.".split(" ");
    const text3='LV Switchgears, Industrial automation ( SCADA, HMI & VFD ) with a special focus on robotics integration and  Energy Management.'.split(" ");
    return(
        
        <div className=' h-screen '>
           
<section class=" flex  h-screen  flex-col z-0 " 
   >

        
<motion.div class="mx-auto relative mt-0 flex items-center  "
  initial={{ y: 500 }} 
  animate={{ y: 100 }}
  transition={{ duration: 2 }} >

<div class="text-center display: block  text-white z-0  ">

    <h1 class="text-7xl text-center font-extrabold z-0  ">
        Smart Drives Automation 
    </h1>
    <p class="font-mono text-3xl mt-5 ">
        {
            text.map((a,b)=>(
                <motion.span
                initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: b / 10
          }}
          key={b}>
            {a}{" "}
          </motion.span>
            ))
        }
    </p>
    <p class="font-mono text-xl mt-10 z-0  ">
    {
            text2.map((a,b)=>(
                <motion.span
                initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: b / 10
          }}
          key={b}>
            {a}{" "}
          </motion.span>
            ))
        }
        
         </p>
<p class="font-mono text-xl mt-10 z-0  ">
{
            text3.map((a,b)=>(
                <motion.span
                initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: b / 10
          }}
          key={b}>
            {a}{" "}
          </motion.span>
            ))
        }

</p>


</div>
</motion.div>
<div class=" display: block h-7 m-auto items-center ">
        
    <button  ><ScrollAnim/></button>
</div>
</section>





</div>
);
}
