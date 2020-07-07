import React from 'react'
import './CarouselSlide.scss'


const CarouselSlide = (props) => {
    return (
        <div className="carousel-slide">
            <img src={props.slide.img} alt=""></img>
        </div>
    ) 
}

export default CarouselSlide
