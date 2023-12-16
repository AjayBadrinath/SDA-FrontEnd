import React from 'react'
import CarouselImg from './CarouselImg';
import VFDMarquee from './VFDMarquee';
import siemenlvs from './assets/lvs/siemenlvs.jpg';
import lvs from './assets/lvs/lvschneider.jpg'
import abblvs from './assets/lvs/abblvs.jpg'
import { Footer } from './Footer';
 function VFD() {
  const img=[{img:siemenlvs,
    h3text:"LV SwitchGear And Control",
    ptext:"Key Focus in Switchgears ."
},{img:lvs,
  h3text:"LV SwitchGear And Control",
  ptext:"Key Focus in Switchgears ."
},{img:abblvs,
  h3text:"LV SwitchGear And Control",
  ptext:"Key Focus in Switchgears ."
}]
  return (
    <div className=' h-screen flex flex-col  mt-40 z-100 justify-center '>
      
       <div className='mt-10'></div>

        <div class="p-4 w-1/2 h-1/2 shadow-[0_0_30px_aqua] z-100   m-auto   mt-10 flex items-center ">
        <CarouselImg img={img} h={650} x={250}/>
        

</div>
<VFDMarquee/>

<hr></hr>
<Footer/>
 </div>

  )
}
export default VFD;