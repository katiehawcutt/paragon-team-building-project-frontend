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
    bio: `I love playing the saxophone and being outdoors. I also really like eating cheese and drinking wine. Recently, I have come to love coding and I can't wait to become a web-developer.`,
}
