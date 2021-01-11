import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Background from './Background'

const testProps = {
    image: '../../Images_2/game-controller-bg.png',
}

test('Should show correct image', () => {
    const container = render(<Background {...testProps} />)
    const el = container.getByTestId('background')
    expect(el).toHaveStyle('backgroundImage: `url(${image})`')
})

test('Should have correct class', () => {
    const container = render(<Background {...testProps} />)
    const el = container.getByTestId('background')
    expect(el).toHaveClass('background_container')
})
