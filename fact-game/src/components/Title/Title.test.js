import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Title from './Title'
import css from './Title.module.css'

describe('Title component', () => {
    test('should have correct text and class', () => {
        const { getByTestId } = render(
            <Title text={'We really love the Fact game!'} />
        )
        const el = getByTestId('Title')
        expect(el).toHaveTextContent('We really love the Fact game!')
        expect(el).toHaveClass(css.title)
    })
    test('should have correct text and class', () => {
        const { getByTestId } = render(<Title text={'Whoose Facts?'} />)
        const el = getByTestId('Title')
        expect(el).toHaveTextContent('Whoose Facts?')
        expect(el).toHaveClass(css.title)
    })
    test('should have correct text and class', () => {
        const { getByTestId } = render(<Title text={''} />)
        const el = getByTestId('Title')
        expect(el).toHaveTextContent('')
        expect(el).toHaveClass(css.title)
    })
})
