import React from 'react'
import GameCard from './index'

export default {
    title: 'GameCard',
    component: GameCard,
}

const Template = (args) => <GameCard {...args} />

export const GameCardStory = Template.bind({})
GameCardStory.args = {
    text: 'Gartic',
    image: './Images/Gartic.png',
    link: 'https://gartic.io/',
}
