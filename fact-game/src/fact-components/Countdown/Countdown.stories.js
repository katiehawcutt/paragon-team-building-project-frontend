import React from 'react'
import Countdown from './Countdown'

// This default export determines where your story goes in the story list
export default {
    title: 'Countdown',
    component: Countdown,
}

const Template = (args) => <Countdown {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    secondsLeft: 10,
}
