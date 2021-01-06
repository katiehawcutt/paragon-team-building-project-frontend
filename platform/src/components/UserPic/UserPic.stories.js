import React from 'react'
import UserPic from './UserPic'

export default {
    title: 'UserPic',
    component: UserPic,
}

const Template = (args) => <UserPic {...args} />

export const UserPicStory = Template.bind({})
UserPicStory.args = {}