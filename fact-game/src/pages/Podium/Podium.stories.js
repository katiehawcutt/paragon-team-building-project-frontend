import React from 'react'
import Podium from './Podium'

// This default export determines where your story goes in the story list
export default {
    title: 'Podium',
    component: Podium,
}

const Template = (args) => <Podium {...args} />

const leaderboard = [
    { displayName: 'Khang', score: 15, position: 1 },
    { displayName: 'Natalie', score: 15, position: 1 },
    { displayName: 'Bradley', score: 5, position: 2 },
    { displayName: 'Katie', score: 5, position: 2 },
    { displayName: 'Indigo', score: 3, position: 3 },
    { displayName: 'Arshi', score: 0, position: 4 },
]

export const PodiumStory = Template.bind({})

PodiumStory.args = {
    leaderboard,
    winners: leaderboard
        .filter((item) => item.score === leaderboard[0].score)
        .map(({ displayName }) => displayName),
}
