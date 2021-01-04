import React from 'react'
import Fact from './FactButton'

export default {
    title: 'Fact',
    component: Fact,
}

const Template = (args) => <Fact {...args} />

export const FirstStory = Template.bind({})
FirstStory.args = {
    factText:
        'I once got locked outside my own house in the winter during the night. To survive, I ate the snowman my wife and children had made earlier that day.',
    handleClick: () => void 0,
    selected: false,
}
