import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { InversDecorator } from 'shared/lib/storybook/InversDecorator'

const meta = {
    title: 'shared/Button',
    component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Button'
    }
}

export const Invers: Story = {
    args: {
        theme: 'invers',
        children: 'Button'
    },
    decorators: [InversDecorator]
}

export const clear: Story = {
    args: {
        theme: 'clear',
        children: 'Button'
    }
}
