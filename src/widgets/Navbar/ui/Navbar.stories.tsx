import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'

const meta = {
    title: 'widgets/Navbar',
    component: Navbar
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        className: 'primary'
    }
}
