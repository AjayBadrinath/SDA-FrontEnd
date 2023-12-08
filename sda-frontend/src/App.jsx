import { useState ,useRef,useEffect} from 'react'

import viteLogo from '/vite.svg'
import sdaLogo  from './assets/sdalogo.svg'
import './App.css'
import { motion } from "framer-motion"
import ResponsiveAppBar from './ResponsiveAppBar'
import { Container, Typography } from '@mui/material'
import Hero1 from './Hero1'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { useReducer } from 'react'
 const serviceList=["service1","service2","service3"];
function App() {
  
  
  useEffect(() => {
    const move = e => {
      document.body.style.setProperty('--mouse-x', e.clientX);
      document.body.style.setProperty('--mouse-y', e.clientY);
    };
    document.addEventListener("mousemove", move);
    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);
  

  
  return (
  //<Hero logo={sdaLogo}/>
  < body>
    
   <Hero1/>
    </body>
  )
}

export default App
