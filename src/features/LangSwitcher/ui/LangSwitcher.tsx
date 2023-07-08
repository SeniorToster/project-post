import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import LanguageSvg from 'shared/assets/icons/language.svg'
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
        <Button onClick={onChangeLanguage} theme='invers' className={className}>
            <LanguageSvg/>{t('язык')}
        </Button>
    )
}
