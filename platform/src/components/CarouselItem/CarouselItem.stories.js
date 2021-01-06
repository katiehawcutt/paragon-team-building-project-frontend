import React from 'react'
import CarouselItem from './CarouselItem'

export default {
    title: 'CarouselItem',
    component: CarouselItem,
}

const Template = (args) => <CarouselItem {...args} />

export const CarouselItemStory = Template.bind({})
CarouselItemStory.args = {}
