import React from 'react'
import Carousel1 from './Carousel'

export default {
    title: 'Carousel1',
    component: Carousel1,
}

const Template = (args) => <Carousel1 {...args} />

export const Carousel1Story = Template.bind({})
Carousel1Story.args = {
    link: [`https://gartic.io/`],
}
