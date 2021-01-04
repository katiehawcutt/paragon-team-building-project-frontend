import React from 'react'
import CreateGame from './CreateGame'

export default {
    title: 'CreateGame',
    component: CreateGame,
}

const Template = (args) => <CreateGame {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {}
