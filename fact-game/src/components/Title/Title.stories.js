import React from 'react'
import Title from './index'

// This default export determines where your story goes in the story list
export default {
    title: 'Title',
    component: Title,
}

const Template = (args) => <Title {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    Title: 'Fact Game',
}
