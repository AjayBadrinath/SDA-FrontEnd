import { useState ,useRef,useEffect} from 'react'
import NavBar from './NavBar'
import viteLogo from '/vite.svg'
import sdaLogo  from './assets/sdalogo.svg'
import './App.css'
import { motion } from "framer-motion"
import ResponsiveAppBar from './ResponsiveAppBar'
import { Container, Typography } from '@mui/material'
import Hero1 from './Hero1'
import { Footer } from './Footer'
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
 < div className='  flex  flex-col  w-full z-100 '  >
  
  
       
 
<NavBar/>
   <MainMarquee/>
   <Hero1/>
   
   <div className=' h-screen '>
      
   <section ref={se2} className=" z-0 h-screen flex  justify-center bg-black" >
      
      <div class="p-0 h-screen  flex gap-4  ">
<motion.div class=" lg:w-1/3 sm:w-1/2  shadow-[0_0_50px_red] rounded-3xl rounded-r-4xl ml-10 mt-0  m-auto   flex items-center  "
  initial={{ y: 500 }} 
  animate={{ y: 100 }}
  transition={{ duration: 2 }} >

<div class="text-center display: block  text-white	 z-0 p-2  ">

<h1 class="text-xl sm:text-xl text-center font-extrabold z-0  ">
        Our Goal
    </h1>
    <p class="font-mono text-3xl mt-5 ">
 SDA’s goal is to provide customers with timely and quality sales and service support 
with the latest technological innovations and competitive pricing to give customers the 
most complete solution to their utmost satisfaction. 
    </p>


</div>
</motion.div>
<motion.div class=" lg:w-1/3 sm:w-1/2  shadow-[0_0_50px_green] rounded-3xl rounded-r-4xl ml-10 mt-0  m-auto   flex items-center  "
  initial={{ y: 500 }} 
  animate={{ y: 100 }}
  transition={{ duration: 2 }} >

<div class="text-center display: block  text-white	 z-0 p-2  ">

<h1 class="text-xl sm:text-xl text-center font-extrabold z-0  ">
        Our Values
    </h1>
    <p class="font-mono text-3xl mt-5 ">
    SDA will maintain its professional ethics and moral values and will leave no stone 
unturned to assure complete client satisfaction. We believe in the power of team spirit 
and team work.We will ensure an environment of mutual respect and professionalism 
throughout. 
    </p>


</div>
</motion.div>
<motion.div class=" lg:w-1/3 sm:w-1/2  shadow-[0_0_50px_blue] rounded-3xl rounded-r-4xl ml-10 mt-0  m-auto   flex items-center  "
  initial={{ y: 500 }} 
  animate={{ y: 100 }}
  transition={{ duration: 2 }} >

<div class="text-center display: block  text-white	 z-0 p-2  ">

<h1 class="text-xl sm:text-xl text-center font-extrabold z-0  ">
        Why SDA?
    </h1>
    <p class="font-mono text-3xl mt-5 ">
    At SDA, we believe in a unique philosophy toward providing industrial automation 
services to our clients, backed by an unflinching dedication to its practice. The 
essence of this is the following:
    </p>
    <ul class="font-mono text-sm mt-5">
      <li>
      Commitment to deliver
      </li>
      <li>
       Enter into hassle-free, trust-based and result-oriented relationships with stakeholders

      </li>
      <li>
      Be driven by customer requirements.
      </li>
    </ul>


</div>
</motion.div>
</div>

</section>

</div>
<div>
   <br></br>
   <Footer></Footer>
</div>
 

   </div>
   
    </div>

    
   
   
  )
}

export default App
