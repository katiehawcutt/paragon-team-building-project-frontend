import React from 'react'
import FinalPage from './FinalPage'

// This default export determines where your story goes in the story list
export default {
    title: 'FinalPage',
    component: FinalPage,
}

const Template = (args) => <FinalPage {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    leaderboard: [
        { displayName: 'Katie', score: 15 },
        { displayName: 'Natalie', score: 7 },
        { displayName: 'Bradley', score: 5 },
        { displayName: 'Arshi', score: 3 },
        { displayName: 'Khang', score: 1 },
    ],
    top3: [
        { displayName: 'Katie', score: 15 },
        { displayName: 'Natalie', score: 7 },
        { displayName: 'Bradley', score: 3 },
    ],
}
