import React from 'react'
import { Carousel } from 'antd';
import { connect } from 'react-redux'
import CarouselSlide from './CarouselSlide';


const BookCarousel = ({ myCarousel }) => {
    return (
        <Carousel autoplay={true}>
            {myCarousel.map((slide, index) => <CarouselSlide slide={slide} key={index}/>)}
        </Carousel>
    )
}

const mapStateToProps = state => {
    return {
        myCarousel : state.carousels.carousels
    }
}

export default connect(mapStateToProps, null)(BookCarousel)
