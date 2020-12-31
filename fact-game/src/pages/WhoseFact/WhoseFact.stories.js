import React from 'react'
import WhoseFact from './WhoseFact'

export default {
    title: 'WhoseFact',
    component: WhoseFact,
}

const Template = (args) => <WhoseFact {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {}
