import React from 'react'
import GameCard from './GameCard'

export default {
    title: 'GameCard',
    component: GameCard,
}

const Template = (args) => <GameCard {...args} />

export const GameCardStory = Template.bind({})
GameCardStory.args = {}
