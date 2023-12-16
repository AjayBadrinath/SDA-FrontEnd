import React from 'react'
import pdf from './assets/company_profile.pdf'
import { Footer } from './Footer';

 function CompanyProfile() {

  return (
    <>
        <div className=' h-screen flex flex-col  mt-40 z-0 justify-center text-xl sm:text-3xl text-white text-center font-extrabold'>
        <h2 className='mt-5 text-align: center'>Company Profile </h2>
       <div className='mt-10'></div>
       
        <div class=" w-1/2 h-1/2 shadow-[0_0_30px_aqua] z-0   m-auto   mt-10 flex items-center ">
        
        <iframe src={pdf} width="100%" height="100%"></iframe>

        

</div>
<div className='mt-10'></div>
<hr></hr>

<Footer/>
 </div>
 
</>
  )
}
export default CompanyProfile;