import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import { motion, useScroll,useAnimation} from "framer-motion";
import sdaLogo  from './assets/sdalogo.svg'
import {useMediaQuery} from 'react-responsive'
import {FaBars} from 'react-icons/fa'
import { Ripple, initTE } from "tw-elements";

export default function NavBar() {
  const [Open,setOpen]=useState(false)
  
  
  const small=useMediaQuery(
    {
      query:'(max-width:800px)'
    }
  )
  


  const menu=(
    <div class="w-full  sm:w-auto flex items-end  a h-20 ">
        <nav class ="text-black flex gap-5 absolute right-5 -translate-y-7 -translate-x--10 ">
            <a class="font-mono block py-2 px-3 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">About Us</a>
            <a class="font-mono block py-2 px-3 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">Product </a>
            <a class="font-mono block py-2 px-3 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">Verticals</a>
        </nav>
        </div>
  )
  return (
    
      
    <motion.div 
    
class="flex flex-wrap ml-10 mr-10 mt-3 bg-slate-300 items-center h-20 z-100 rounded-3xl  shadow-[0_0_30px_aqua]
 sticky top-0 opacity-30  p-0"
 
 initial={{y:500}}
  animate={{ y:10 }}
  transition={{ duration: 1 }}
 whileHover={{ opacity:36 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
 >
   
<div class="w-full sm:w-auto  flex items-start h-20 ">
<motion.img src={sdaLogo}
            className="m-auto justify-between h-15 w-11 flex items-left text-white absolute left-4 top-6 "
            
            alt=""
            whileHover={{ scale: 1.5, rotate:360}}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            />
</div>
   <motion.div class="   mx-auto relative px-5 max-w-xl w-full">
        
        <div class=" sm:text-sm md:text-xl lg:text-xl font-thin ml-10  whitespace-nowrap uppercase text-black absolute left-10 top-1/2 -translate-x-1 -translate-y-1/2">
        <h3 class="font-mono m-auto">
            Smart Drives Automation
            </h3>
        </div>
       

   </motion.div>
   <>
    {small &&(
      <button onClick={()=>setOpen(!Open)} className="absolute right-5">
      <FaBars/>
    </button>
    )}
    {
      (!small || Open)&& menu
    }
      </>
</motion.div>


  )
}
