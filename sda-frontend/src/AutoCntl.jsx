import CarouselImg from './CarouselImg';
import siemenad from './assets/aandd/siemensad.jpg';
import schad from './assets/aandd/schad.jpg';
import rockwellad from './assets/aandd/rockwellad.jpg'
import abbad from './assets/aandd/abbad.jpg'
import { Footer } from './Footer';
import AutomationMarquee from './AutomationMarquee';
 function AutoCntl() {
  const img=[{img:siemenad,
    h3text:"Automation And Control",
    ptext:"Key Focus in Industrial Automation ."
},{img:schad,
    h3text:"Automation And Control",
    ptext:"Key Focus in Industrial Automation ."
},{img:rockwellad,
    h3text:"Automation And Control",
    ptext:"Key Focus in Industrial Automation ."
},{img:abbad,
    h3text:"Automation And Control",
    ptext:"Key Focus in Industrial Automation ."
  }]
  return (
    <div className=' h-screen flex flex-col  mt-40 z-100 justify-center '>
      
       <div className='mt-10'></div>

        <div class="p-4 w-1/2 h-1/2 shadow-[0_0_30px_aqua] z-100   m-auto   mt-10 flex items-center ">
        <CarouselImg img={img} h={650} x={250}/>
        

</div>
<AutomationMarquee/>

<hr></hr>
<Footer/>
 </div>

  )
}
export default AutoCntl;