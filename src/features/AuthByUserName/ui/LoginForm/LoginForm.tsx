import styles from './LoginForm.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { useCallback } from 'react'
import { getLoginSelect } from '../../model/seletors/getLoginSelect'

interface LoginFormProps {
    className?: string
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { password, username } = useSelector(getLoginSelect)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const usernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const passwordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    return (
        <div className={classNames({ cls: styles.LoginForm, additional: [className] })}>
            <Input value={username} onChange={usernameChange} focus layout='vertical' label={t('Логин')} placeholder={t('Логин')} type="text" theme='primary'/>
            <Input value={password} onChange={passwordChange} layout='vertical' label={t('Пароль')} placeholder='******' type="password" theme='primary'/>
            <Button layout>{t('Войти')}</Button>
        </div>
    )
}
