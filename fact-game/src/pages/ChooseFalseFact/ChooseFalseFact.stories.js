import React from 'react'
import ChooseFalseFact from './index'

export default {
    title: 'ChooseFalseFact',
    component: ChooseFalseFact,
}

const Template = (args) => <ChooseFalseFact {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    roundNumber: 1,
    displayName: 'Katie',
    facts: [
        'I once cycled across South America with my best friend',
        'I used to drive a Mini',
    ],
    // handleAnswer: handleAnswer,
    secondsLeft: 5,
    // turnId,
}
