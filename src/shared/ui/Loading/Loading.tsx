import styles from './Loading.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import LoadingSvg from '../../assets/icons/loading.svg'

type LoadingTheme = 'primary'

interface LoadingProps {
    className?: string
    theme?: LoadingTheme
}

export const Loading = ({ className, theme = 'primary' }: LoadingProps) => {
    return (
        <div className={classNames({ cls: styles.Loading, additional: [className, styles[theme]] })}>
            <LoadingSvg />
        </div>
    )
}
