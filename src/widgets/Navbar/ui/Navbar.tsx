import styles from './Navbar.module.scss'
import { RoutesPath } from 'shared/config/routes/routesPath'
import { classNames } from 'shared/lib/classNames/classNames'
import { Link } from 'shared/ui/Link/Link'
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
                <Link theme='navbar' to={RoutesPath.main}>{t('главная')}</Link>
                <Link theme='navbar' to={RoutesPath.about}>{t('обо мне')}</Link>
            </div>
            <ThemeSwitcher/>
        </div>
    )
}
