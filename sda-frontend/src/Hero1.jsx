import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import 'tailwindcss/tailwind.css'
import { motion } from "framer-motion";
import sdaLogo  from './assets/sdalogo.svg'
import img1 from  './assets/splc.jpg'
export default function Hero1(){
    const videourl="https://www.se.com/in/en/assets/380/video/199675/Header_Montage.mp4";
    return(
        <div >
<section class="flex  flex-col min-h-screen "   >
<video autoPlay loop muted className="absolute w-full height-50%  opacity-20 object-cover  min-h-screen">
          <source src={videourl} type="video/mp4" />
        </video>
<motion.div 
class="flex   items-center h-20 rounded-xl
 bg-slate-800 opacity-30 sticky top-0"
 whileHover={{ opacity:36 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
 >
<div class="flex items-start h-20 ">
<motion.img src={sdaLogo}
            className="h-15 w-11 flex items-left text-white absolute left-4 top-6 "
            
            alt=""
            whileHover={{ scale: 1.5, }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            />
</div>
   <motion.div class="mx-auto relative px-5 max-w-xl w-full">
        
        <div class="text-3xl font-thin uppercase text-white absolute left-10 top-1/2 -translate-x-1 -translate-y-1/2">
        
            Smart Drives Automation
        </div>
       

   </motion.div>
   <div class="flex items-end  a h-20 ">
        <nav class ="text-white flex gap-5 absolute right-5 -translate-y-7 -translate-x--10">
            <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">About Us</a>
            <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">Product </a>
            <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">Verticals</a>
        </nav>
        </div>
        
</motion.div>

<div class="h-screen flex items-center">
<div class="text-center ">

    <h1 class="text-7xl font-extrabold">
        Smart Drives Automation 
    </h1>
    <p class="font-light text-3xl mt-5 "> We Are Service providers For Industrues </p>
</div>
</div>
</section>
<section class="bg-black min-h-screen" ></section>
</div>
);
}
