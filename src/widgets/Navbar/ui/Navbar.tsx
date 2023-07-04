import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames({ cls: styles.Navbar, additional: [className] })}>
            <div className={classNames({ cls: styles.wrapper_settings })}>
                <LangSwitcher/>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}
