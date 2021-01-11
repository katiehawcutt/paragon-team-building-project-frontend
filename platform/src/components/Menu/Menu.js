import React from 'react'
import styles from './Menu.module.css'

function Menu({ image }) {
    // function handleClick() {
    //     //add logout functioanlity
    // }

    return (
        <div className={styles.dropdown}>
            <button className={styles.userButton}>
                <img src={image} className={styles.userPhoto} alt="user" />
            </button>
            <div className={styles.dropdownContent}>
                <div>profile settings</div>
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
