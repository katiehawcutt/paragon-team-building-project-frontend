import React from 'react'
import ErrorMessage from './index'

// This default export determines where your story goes in the story list
export default {
    title: 'ErrorMessage',
    component: ErrorMessage,
}

const Template = (args) => <ErrorMessage {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {}
