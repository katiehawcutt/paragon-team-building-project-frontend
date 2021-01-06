import React from 'react'
import Home from './Home'

export default {
    title: 'Home',
    component: Home,
}

const Template = (args) => <Home {...args} />

export const HomeStory = Template.bind({})
HomeStory.args = {}

/* 
Create carousel component
Create image button component with link
 */
