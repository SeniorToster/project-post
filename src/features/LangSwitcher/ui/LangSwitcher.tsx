import styles from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const onChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
      .catch((e) => { console.log(e) })
  }
  return (
        <Button onClick={onChangeLanguage} theme={ThemeButton.INVERS} className={classNames({ cls: styles.LangSwitcher, additional: [className] })}>
            {t('язык')}
        </Button>
  )
}
