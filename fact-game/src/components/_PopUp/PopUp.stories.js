import React from 'react'
import PopUp from './PopUp'

// This default export determines where your story goes in the story list
export default {
    title: 'PopUp',
    component: PopUp,
}

const Template = (args) => <PopUp {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {}
