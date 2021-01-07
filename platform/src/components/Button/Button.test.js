import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from './Button'
import styles from './Button.module.css'

describe('Button component', () => {
    it('should contain button text', () => {
        const props = {
            color: '#FE4042',
            text: 'Play Now!',
            link: 'https://the-fact-game.netlify.app',
        }
        const container = render(<Button {...props} />)
        const el = container.getByTestId('ButtonChak')
        expect(el).toHaveTextContent(props.text)
    })
})
