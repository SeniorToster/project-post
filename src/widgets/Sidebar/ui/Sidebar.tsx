import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'features/LangSwitcher'

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const onChangCollapsed = () => { setCollapsed((prev) => !prev) }

    return (
        <div className={classNames({ cls: styles.Sidebar, mods: { [styles.collapsed]: collapsed }, additional: [className] })}>
            <Button onClick={onChangCollapsed} theme={ThemeButton.INVERS}>кнопка</Button>
            <LangSwitcher/>
        </div>
    )
}
