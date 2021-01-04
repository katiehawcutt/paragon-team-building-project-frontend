import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Fact from './Fact'
import css from './Fact.module.css'

describe('Fact component', () => {
    it('should contain the fact text', () => {
        const props = {
            factText: 'I once weighed 47.3 stones.',
            selected: false,
            handleClick: jest.fn(),
        }
        const container = render(<Fact {...props} />)
        const el = container.getByText(/I once/)
        expect(el).toHaveTextContent(props.factText)
    })

    it('should invoke handleClick when clicked', () => {
        const props = {
            factText: 'I once weighed 47.3 stones.',
            selected: false,
            handleClick: jest.fn(),
        }
        const container = render(<Fact {...props} />)
        const el = container.getByText(/I once/)
        fireEvent.click(el)
        expect(props.handleClick).toHaveBeenCalledTimes(1)
    })

    it('should have Fact class', () => {
        const props = {
            factText: 'I once weighed 47.3 stones.',
            selected: false,
            handleClick: jest.fn(),
        }
        const container = render(<Fact {...props} />)
        const el = container.getByText(/I once/)
        expect(el).toHaveClass(css.Fact)
    })

    it('should not have FactSelected class when not selected', () => {
        const props = {
            factText: 'I once weighed 47.3 stones.',
            selected: false,
            handleClick: jest.fn(),
        }
        const container = render(<Fact {...props} />)
        const el = container.getByText(/I once/)
        expect(el).not.toHaveClass(css.FactSelected)
    })

    it('should have FactSelected class when selected', () => {
        const props = {
            factText: 'I once weighed 47.3 stones.',
            selected: true,
            handleClick: jest.fn(),
        }
        const container = render(<Fact {...props} />)
        const el = container.getByText(/I once/)
        expect(el).toHaveClass(css.FactSelected)
    })
})
