import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserIcon from './UserIcon'

const testProps = {
    imageSrc: '../../Images_2/userIcon.png',
}

test('Should show correct image and correct className', () => {
    const container = render(<UserIcon {...testProps} />)
    const el = container.getByTestId('userTest')
    expect(el).toHaveAttribute('src', testProps.imageSrc)
    expect(el.className).toBe('userPhoto')
})

test('Should be an image tag', () => {
    const container = render(<UserIcon {...testProps} />)
    const el = container.getByTestId('userTest')
    expect(el.tagName).toBe('IMG')
})
