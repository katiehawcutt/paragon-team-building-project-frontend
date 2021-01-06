import React from 'react'
import styles from './CarouselItem.module.css'

export default function CarouselItem({ image, link }) {
    return (
        <div className={styles.imageButtonContainer}>
            <button
                className={styles.carouselItem_container}
                style={{
                    backgroundImage: `url(${image})`,
                }}
                onClick={() => {
                    window.open(link)
                }}
            ></button>
        </div>
    )
}
