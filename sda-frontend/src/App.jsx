import { useState } from 'react'

import viteLogo from '/vite.svg'
import sdaLogo  from './assets/sdalogo.svg'
import './App.css'
import { motion } from "framer-motion"
import ResponsiveAppBar from './ResponsiveAppBar'
import { Container, Typography } from '@mui/material'
import Hero1 from './Hero1'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
 const serviceList=["service1","service2","service3"];
function App() {
  return (
  //<Hero logo={sdaLogo}/>
  <body >
   <Hero1/>
    </body>
  )
}

export default App
