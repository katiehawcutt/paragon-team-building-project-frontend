import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import GameCard from './GameCard'

const testProps = {
    text: 'gameTitle1',
    image: '../../Images_2/garticImg.png',
}

test('should be correct game title in H2 tag', () => {
    const container = render(<GameCard {...testProps} />)
    const el = container.getByText(/Title1/)
    expect(el).toHaveTextContent('gameTitle1')
    expect(el.tagName).toBe('H2')
})

test('should be correct image', () => {
    const container = render(<GameCard {...testProps} />)
    const el = container.getByTestId('testGameCard')
    expect(el).toHaveAttribute('src', testProps.image)
})

test('should be correct image className', () => {
    const container = render(<GameCard {...testProps} />)
    const el = container.getByTestId('testGameCard')
    expect(el.className).toBe('gameIcon')
})

test('Image should be in image tag', () => {
    const container = render(<GameCard {...testProps} />)
    const el = container.getByTestId('testGameCard')
    expect(el.tagName).toBe('IMG')
})
