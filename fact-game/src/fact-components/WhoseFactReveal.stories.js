import React from 'react'
import WhoseFactReveal from './WhoseFactReveal'

// This default export determines where your story goes in the story list
export default {
    title: 'WhoseFactReveal',
    component: WhoseFactReveal,
}

const Template = (args) => <WhoseFactReveal {...args} />

export const WhoseFactRevealStory = Template.bind({})
WhoseFactRevealStory.args = {
    roundNumber: 1,
    displayName: 'Brad',
}
