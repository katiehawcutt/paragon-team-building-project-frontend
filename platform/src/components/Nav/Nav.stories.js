import React from 'react'
import Nav from './Nav'

export default {
    title: 'Nav',
    component: Nav,
}

const Template = (args) => <Nav {...args} />

export const NavBarStory = Template.bind({})
NavBarStory.args = {}
