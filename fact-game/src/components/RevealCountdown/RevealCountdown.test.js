import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RevealCountdown from './RevealCountdown'
import css from './RevealCountdown.module.css'

describe('Reveal Countdown component', () => {
    test('should have correct text and class', () => {
        const { getByTestId } = render(<RevealCountdown secondsLeft={3} />)
        const el = getByTestId('revealCountdown')
        expect(el).toHaveTextContent(3)
        expect(el).toHaveClass(css.revealCountdown)
    })
    test('should have correct text and class', () => {
        const { getByTestId } = render(<RevealCountdown secondsLeft={1} />)
        const el = getByTestId('revealCountdown')
        expect(el).toHaveTextContent(1)
        expect(el).toHaveClass(css.revealCountdown)
    })
    test('should have correct text and class', () => {
        const { getByTestId } = render(<RevealCountdown secondsLeft={0} />)
        const el = getByTestId('revealCountdown')
        expect(el).toHaveTextContent(0)
        expect(el).toHaveClass(css.revealCountdown)
    })
})
