import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from './Loading'

const meta = {
    title: 'shared/Loading',
    component: Loading
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: 'primary'
    }
}
