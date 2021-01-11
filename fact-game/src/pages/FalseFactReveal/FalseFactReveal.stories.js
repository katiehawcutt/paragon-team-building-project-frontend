import React from 'react'
import FalseFactReveal from './index'

export default {
    title: 'FalseFactReveal',
    component: FalseFactReveal,
}

const Template = (args) => <FalseFactReveal {...args} />

export const PagesFirstStory = Template.bind({})
PagesFirstStory.args = {
    fakeFact: ['I once cycled across South America with my best friend'],
    displayName: 'Katie',
    roundNumber: 1,
}
