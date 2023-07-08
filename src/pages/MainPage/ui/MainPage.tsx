import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

export const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <div>
            {t('главная')}
            <Counter/>
        </div>
    )
}
