import React from 'react'
import WelcomeText from './WelcomeText'

export default {
    title: 'WelcomeText',
    component: WelcomeText,
}

const Template = (args) => <WelcomeText {...args} />

export const WelcomeTextStory = Template.bind({})
WelcomeTextStory.args = {}
