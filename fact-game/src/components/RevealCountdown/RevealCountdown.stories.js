import React from 'react'
import RevealCountdown from './RevealCountdown'

// This default export determines where your story goes in the story list
export default {
    title: 'RevealCountdown',
    component: RevealCountdown,
}

const Template = (args) => <RevealCountdown {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    secondsLeft: 10,
}
