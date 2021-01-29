import React from 'react'
import BurgerMenu from './index'
import { BrowserRouter } from 'react-router-dom'

export default {
    title: 'BurgerMenu',
    component: BurgerMenu,
}

const Template = (args) => (
    <BrowserRouter>
        <BurgerMenu {...args} />
    </BrowserRouter>
)

export const ButtonStory = Template.bind({})
ButtonStory.args = {
    className: '',
}
