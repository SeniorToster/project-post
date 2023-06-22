import styles from './Navbar.module.scss'
import { RoutesPath } from 'shared/config/routesPath'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link, LinkTheme } from 'shared/ui/Link/Link'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames({ cls: styles.Navbar, additional: [className] })}>
            <div className={classNames({ cls: styles.links })}>
                <Link theme={LinkTheme.NAVBAR} to={RoutesPath.main}>{t('главная')}</Link>
                <Link theme={LinkTheme.NAVBAR} to={RoutesPath.about}>{t('обо мне')}</Link>
            </div>
            <ThemeSwitcher/>
        </div>
    )
}
