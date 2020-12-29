import React from 'react'
import ChooseFalseFact from './ChooseFalseFact'

// This default export determines where your story goes in the story list
export default {
    title: 'ChooseFalseFact',
    component: ChooseFalseFact,
}

const Template = (args) => <ChooseFalseFact {...args} />

export const FirstStory = Template.bind({})
