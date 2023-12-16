import CarouselImg from './CarouselImg';
import nvent1 from './assets/enclosure/nvent1.jpg';
import nvent2 from './assets/enclosure/nvent2.jpg';
import nvent3 from './assets/enclosure/nvent3.jpg'
import nvent4 from './assets/enclosure/nvent4.jpg'
import { Footer } from './Footer';
import NventMarquee from './NventMarquee';
 function Panel() {
  const img=[{img:nvent1,
    h3text:"Panels And Enclosures",
    ptext:"Key Focus in Nvent Hoffman Panels ."
},{img:nvent2,
    h3text:"Panels And Enclosures",
    ptext:"Key Focus in Nvent Hoffman Panels ."
},{img:nvent3,
    h3text:"Panels And Enclosures",
    ptext:"Key Focus in Nvent Hoffman Panels ."
},{img:nvent4,
    h3text:"Panels And Enclosures",
    ptext:"Key Focus in Nvent Hoffman Panels ."
  }]
  return (
    <div className=' h-screen flex flex-col  mt-40 z-100 justify-center '>
      
       <div className='mt-10'></div>

        <div class="p-4 w-1/2 h-1/2 shadow-[0_0_30px_aqua] z-100   m-auto   mt-10 flex items-center ">
        <CarouselImg img={img} h={650} x={250}/>
        

</div>
<NventMarquee/>

<hr></hr>
<Footer/>
 </div>

  )
}
export default Panel;