import React from 'react'
import BurgerMenu from './index'

export default {
    title: 'BurgerMenu',
    component: BurgerMenu,
}

const Template = (args) => <BurgerMenu {...args} />

export const ButtonStory = Template.bind({})
ButtonStory.args = {
    className: '',
}
