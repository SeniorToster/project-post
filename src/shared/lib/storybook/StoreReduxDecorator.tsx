import { type Decorator } from '@storybook/react'
import { StoreProvider } from 'app/StoreProvider'
export const StoreReduxDecorator: Decorator = (Story) => {
    return (
        <StoreProvider>{Story()}</StoreProvider>
    )
}
