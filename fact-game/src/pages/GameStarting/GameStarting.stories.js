import React from 'react'
import GameStarting from './GameStarting'

// This default export determines where your story goes in the story list
export default {
    title: 'GameStarting',
    component: GameStarting,
}

const Template = (args) => <GameStarting {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {}
