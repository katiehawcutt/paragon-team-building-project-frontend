import React from 'react'
import GameLobby from './GameLobby'

// This default export determines where your story goes in the story list
export default {
    title: 'GameLobby',
    component: GameLobby,
}

const Template = (args) => <GameLobby {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    gameId: '739fhdkdndkfiew3948230',
    secondsLeft: 10,
}
