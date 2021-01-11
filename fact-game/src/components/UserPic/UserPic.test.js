import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserPic from './UserPic'

describe('UserPic component', () => {
    test('should render an image with correct src', () => {
        const { getByAltText } = render(
            <UserPic image={'/Images/userIcon.png'} />
        )
        const actual = getByAltText('user icon')
        const expected = '/Images/userIcon.png'
        expect(actual).toHaveAttribute('src', expected)
    })
    test('should render an image with correct src', () => {
        const { getByAltText } = render(<UserPic image={'/Images/Tick.png'} />)
        const actual = getByAltText('user icon')
        const expected = '/Images/Tick.png'
        expect(actual).toHaveAttribute('src', expected)
    })
})
