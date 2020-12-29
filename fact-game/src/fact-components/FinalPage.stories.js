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
    leaderboard: [{ displayName: 'A', score: 0 }],
    top3: [
        { displayName: 'B', score: 0 },
        { displayName: 'C', score: 0 },
        { displayName: 'D', score: 0 },
    ],
}
