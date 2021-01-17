import React from 'react'
import styles from './LoginButton.module.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line
import { Button as ButtonChak } from '@chakra-ui/react'

function LoginButton({ color, text, link }) {
    return (
        <Link to="/login">
            <ButtonChak
                data-testid="ButtonChak"
                fontWeight="normal"
                paddingLeft="2rem"
                paddingRight="2rem"
                borderRadius="4"
                colorScheme={color}
                size="lg"
                variant="solid"
                className={styles.button1}
                style={{ backgroundColor: { color } }}
            >
                {text}
            </ButtonChak>
        </Link>
    )
}

export default LoginButton
