import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselImg({img}) {/*
  const img=[{img:"https://picsum.photos/800/600?random=1",
              h3text:"First slide label",
              ptext:"Nulla vitae elit libero, a pharetra augue mollis interdum."
    },{img:"https://picsum.photos/800/600?random=1",
    h3text:"First slide label",
    ptext:"Nulla vitae elit libero, a pharetra augue mollis interdum."
},{img:"https://picsum.photos/800/600?random=1",
h3text:"First slide label",
ptext:"Nulla vitae elit libero, a pharetra augue mollis interdum."
}]
  img.map((a,b)=>console.log(a,b))
*/

  return (
    <Carousel >
      {img.map((a,idx)=>(
      <Carousel.Item key={idx}>
      
          <img src={a.img} alt="" />
        <Carousel.Caption>
          <h3 className=' font-mono text-xl'>{a.h3text}</h3>
          <p className='  font-mono text-sm'>{a.ptext}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>

  )
}
export default CarouselImg;