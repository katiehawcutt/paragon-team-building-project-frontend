import React from 'react'
import ChooseFalseFact from './ChooseFalseFact'

// This default export determines where your story goes in the story list
export default {
    title: 'ChooseFalseFact',
    component: ChooseFalseFact,
}

const Template = (args) => <ChooseFalseFact {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
    roundNumber: 1,
    facts: [
        'I once did a skydive and the parachute got stuck for a few minutes and I thought I was going to die',
        "I hate cheese because it makes my nose turn blue and I can't stop sneezing",
    ],
    handleClick: function handleClick() {
        console.log('Click handled!')
    },
    secondsLeft: 10,
    turnId: 2162587236189237,
}

// export const SecondStory = Template.bind({})

// SecondStory.args = {
//     roundNumber: 2,
//     facts: ['I have a cat', 'I hate cheese'],
//     handleClick: function handleClick() {
//         console.log('Click handled!')
//     },
//     secondsLeft: 10,
//     turnId: 2162587236189237,
// }
