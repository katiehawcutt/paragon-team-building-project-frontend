import React from 'react'
import WhichFactReveal from './index'

export default {
    title: 'WhichFactReveal',
    component: WhichFactReveal,
}

const Template = (args) => <WhichFactReveal {...args} />

export const PagesFirstStory = Template.bind({})
PagesFirstStory.args = {
    fact: 'I once cycled across South America with my best friend',
    displayName: 'Katie',
    roundNumber: 1,
}
