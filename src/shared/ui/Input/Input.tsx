import styles from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef } from 'react'

type InputTheme = 'primary'
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string
    theme: InputTheme
    layout?: 'vertical' | 'horizontal' | 'inline'
    focus?: boolean
    onChange?: (value: string) => void
}
export const Input = memo((props: InputProps) => {
    const {
        label,
        focus,
        theme,
        layout = 'inline',
        className,
        onChange,
        value,
        ...otherProps
    } = props
    const inputRef = useRef<HTMLInputElement | null>(null)
    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    useEffect(() => {
        if (inputRef.current != null && Boolean(focus)) {
            inputRef.current.focus()
        }
    }, [focus])

    return (
        <label className={classNames({ cls: styles.Input, additional: [className, styles[layout]] })}>
            {label != null && <p>{label}</p>}
            <input ref={inputRef} onChange={onChangeHandle} value={value} {...otherProps} />
        </label>
    )
})

Input.displayName = 'Input'
