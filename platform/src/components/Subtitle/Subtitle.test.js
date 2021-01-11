import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Subtitle from './Subtitle'

const testProps = {
    text: 'This is a gaming platform',
}

test('Should have correct class', () => {
    const container = render(<Subtitle {...testProps} />)
    const el = container.getByText(/platform/)
    expect(el.className).toEqual('subtitle')
})

test('Should show correct text', () => {
    const container = render(<Subtitle {...testProps} />)
    const el = container.getByText(/platform/)
    expect(el).toHaveTextContent('This is a gaming platform')
})

test('Should be a h2', () => {
    const container = render(<Subtitle {...testProps} />)
    const el = container.getByText(/platform/)
    expect(el.tagName).toEqual('H2')
})
