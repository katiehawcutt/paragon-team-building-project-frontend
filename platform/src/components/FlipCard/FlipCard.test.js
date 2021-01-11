import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import FlipCard from './FlipCard'

const testProps = {
    imageSrc: '../../Images_2/userIcon.png',
    personName: 'Calvin',
    bio: 'I love to code',
}

test('Should show correct name, class and be H1', () => {
    const container = render(<FlipCard {...testProps} />)
    const el = container.getByTestId('flipCardTest')
    expect(el).toHaveTextContent(testProps.personName)
    expect(el.tagName).toBe('H1')
    expect(el.className).toBe('personName')
})

test('Bio should be correct and in a p tag', () => {
    const container = render(<FlipCard {...testProps} />)
    const el = container.getByText(/^I love to code$/)
    expect(el).toHaveTextContent(testProps.bio)
    expect(el.tagName).toBe('P')
})
