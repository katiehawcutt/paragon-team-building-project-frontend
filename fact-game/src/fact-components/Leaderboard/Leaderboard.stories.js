import React from 'react'
import Leaderboard from './Leaderboard'

// This default export determines where your story goes in the story list
export default {
    title: 'Leaderboard',
    component: Leaderboard,
}

const Template = (args) => <Leaderboard {...args} />

export const leaderBoardStory = Template.bind({})
leaderBoardStory.args = {
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
}
