import React from 'react'
import styles from './Button.module.css'
// import { Icon } from '@chakra-ui/react'
// import { FaGooglePlay } from 'react-icons/fa'

function Button({ color, text, selected, handleClick }) {
    return (
        <button
            className={styles.button1}
            style={{ backgroundColor: { color } }}
            onClick={handleClick}
        >
            {text}
        </button>
    )

    // ;<Stack direction="row" spacing={4}>
    //     <Button
    //         leftIcon={<FaGooglePlay />}
    //         colorScheme="#FE4042"
    //         size="lg"
    //         variant="solid"
    //     >
    //         {text}
    //     </Button>
    // </Stack>
}

export default Button

//Todo - change hardcoded data
