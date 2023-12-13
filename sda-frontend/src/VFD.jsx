import React from 'react'
import CarouselImg from './CarouselImg';
import VFDMarquee from './VFDMarquee';
import automation from './assets/automation.png';
import Fb from './assets/F&b.png'
import material from './assets/material.png';
import process from './assets/Process.png'
import { Footer } from './Footer';
 function VFD() {
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
  return (
    <div className=' h-screen flex flex-col  mt-40 z-100 justify-center '>
      
       <div className='mt-10'></div>

        <div class="p-4 w-1/2 h-1/2 shadow-[0_0_30px_aqua] z-100   m-auto   mt-10 flex items-center ">
        <CarouselImg img={img}/>
        

</div>
<VFDMarquee/>

<hr></hr>
<Footer/>
 </div>

  )
}
export default VFD;