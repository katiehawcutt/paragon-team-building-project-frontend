import React from 'react'
import HandleLogout from './index'

export default {
    title: 'HandleLogout',
    component: HandleLogout,
}

const Template = (args) => <HandleLogout {...args} />

export const MenuStory = Template.bind({})
MenuStory.args = {}
