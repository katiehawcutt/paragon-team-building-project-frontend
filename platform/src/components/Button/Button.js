import React from 'react'
import styles from './Button.module.css'
import { Icon } from '@chakra-ui/react'
import { FaGooglePlay } from 'react-icons/fa'
import { Button as ButtonChak, ButtonGroup } from '@chakra-ui/react'

function Button({ color, text, link }) {
    return (
        //     <button
        //         className={styles.button1}
        //         style={{ backgroundColor: { color } }}
        //         onClick={() => {
        //             window.open(link)
        //         }}
        //     >
        //         {text}
        //     </button>
        // )

        <ButtonChak
            data-testid="ButtonChak"
            leftIcon={<FaGooglePlay />}
            colorScheme="#FE4042"
            size="lg"
            variant="solid"
            className={styles.button1}
            style={{ backgroundColor: { color } }}
            onClick={() => {
                window.open(link)
            }}
        >
            {text}
        </ButtonChak>
    )
}

export default Button
