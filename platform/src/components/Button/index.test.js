import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from './index'

const testProps = {
    color: '#FE4042',
    text: 'Play Now!',
    link: 'https://the-fact-game.netlify.app',
}

/* 
Displays correct text
Displays correct color
onClick function goes to correct link
*/

test('displays correct text', () => {
    const container = render(<Button {...testProps} />)
    const el = container.getByText(/Play Now!/)
    expect(el).toHaveTextContent('Play Now!')
})

// test('display correct colour', () => {
//     const container = render(<ButtonChak {...testProps} />)
//     const el = container.getByTestId('ButtonChak')
//     expect(el).toHaveAttribute('style', 'backgroundColor: #FE4042')
// })

// test('onClick correct url called', () => {
//     const container = render(<Button {...testProps} />)
//     global.open = jest.fn()
//     expect(global.open).toBeCalled()
// })

//To Complete
