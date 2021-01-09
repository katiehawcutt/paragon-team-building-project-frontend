import React from 'react'
import FlipCard from './FlipCard'

export default {
    title: 'FlipCard',
    component: FlipCard,
}

const Template = (args) => <FlipCard {...args} />

export const FlipCardStory = Template.bind({})
FlipCardStory.args = {
    personName: 'Katie Hawcutt',
    imageSrc: './Images/kh.png',
}
