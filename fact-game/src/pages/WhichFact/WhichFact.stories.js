import React from 'react'
import WhichFact from './index'

export default {
    title: 'WhichFact',
    component: WhichFact,
}

const Template = (args) => <WhichFact {...args} />

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
