import React from 'react'
import Carousel from 'react-elastic-carousel'
import CarouselItem from '../CarouselItem/CarouselItem'
import styles from './Carousel.module.css'
import garticImg from '../../Images_2/garticImg.png'
import amongUsImg from '../../Images_2/amongUsImg.png'
import scattegoriesImg from '../../Images_2/scattegoriesImg.png'
import chessImg from '../../Images_2/chessImg.png'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

function Carousel1() {
    const link = [
        'https://gartic.io/',
        'https://apps.apple.com/us/app/among-us/id1351168404',
        'https://swellgarfo.com/scattergories/',
        'https://www.sparkchess.com/',
    ]

    return (
        <>
            <div className={styles.carousel_container}>
                <Carousel breakPoints={breakPoints}>
                    <CarouselItem link={link[0]} image={garticImg}>
                        One
                    </CarouselItem>
                    <CarouselItem link={link[1]} image={amongUsImg}>
                        Two
                    </CarouselItem>
                    <CarouselItem link={link[2]} image={scattegoriesImg}>
                        Three
                    </CarouselItem>
                    <CarouselItem link={link[3]} image={chessImg}>
                        Four
                    </CarouselItem>
                </Carousel>
            </div>
        </>
    )
}

export default Carousel1
