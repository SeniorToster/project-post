import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import BurgerSvg from 'shared/assets/icons/burger.svg'
import HomeSvg from 'shared/assets/icons/home.svg'
import AboutSvg from 'shared/assets/icons/about.svg'
import { Link } from 'shared/ui/Link/Link'
import { RoutesPath } from 'shared/config/routes/routesPath'
import { useTranslation } from 'react-i18next'
interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation()
    const [collapsed, setCollapsed] = useState(false)
    const onChangCollapsed = () => { setCollapsed((prev) => !prev) }

    return (
        <div data-testid='Sidebar' className={classNames({ cls: styles.Sidebar, mods: { [styles.collapsed]: collapsed }, additional: [className] })}>
            <Button data-testid='Sidebar-toggle' onClick={onChangCollapsed} theme='invers'><BurgerSvg className={styles.svg}/></Button>
            <div className={classNames({ cls: styles.links_wrapper })}>
                <Link className={styles.link_item} theme='invers' to={RoutesPath.main}>
                    <HomeSvg/>
                    <span>{t('главная')}</span>
                </Link>
                <Link className={styles.link_item} theme='invers' to={RoutesPath.about}>
                    <AboutSvg/>
                    <span>{t('обо мне')}</span>
                </Link>
            </div>
        </div>
    )
}
