import React from 'react'
import 'tailwindcss/tailwind.css'
import { motion } from "framer-motion";
import sdaLogo  from './assets/sdalogo.svg'
export default function NavBar() {
  return (
    <motion.div 
class="flex flex-wrap  ml-10 mr-10 mt-3 items-center h-20  rounded-3xl
 bg-slate-800 opacity-30 sticky top-0 p-4"
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
        
        <div class="text-xl font-thin  whitespace-nowrap uppercase text-white absolute left-10 top-1/2 -translate-x-1 -translate-y-1/2">
        
            Smart Drives Automation
        </div>
       

   </motion.div>
   <div class="w-full sm:w-auto flex items-end  a h-20 ">
        <nav class ="text-white flex gap-5 absolute right-5 -translate-y-7 -translate-x--10">
            <a class="block py-2 px-3 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">About Us</a>
            <a class="block py-2 px-3 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">Product </a>
            <a class="block py-2 px-3 text-white-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">Verticals</a>
        </nav>
        </div>
        
</motion.div>
    
  )
}
