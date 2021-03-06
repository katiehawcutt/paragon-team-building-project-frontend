import React from 'react'
import Round from './index'

export default {
    title: 'Round',
    component: Round,
}

const Template = (args) => <Round {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
    roundNumber: 1,
}
