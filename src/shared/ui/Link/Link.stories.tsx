import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './Link'

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

export const Navbar: Story = {
    args: {
        theme: 'navbar',
        children: 'Link',
        to: '/'
    }
}
