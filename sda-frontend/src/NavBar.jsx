import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import { motion, useScroll,useAnimation} from "framer-motion";
import sdaLogo  from './assets/sdalogo.svg'
import {useMediaQuery} from 'react-responsive'
import {FaBars} from 'react-icons/fa'
import { Ripple, initTE } from "tw-elements";
import { Dropdown } from 'flowbite-react';
import { Outlet,Link } from 'react-router-dom';

export default function NavBar() {
  const [Open,setOpen]=useState(false)
  
  
  const small=useMediaQuery(
    {
      query:'(max-width:800px)'
    }
  )
  


  const menu=(
    
    <div class="w-full z-10000 sm:w-auto flex items-end a h-20">
    <nav class="text-white flex gap-5 absolute right-5 -translate-y-7 -translate-x--10">
    <button><Link to="/contact-us"> Contact Us</Link></button>
      <Dropdown label="About Us" class='bg-inherit z-10000' dismissOnClick={true}>
      <Link to="/companyprofile"> <Dropdown.Item>Company Profile</Dropdown.Item></Link>
      
      <Dropdown.Item>Blogs</Dropdown.Item>
      
      </Dropdown>
      <Dropdown label="Products" class='bg-inherit'  dismissOnClick={true}>
        
        
        <Dropdown.Item>
        <Link to="/lvswitchgear">LV SwitchGear</Link>
          </Dropdown.Item>
        <Dropdown.Item>
        <Link to="/enclosures">Enclosures</Link>
        </Dropdown.Item>
        <Dropdown.Item>
        <Link to="/automationcontrol">Automation&Control</Link>
          </Dropdown.Item>
        
        
      </Dropdown>
      <Dropdown label="Solutions" class='bg-inherit'  dismissOnClick={false}>
      <Link to="/controlpanel"> <Dropdown.Item >Control Panels</Dropdown.Item></Link>
      <Link to="lvpanel">  <Dropdown.Item>LV Panels</Dropdown.Item></Link>
      <Link to="drivepanel"> <Dropdown.Item>Drive Panels</Dropdown.Item></Link>
      </Dropdown>
    </nav>
    <Outlet/>
  </div>
  

  
  )
  return (
    
      
    <motion.div 
    
class="flex flex-wrap ml-10 mr-10 mt-3 bg-slate-800 items-center h-20 z-[10000] rounded-3xl  shadow-[0_0_30px_aqua]
 sticky top-0 opacity-30  p-0"
 
 initial={{y:500}}
  animate={{ y:10 }}
  transition={{ duration: 1 }}
 whileHover={{ opacity:36 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
 >
   
<div class="w-full sm:w-auto  flex items-start h-20 ">
<Link to="/"><motion.img src={sdaLogo}
            className="m-auto justify-between h-15 w-11 flex items-left text-white absolute left-4 top-6 "
            
            alt=""
            whileHover={{ scale: 1.5, rotate:360}}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            /></Link>
            <Outlet />
</div>
<motion.div class="   mx-auto relative px-5 max-w-xl w-full">
        
        <div class=" sm:text-sm md:text-xl lg:text-xl font-thin ml-10  whitespace-nowrap uppercase text-white absolute left-10 top-1/2 -translate-x-1 -translate-y-1/2">
        <Link to="/"> <h3 class="font-mono m-auto">
            Smart Drives Automation
            </h3></Link>
            <Outlet />
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
