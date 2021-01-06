import React from 'react'
import Button from './Button'

export default {
    title: 'Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const ButtonStory = Template.bind({})
ButtonStory.args = {
    text: [`Play Now!`],
}
