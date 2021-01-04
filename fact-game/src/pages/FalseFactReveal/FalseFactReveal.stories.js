import React from 'react'
import FalseFactReveal from './FalseFactReveal'

export default {
    title: 'FalseFactReveal',
    component: FalseFactReveal,
}

const Template = (args) => <FalseFactReveal {...args} />

export const PagesFirstStory = Template.bind({})
PagesFirstStory.args = {
    facts: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
}
