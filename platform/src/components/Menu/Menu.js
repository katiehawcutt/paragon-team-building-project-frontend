import React from 'react'
import styles from './Menu.module.css'

function Menu({ image }) {
    // function handleClick() {
    //     //add logout functioanlity
    // }

    return (
        <div class={styles.dropdown}>
            <button
                class={styles.dropbtn}
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
            <div class={styles.dropdownContent}>
                <a href="#">profile settings</a>
                <button class={styles.logoutBtn} /* onClick={handleClick} */>
                    log out
                </button>
            </div>
        </div>
    )
}

export default Menu
