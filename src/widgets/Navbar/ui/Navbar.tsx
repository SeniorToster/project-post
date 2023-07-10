import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useBoolean } from 'shared/hooks/useBoolean'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUserName'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isOpen, onOpens, offOpens] = useBoolean(false)
    const { t } = useTranslation()
    return (
        <div className={classNames({ cls: styles.Navbar, additional: [className] })}>
            <div className={classNames({ cls: styles.wrapper_settings })}>
                <LangSwitcher/>
                <ThemeSwitcher/>
                <Button theme='invers' onClick={onOpens }>{t('Войти')}</Button>
                <LoginModal status={isOpen} onClose={offOpens}/>
            </div>
        </div>
    )
}
