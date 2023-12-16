
import 'tailwindcss/tailwind.css'
import { motion } from "framer-motion";

import {  useScroll } from "framer-motion"

import ScrollAnim from './ScrollAnim';

import CarouselImg from './CarouselImg'
import automation from './assets/automation.png';
import Fb from './assets/F&b.png'
import material from './assets/material.png';
import process from './assets/Process.png'
import { SectionContext } from './SectionContext';
import { useContext } from 'react';
import SpeedDialFn from './SpeedDialFn';
import video from './assets/Eldon.mp4'

export default function Hero1(){


    const videourl="https://www.se.com/in/en/assets/380/video/199675/Header_Montage.mp4";
    const { scrollYProgress } = useScroll();
    const text="We Are Product And Solution Providers For Industries".split(" ");
    const text2="Smart Drives Automation (SDA) is a partnership firm founded and incorporated in 2018.SDA     started it’s operations as a sales and services support provider to leading multi-national vendors  in the arena of LV.".split(" ");
    const text3='LV Switchgears, Industrial automation ( SCADA, HMI & VFD ) with a special focus on connection and protection .'.split(" ");
    const img=[{img:automation,
              h3text:"Auto Mobile OEM & EU",
              ptext:"Key Focus in Industrial Automation ."
    },{img:Fb,
    h3text:"SS Enclosures",
    ptext:""
},{img:process,
h3text:"Electrical  Automation Products",
ptext:"LV Switchgear and Factory Automation Products with Protection Cabinet"
},{img:material,
h3text:"Electrical  Automation Products",
ptext:"Electrical Cabinets And Motors "
}]
const se2 = useContext(SectionContext);

const scrollToNextSection = () => {
  se2.current.scrollIntoView({ behavior: 'smooth' });
};
    return(
        
       
        <div className='z-100 h-screen  ' >
              
<section class=" flex  h-screen  flex-col z-100 " 
   >
    <video autoPlay loop muted className="absolute w-screen h-screen z-100 opacity-40 object-cover  ">
          <source src={video} type="video/mp4" />
        </video>
<div class="p-0  grid lg:grid-cols-2 gap-2 grid-cols-1 ">
<motion.div class=" lg:w-full sm:w-1/2  shadow-[0_0_30px_aqua] rounded-3xl rounded-r-4xl ml-10 mt-0  relative  flex items-center  "
  initial={{ y: 500 }} 
  animate={{ y: 100 }}
  transition={{ duration: 2 }} >

<div class="text-center display: block  text-emerald-900	 z-100 p-5  ">

    <h1 class="text-2xl sm:text-7xl text-center font-extrabold z-100  ">
        Smart Drives Automation 
    </h1>
    <p class="font-mono text-3xl mt-5 ">
        {
            text.map((a,b)=>(
                <motion.span
                initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: b / 10
          }}
          key={b}>
            {a}{" "}
          </motion.span>
            ))
        }
    </p>
    <p class="font-mono text-xl mt-10 z-0  ">
    {
            text2.map((a,b)=>(
                <motion.span
                initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: b / 10
          }}
          key={b}>
            {a}{" "}
          </motion.span>
            ))
        }
        
         </p>
<p class="font-mono text-xl mt-10 z-0  ">
{
            text3.map((a,b)=>(
                <motion.span
                initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: b / 10
          }}
          key={b}>
            {a}{" "}
          </motion.span>
            ))
        }

</p>


</div>
</motion.div>
<motion.div class="p-2 w-3/4  shadow-[0_0_30px_aqua] z-100 rounded-3xl  mx-auto  relative mt-0 flex items-center  "
  initial={{ y: 500 }} 
  animate={{ y: 100 }}
  transition={{ duration: 2 }} >

<CarouselImg img={img} h={650} x={250}/>
</motion.div>

</div>

<div class=" flex  justify-center h-7 m-auto  items-center ">
        
    <button onClick={scrollToNextSection} ><ScrollAnim/></button>
</div>
<SpeedDialFn/>
</section>

</div>




);
}
