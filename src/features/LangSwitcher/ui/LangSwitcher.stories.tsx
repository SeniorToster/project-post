import type { Meta, StoryObj } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'
import { InversDecorator } from 'shared/lib/storybook/InversDecorator'

const meta = {
    title: 'features/LangSwitcher',
    component: LangSwitcher
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {},
    decorators: [InversDecorator]
}
