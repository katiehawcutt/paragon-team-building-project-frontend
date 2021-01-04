import React from 'react'
import Podium from './Podium'

// This default export determines where your story goes in the story list
export default {
    title: 'Podium',
    component: Podium,
}

const Template = (args) => <Podium {...args} />

export const PodiumStory = Template.bind({})
PodiumStory.args = {}
