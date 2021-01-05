import React from 'react'
import styles from "./Background.module.css"

function Background() {
    return <>
      <img className={styles.bgImage} src="../../images/game-controller-bg.png">
    </>
}

export default Background

{/* Todo: create div element for background image and state the vh, vw.
add image as bg in css */}