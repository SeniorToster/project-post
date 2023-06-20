import { useContext } from 'react'
import { LOCAL_KEY_THEME, Theme, ThemeContext } from '../ui/ThemeContext'

interface UseThemeRes {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): UseThemeRes => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem(LOCAL_KEY_THEME, newTheme)
    setTheme(newTheme)
  }
  return { toggleTheme, theme }
}
