import React from 'react'
import FactButton from './index'

export default {
    title: 'FactButton',
    component: FactButton,
}

const Template = (args) => <FactButton {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    factText:
        'I once got locked outside my own house in the winter during the night. To survive, I ate the snowman my wife and children had made earlier that day.',
    handleClick: () => void 0,
    selected: false,
}
