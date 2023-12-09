import React from 'react'
import Lottie from 'lottie-react';
import PanelAnimation from './assets/panel.json'

export default function PanelAnim() {
  return (
    <div className='z-1000'>
   
   
    <Lottie animationData={PanelAnimation}  loop={true}/>
    </div>
  )
}
