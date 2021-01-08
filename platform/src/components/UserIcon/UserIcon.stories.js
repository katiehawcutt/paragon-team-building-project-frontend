import React from 'react'
import UserIcon from './UserIcon'

export default {
    title: 'UserIcon',
    component: UserIcon,
}

const Template = (args) => <UserIcon {...args} />

export const UserPicStory = Template.bind({})
UserPicStory.args = {
    imageSrc: './Images/kh.jpg',
}
