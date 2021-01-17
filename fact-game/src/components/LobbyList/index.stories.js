import React from 'react'
import LobbyList from './index'

// This default export determines where your story goes in the story list
export default {
    title: 'LobbyList',
    component: LobbyList,
}

const Template = (args) => <LobbyList {...args} />

export const leaderBoardStory = Template.bind({})
leaderBoardStory.args = {
    playersInLobby: [
        'Katie Hawcutt',
        'Khang',
        'Natalie',
        'Bradley Smith',
        'Arshi',
    ],
}
