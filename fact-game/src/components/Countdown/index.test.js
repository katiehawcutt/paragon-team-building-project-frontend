import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Countdown from '.'
import css from './Countdown.module.css'

describe('Countdown component', () => {
    test('should have correct text and class', () => {
        const { getByTestId } = render(<Countdown secondsLeft={20} />)
        const el = getByTestId('countdown')
        expect(el).toHaveTextContent(20)
        expect(el).toHaveClass(css.countdown)
    })
    test('should have correct text and class', () => {
        const { getByTestId } = render(<Countdown secondsLeft={13} />)
        const el = getByTestId('countdown')
        expect(el).toHaveTextContent(13)
        expect(el).toHaveClass(css.countdown)
    })
    test('should have correct text and class', () => {
        const { getByTestId } = render(<Countdown secondsLeft={0} />)
        const el = getByTestId('countdown')
        expect(el).toHaveTextContent(0)
        expect(el).toHaveClass(css.countdown)
    })
})
