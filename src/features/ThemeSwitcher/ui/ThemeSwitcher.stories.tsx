import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { InversDecorator } from 'shared/lib/storybook/InversDecorator'

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [InversDecorator]
}
