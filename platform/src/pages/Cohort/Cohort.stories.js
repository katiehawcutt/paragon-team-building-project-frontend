import React from 'react'
import Cohort from './Cohort'

export default {
    title: 'Cohort',
    component: Cohort,
}

const Template = (args) => <Cohort {...args} />

export const CohortStory = Template.bind({})
CohortStory.args = {}
