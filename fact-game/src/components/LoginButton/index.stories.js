import React from 'react'
import LoginButton from './index'

export default {
    title: 'LoginButton',
    component: LoginButton,
}

const Template = (args) => <LoginButton {...args} />

export const ButtonStory = Template.bind({})
ButtonStory.args = {
    text: 'Login',
}
