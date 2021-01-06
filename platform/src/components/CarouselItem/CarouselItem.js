import React from 'react'
import styles from './CarouselItem.module.css'

export default function CarouselItem({ image }) {
    // function handleClick(){

    // }

    return (
        <div className={styles.imageButtonContainer}>
            <button
                className={styles.carouselItem_container}
                // onClick={handleClick}
            ></button>
        </div>
    )
}

//TODO - Create links to different games
