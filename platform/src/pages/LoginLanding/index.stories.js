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

export const ProfilesStory = Template.bind({})
ProfilesStory.args = {}
