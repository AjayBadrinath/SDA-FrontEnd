import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css'
import { motion } from "framer-motion";
import sdaLogo  from './assets/sdalogo.svg'
import {  useScroll } from "framer-motion"
import NavBar from './NavBar';
import img1 from  './assets/splc.jpg'
export default function Hero1(){
    const videourl="https://www.se.com/in/en/assets/380/video/199675/Header_Montage.mp4";
    const { scrollYProgress } = useScroll();
    return(
        
        <div >
<section class="flex  flex-col min-h-screen "   >
<video autoPlay loop muted className="absolute w-full height-40%  opacity-20 object-cover  h-screen">
          <source src={videourl} type="video/mp4" />
        </video>
<NavBar/>

<motion.div class="mx-auto relative mt-11 flex items-center  "
  initial={{ y: 500 }} 
  animate={{ y: 100 }}
  transition={{ duration: 2 }} >
<div class="text-center display: block  text-white  ">

    <h1 class="text-7xl text-center font-extrabold">
        Smart Drives Automation 
    </h1>
    <p class="font-light text-3xl mt-5 "> We Are Service providers For Industrues </p>
    <p class="font-extralight text-xl mt-10  ">
        Smart Drives Automation (SDA) is a partnership firm founded and incorporated in 2018.SDA 
started it’s operations as a sales and services support provider to leading multi-national vendors 
in the arena of LV. </p>
<p class="font-extralight text-xl mt-10  ">
Switchgears, industrial automation for programmable logic controllers (PLC), 
SCADA, HMI & drive and embedded systems with a special focus on robotics integration and 
Energy Management. </p>
</div>
</motion.div>
</section>
<section class="bg-black min-h-screen" >

    
</section>
</div>
);
}
