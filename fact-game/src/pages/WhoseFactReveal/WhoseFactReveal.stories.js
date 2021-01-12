import React from 'react'
import WhoseFactReveal from './index'

export default {
    title: 'WhoseFactReveal',
    component: WhoseFactReveal,
}

const Template = (args) => <WhoseFactReveal {...args} />

export const WhoseFactRevealStory = Template.bind({})
WhoseFactRevealStory.args = {
    displayName: 'Katie',
    roundNumber: 1,
    leaderboard: [
        { displayName: 'Maroon', position: 1, score: 10 },
        { displayName: 'Teal', position: 2, score: 9 },
        { displayName: 'Francis', position: 3, score: 5 },
    ],
}
