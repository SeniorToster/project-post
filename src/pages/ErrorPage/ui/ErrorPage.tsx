import styles from './ErrorPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface ErrorPageProps {
    className?: string
}
export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation()

    const clickHande = () => {
        window.location.reload()
    }

    return (
        <div className={classNames({ cls: styles.ErrorPage, additional: [className] })}>
            <p>{t('ошибка')}</p>
            <Button onClick={clickHande} theme={ThemeButton.PRIMARY}>{t('перезагрузить')}</Button>
        </div>
    )
}
