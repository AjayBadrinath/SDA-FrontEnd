import Lottie from 'lottie-react';

import { Footer } from './Footer';
import submitted from './assets/Submitted.json'
function Submitted(){
  return (
    <>
        <div className=' h-1/2 flex flex-col  mt-20 z-0 justify-center items-center '>
      
       <div className='mt-10 h-1/2 w-1/2 justify-center items-center'>

        
        <Lottie animationData={submitted}  loop={true}/>
        </div>


<br></br>
<br></br>
<br></br>
<hr></hr>
<Footer/>
 </div>
 
</>
  )
}
export default Submitted;