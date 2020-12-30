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
WhoseFact.args = {
    facts: ['I like cake', "I don't like cake"],
    participants: 'Brad',
    handleClick: {
        action: 'ANSWER',
        gameId: 'some_game_id',
        playerId: 'some_player_id', // ID of the player that's answering, not the ID of who the fact is about
        choice: 'some_choice_id',
    },
    leaderboard: [{ displayName: 'A', score: 0 }],
    secondsLeft: 5,
    turnId: '12345',
}
