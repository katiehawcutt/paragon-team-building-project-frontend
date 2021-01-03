// Details: https://github.com/storybookjs/storybook/issues/6364#issuecomment-485651328
import '../src/globals/global.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
}
