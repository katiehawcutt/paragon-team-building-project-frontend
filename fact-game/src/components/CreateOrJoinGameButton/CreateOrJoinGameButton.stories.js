import React from 'react'
import CreateOrJoinGameButton from './CreateOrJoinGameButton'
import createGameLogo from '../../Images/GameIcon2.png'
import joinGameLogo from '../../Images/gameIcon.png'

// This default export determines where your story goes in the story list
export default {
    title: 'CreateOrJoinGameButton',
    component: CreateOrJoinGameButton,
}

const Template = (args) => <CreateOrJoinGameButton {...args} />

export const CreateOrJoinGameButtonStory = Template.bind({})
CreateOrJoinGameButtonStory.args = {
    buttonText: 'Create New Game',
    color: '#8152FF',
    image: createGameLogo,
}
