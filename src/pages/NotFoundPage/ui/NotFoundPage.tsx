import styles from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
        <div className={classNames({ cls: styles.NotFoundPage, additional: [className] })}>
            {t('Cтраница не найдена')}
        </div>
  )
}
