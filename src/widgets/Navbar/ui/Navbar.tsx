import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'features/LangSwitcher'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { Modal } from 'shared/ui/Modal/ui/Modal'
import { useBoolean } from 'shared/hooks/useBoolean'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

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
                <Modal status={isOpen} onClose={offOpens}>
                    {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut autem consectetur culpadebitis dolor dolores exercitationem laboriosam magni mollitia nam perspiciatis praesentium quidemquo, quos ratione totam ullam unde!')}
                </Modal>
            </div>
        </div>
    )
}
