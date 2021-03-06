import React from 'react'
import RevealTimer from './index'

// This default export determines where your story goes in the story list
export default {
    title: 'RevealTimer',
    component: RevealTimer,
}

const Template = (args) => <RevealTimer {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    title: 'These facts belonged to...',
    roundNumber: 1,
    secondsLeft: 10,
}

export const SecondStory = Template.bind({})
SecondStory.args = {
    title: 'The true fact is...',
    roundNumber: 1,
    secondsLeft: 10,
}
