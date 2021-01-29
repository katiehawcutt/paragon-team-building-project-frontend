import React from 'react'
import Profiles from './index'

export default {
    title: 'Profiles',
    component: Profiles,
}

const Template = (args) => <Profiles {...args} />

export const ProfilesStory = Template.bind({})
ProfilesStory.args = {}
