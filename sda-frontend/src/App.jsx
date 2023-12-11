import { useState ,useRef,useEffect} from 'react'
import NavBar from './NavBar'
import viteLogo from '/vite.svg'
import sdaLogo  from './assets/sdalogo.svg'
import './App.css'
import { motion } from "framer-motion"
import ResponsiveAppBar from './ResponsiveAppBar'
import { Container, Typography } from '@mui/material'
import Hero1 from './Hero1'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useReducer } from 'react'
import ScrollAnim from './ScrollAnim'
import PanelAnim from './PanelAnim'
const serviceList=["service1","service2","service3"];
import CarouselImg from './CarouselImg'
import MainMarquee from './MainMarquee'
import { SectionContext } from './SectionContext'
import SpeedDialFn from './SpeedDialFn'
function App() {
  
   const se2=useRef(null);
  
  return (
  //<Hero logo={sdaLogo}/>
  
  <div className ='d1 z-100'>
 < div className='  flex  flex-col  w-full z-100'>
  
  
       
 
<NavBar/>
   <MainMarquee/>
   <Hero1/>
   
   <div className=' h-screen '>
      
   <section ref={se2} class="bg-black flex   h-screen z-100 " >
   <SectionContext.Provider value={se2}>
   </SectionContext.Provider>
</section>

</div>
<div className=' h-screen '>
   <section class="bg-green flex   h-screen z-100 " >
   
 
</section>
</div>

   </div>
   
    </div>
    
    
   
   
  )
}

export default App
