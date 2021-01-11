import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '.'
import css from './Header.module.css'

describe('Header component', () => {
    test('should have correct classes', () => {
        const { getByTestId } = render(<Header />)
        const headerEl = getByTestId('header')
        const buttonEl = getByTestId('headerXButton')
        expect(headerEl).toHaveClass(css.header)
        expect(buttonEl).toHaveClass(css.xbutton)
    })
    test('button should have correct text content', () => {
        const { getByTestId } = render(<Header />)
        const buttonEl = getByTestId('headerXButton')
        expect(buttonEl).toHaveTextContent('X')
    })
})
