import React from 'react'
import Subtitle from './Subtitle'

export default {
    Subtitle: 'Subtitle',
    component: Subtitle,
}

const Template = (args) => <Subtitle {...args} />

export const SubtitleStory = Template.bind({})
SubtitleStory.args = {}
