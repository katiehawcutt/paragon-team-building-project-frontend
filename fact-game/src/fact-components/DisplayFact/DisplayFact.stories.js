import React from 'react'
import DisplayFact from './DisplayFact'

// This default export determines where your story goes in the story list
export default {
    title: 'DisplayFact',
    component: DisplayFact,
}

const Template = (args) => <Title {...args} />

export const DisplayFactStory = Template.bind({})
DisplayFactStory.args = {
    fact: 'I love cake',
}
