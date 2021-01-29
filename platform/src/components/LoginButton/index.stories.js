import React from 'react'
import LoginButton from './index'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'LoginButton',
    component: LoginButton,
}

const Template = (args) => (
    <BrowserRouter>
        <LoginButton {...args} />
    </BrowserRouter>
)

export const ButtonStory = Template.bind({})
ButtonStory.args = {
    text: [`Play Now!`],
}
