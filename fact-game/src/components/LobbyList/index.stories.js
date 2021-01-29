import React from 'react'
import LobbyList from './index'

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
