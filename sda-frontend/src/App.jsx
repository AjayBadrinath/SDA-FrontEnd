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
function App() {
  
  const videourl="https://www.se.com/in/en/assets/380/video/199675/Header_Montage.mp4";
  useEffect(() => {
    const move = e => {
      const mouseelem=document.querySelector('.d1');
      mouseelem.style.setProperty('--mouse-x', e.clientX);
      mouseelem.style.setProperty('--mouse-y', e.clientY);
      
    };
    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
    };
    
  }, []);

  
  return (
  //<Hero logo={sdaLogo}/>
  <div className ='d1 z-100'>
 < div className='  flex  flex-col  w-full z-100'>
  
  <video autoPlay loop muted className="absolute  w-full opacity-20 z-0 object-cover  h-screen">
         <source src={videourl} type="video/mp4" />
       </video>
   
       
       <NavBar/>  

   <Hero1/>
   <div className=' h-screen '>
   <section class="bg-black flex   h-screen z-100 " >


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
