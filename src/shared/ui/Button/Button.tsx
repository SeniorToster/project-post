import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'

type ButtonTheme = 'primary' | 'invers' | 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children: ReactNode
    layout?: boolean
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = 'primary',
        layout = false,
        ...orderProps
    } = props

    return (
        <div className={styles.wrapper_button}>
            <button
                {...orderProps}
                className={classNames({ cls: styles.Button, mods: { [styles.layout]: layout }, additional: [className, styles[theme]] })}>
                {children}
            </button>
        </div>
    )
}
