import { Button } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selector/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
    const state = useSelector(getCounterValue)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const incHandle = () => { dispatch(counterActions.inc()) }
    const decHandle = () => { dispatch(counterActions.dec()) }
    const resHandle = () => { dispatch(counterActions.res()) }
    return (
        <div >
            <h1 data-testid='value'>{t('value')}: {state}</h1>
            <Button data-testid='btn-inc' onClick={incHandle}>{t('Inc')}</Button>
            <Button data-testid='btn-dec' onClick={decHandle}>{t('Dec')}</Button>
            <Button data-testid='btn-res' onClick={resHandle}>{t('Res')}</Button>
        </div>
    )
}
