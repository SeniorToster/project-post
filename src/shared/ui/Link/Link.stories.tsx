import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './Link'
import { InversDecorator } from 'shared/lib/storybook/InversDecorator'

const meta = {
    title: 'shared/Link',
    component: Link
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Link',
        to: '/'
    }
}

export const Invers: Story = {
    args: {
        theme: 'invers',
        children: 'Link',
        to: '/'
    },
    decorators: [InversDecorator]
}
