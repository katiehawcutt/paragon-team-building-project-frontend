import React from 'react'
import styles from './Menu.module.css'

function Menu({ image }) {
    // function handleClick() {
    //     //add logout functioanlity
    // }

    return (
        <div className={styles.dropdown}>
            <button className={styles.userButton}>
                <img src={image} className={styles.userPhoto}></img>
            </button>
            <div className={styles.dropdownContent}>
                <a href="#">profile settings</a>
                <button
                    className={styles.logoutBtn} /* onClick={handleClick} */
                >
                    log out
                </button>
            </div>
        </div>
    )
}

export default Menu
