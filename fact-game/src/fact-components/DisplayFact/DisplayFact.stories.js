import React from 'react'
import DisplayFact from './DisplayFact'

export default {
    title: 'DisplayFact',
    component: DisplayFact,
}

const Template = (args) => <Title {...args} />

export const DisplayFactStory = Template.bind({})
DisplayFactStory.args = {
    facts: ['I love cake'],
}
