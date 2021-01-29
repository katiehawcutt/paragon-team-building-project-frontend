import React from 'react'
import Title from './index'

export default {
    title: 'Title',
    component: Title,
}

const Template = (args) => <Title {...args} />

export const TitleStory = Template.bind({})
TitleStory.args = {
    text: 'Welcome Bootcampers!',
}
