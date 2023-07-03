import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'features/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation()
    const onChangCollapsed = () => { setCollapsed((prev) => !prev) }

    return (
        <div data-testid='Sidebar' className={classNames({ cls: styles.Sidebar, mods: { [styles.collapsed]: collapsed }, additional: [className] })}>
            <Button data-testid='Sidebar-toggle' onClick={onChangCollapsed} theme='invers'>{t('кнопка')}</Button>
            <LangSwitcher/>
        </div>
    )
}
