import React from 'react'
import WhoseFact from './WhoseFactStorybook'

export default {
    title: 'WhoseFact',
    component: WhoseFact,
}

const Template = (args) => <WhoseFact {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    roundNumber: 1,
    facts: [
        `I hate cake very very much and can't even stand to be near it`,
        `I once did a skydive and my parachute failed but luckily a large bird saved me`,
    ],
    participants: ['Katie', 'Arshi', 'Natalie', 'Khang', 'Bradley'],
    secondsLeft: 10,
}
