import React from 'react'
import Podium from './Podium'

// This default export determines where your story goes in the story list
export default {
    title: 'Podium',
    component: Podium,
}

const Template = (args) => <Podium {...args} />

export const PodiumStory = Template.bind({})
PodiumStory.args = {
    leaderboard: [
        { displayName: 'Khang', score: 15 },
        { displayName: 'Natalie', score: 7 },
        { displayName: 'Bradley', score: 5 },
        { displayName: 'Arshi', score: 3 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
        { displayName: 'Katie', score: 1 },
    ],
    winners: ['Natalie'],
}
