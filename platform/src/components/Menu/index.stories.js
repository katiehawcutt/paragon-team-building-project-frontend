import React from 'react'
import Menu from './index'

export default {
    title: 'Menu',
    component: Menu,
}

const Template = (args) => <Menu {...args} />

export const MenuStory = Template.bind({})
MenuStory.args = {
    image: './Images/kh.png',
}
