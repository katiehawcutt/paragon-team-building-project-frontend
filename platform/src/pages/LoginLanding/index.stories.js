import React from 'react'
import LoginLanding from './index'

export default {
    title: 'LoginLanding',
    component: LoginLanding,
}

const Template = (args) => <LoginLanding {...args} />

export const ProfilesStory = Template.bind({})
ProfilesStory.args = {}
