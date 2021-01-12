import React from 'react'
import RevealWhoTimer from './index'

export default {
    title: 'RevealWhoTimer',
    component: RevealWhoTimer,
}

const Template = (args) => <RevealWhoTimer {...args} />

export const PagesFirstStory = Template.bind({})
PagesFirstStory.args = {
    roundNumber: 1,
    secondsLeft: 10,
    votePercentages: [
        {
            displayName: 'Abe',
            displayPercentage: '65%',
        },
        {
            displayName: 'Martin',
            displayPercentage: '35%',
        },
    ],
}
