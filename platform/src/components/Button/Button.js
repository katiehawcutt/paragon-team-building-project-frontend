import React from 'react'
import styles from './Button.module.css'
import { FaGooglePlay } from 'react-icons/fa'
// eslint-disable-next-line
import { Button as ButtonChak } from '@chakra-ui/react'

function Button({ color, text, link }) {
    return (
        <ButtonChak
            data-testid="ButtonChak"
            fontWeight="normal"
            paddingLeft="2rem"
            paddingRight="2rem"
            borderRadius="4"
            leftIcon={<FaGooglePlay />}
            colorScheme={color}
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
