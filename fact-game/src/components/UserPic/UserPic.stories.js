import React from 'react'
import UserPic from './UserPic'

// This default export determines where your story goes in the story list
export default {
    title: 'UserPic',
    component: UserPic,
}

const Template = (args) => <UserPic {...args} />

export const UserPicStory = Template.bind({})
UserPicStory.args = {
    image: '/images/userIcon.png',
}
