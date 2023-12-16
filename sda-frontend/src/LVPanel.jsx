import React from 'react'
import { Footer } from './Footer';
import lp from './assets/mcc.jpg'
 function LVPanel() {

  return (
    <>
        <div className=' h-screen flex flex-col  mt-40 z-0 justify-center text-xl sm:text-3xl text-white text-center font-extrabold'>
        <h2 className='mt-5 text-align: center'>LV Panels</h2>
       <div className='mt-10'></div>
       
        <div class=" w-1/2 h-full shadow-[0_0_30px_aqua] z-0   m-auto   mt-10 flex items-center ">
        <img src={lp} style={{width: 650, height: 650}} alt="" />
        

        

</div>
<div className='mt-10'></div>

 </div>
 <hr></hr>

<Footer/>
</>
  )
}
export default LVPanel;