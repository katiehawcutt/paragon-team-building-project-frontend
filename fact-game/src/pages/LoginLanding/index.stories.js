import React from 'react'
import LoginLanding from './index'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'LoginLanding',
    component: LoginLanding,
}

const Template = (args) => (
    <BrowserRouter>
        <LoginLanding {...args} />
    </BrowserRouter>
)

export const FirstStory = Template.bind({})
FirstStory.args = {}
