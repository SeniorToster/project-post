import styles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

interface LoginFormProps {
    className?: string
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames({ cls: styles.LoginForm, additional: [className] })}>
            <Input focus layout='vertical' label={t('Логин')} placeholder={t('Логин')} type="text" theme='primary'/>
            <Input layout='vertical' label={t('Пароль')} placeholder='******' type="password" theme='primary'/>
            <Button layout>{t('Войти')}</Button>
        </div>
    )
}
