import React from 'react'
import ProfileSettings from './index'

export default {
    title: 'ProfileSettings',
    component: ProfileSettings,
}

const Template = (args) => <ProfileSettings {...args} />

export const ProfileSettingsStory = Template.bind({})
ProfileSettingsStory.args = {
    image: './Images/kh.png',
}
