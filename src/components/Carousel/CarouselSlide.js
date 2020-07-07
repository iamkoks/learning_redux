import React from 'react'

import './CarouselSlide.scss'

const CarouselSlide = (props) => {
    const onChange = () =>{
        
    }

   return (
    <div className="carousel-slide" onClick={() => onChange()}>
        <img src={props.slide.img} alt=""></img>
    </div>
    
   ) 
}

export default CarouselSlide
