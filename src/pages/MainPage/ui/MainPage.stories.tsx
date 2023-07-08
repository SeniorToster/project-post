import type { Meta, StoryObj } from '@storybook/react'

import { MainPageLazy } from './MainPage.async'

const meta = {
    title: 'pages/MainPage',
    component: MainPageLazy
} satisfies Meta<typeof MainPageLazy >

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {} }
