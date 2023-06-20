import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'

export enum ThemeButton {
  PRIMARY = 'primary',
  INVERS = 'invers',
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ThemeButton
  children: ReactNode
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...orderProps } = props
  return (
        <button
            {...orderProps}
            className={classNames({ cls: styles.Button, additional: [className, styles[theme]] })}
        >
            {children}
        </button>
  )
}
