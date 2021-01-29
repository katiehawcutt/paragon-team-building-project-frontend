import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Title from './index'

const testProps = {
    text: 'Welcome Bootcampers!',
}

test('Should contain correct class', () => {
    const container = render(<Title {...testProps} />)
    const el = container.getByText(/Welcome/)
    expect(el).toHaveClass('title')
})

test('Should contain correct text', () => {
    const container = render(<Title {...testProps} />)
    const el = container.getByText(/Welcome/)
    expect(el).toHaveTextContent(testProps.text)
})

test('Should be a h1', () => {
    const container = render(<Title {...testProps} />)
    const el = container.getByText(/^Welcome Bootcampers!$/)
    expect(el.tagName).toEqual('H1')
})
