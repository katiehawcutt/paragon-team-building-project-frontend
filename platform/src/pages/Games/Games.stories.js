import React from 'react'
import Games from './Games'

export default {
    title: 'Games',
    component: Games,
}

const Template = (args) => <Games {...args} />

export const GamesStory = Template.bind({})
GamesStory.args = {}
