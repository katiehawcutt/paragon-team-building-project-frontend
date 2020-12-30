import React from 'react'
import FalseFactReveal from './FalseFactReveal'

// This default export determines where your story goes in the story list
export default {
    title: 'FalseFactReveal',
    component: FalseFactReveal,
}

const Template = (args) => <FalseFactReveal {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    roundNumber: 1,
    displayName: 'Arshi',
    lie: `I hate cheese because it makes my nose turn blue and I can't stop sneezing`,
}
