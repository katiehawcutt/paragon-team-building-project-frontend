import React from 'react'
import DisplayFact from './DisplayFact'

export default {
    title: 'DisplayFact',
    component: DisplayFact,
}

const Template = (args) => <DisplayFact {...args} />

export const DisplayFactStory = Template.bind({})
DisplayFactStory.args = {
    facts: [
        `I hate cake very very much and can't even stand to be near it`,
        'I once a skydive and my parachute failed but luckily a large bird saved me',
    ],
}
