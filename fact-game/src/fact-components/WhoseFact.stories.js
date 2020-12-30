import React from 'react'
import WhoseFact from './WhoseFact'

// This default export determines where your story goes in the story list
export default {
    title: 'WhoseFact',
    component: WhoseFact,
}

/* roundNumber,
    facts,
    participants,
    handleClick,
    leaderboard,
    secondsLeft,
    turnId, */

const Template = (args) => <WhoseFact {...args} />

export const WhoseFactStory = Template.bind({})
WhoseFactStory.args = {
    roundNumber: 1,
    facts: ['I like cake', "I don't like cake"],
    participants: [{ text: 'Brad' }],
    handleAnswer: function answer() {},
    leaderboard: [{ displayName: 'A', score: 0 }],
    secondsLeft: 5,
    turnId: '12345',
}
