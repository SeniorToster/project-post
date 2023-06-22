import { type FC, type ReactNode, useState, createContext, useMemo } from 'react'

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

interface Props {
    children: ReactNode
}
export const LOCAL_KEY_THEME = 'theme'
const defaultTheme = localStorage.getItem(LOCAL_KEY_THEME) as Theme ?? Theme.LIGHT

export const ThemeContext = createContext<ThemeContextProps>({
    theme: defaultTheme,
    setTheme: () => {}
})
export const ThemeProvider: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const value = useMemo(() => ({ theme, setTheme }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
