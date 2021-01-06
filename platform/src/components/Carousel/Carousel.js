import React from 'react'
import Carousel from 'react-elastic-carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import styles from './Carousel.module.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

function Carousel1() {
    return (
        <>
            <div className={styles.carousel_container}>
                <Carousel breakPoints={breakPoints}>
                    <CarouselItem>One</CarouselItem>
                    <CarouselItem>Two</CarouselItem>
                    <CarouselItem>Three</CarouselItem>
                    <CarouselItem>Four</CarouselItem>
                </Carousel>
            </div>
        </>
    )
}

export default Carousel1
