import React from 'react'
import Lottie from 'lottie-react';
import ScrollAnimation from './assets/ScrollAnimation.json'

export default function ScrollAnim() {
  return (
    <div class='h-10 w-10  mt-11 flex items-center'>
   
   
    <Lottie animationData={ScrollAnimation} loop={true}/>
    </div>
  )
}
