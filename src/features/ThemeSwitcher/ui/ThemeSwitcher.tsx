import styles from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/Theme'
import MoonSvg from 'shared/assets/icons/moon.svg'
import SunSvg from 'shared/assets/icons/sun.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()
  return (
        <Button
            theme={ThemeButton.INVERS}
            onClick={toggleTheme}
            className={classNames({ cls: styles.ThemeSwitcher, additional: [className, styles[theme]] })}
        >
            {theme === Theme.DARK ? <MoonSvg/> : <SunSvg/> }
        </Button>

  )
}
