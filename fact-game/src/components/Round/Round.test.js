import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Round from './Round'
import css from './Round.module.css'

describe('Round component', () => {
    const roundNumbers = Array.from({ length: 1 }, (_, i) => i + 1)

    roundNumbers.forEach((roundNumber) => {
        const props = { roundNumber }
        const container = render(<Round {...props} />)
        const el = container.getByText(/Round #/)

        it('should have correct text', () => {
            expect(el).toHaveTextContent(`Round #${roundNumber}`)
        })

        it('should have correct class', () => {
            expect(el).toHaveClass(css.RoundLabel)
        })
    })
})
