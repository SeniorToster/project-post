import { Link as LinkRD, type LinkProps as LinkPropsRD } from 'react-router-dom'
import styles from './Link.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type FC } from 'react'

export enum LinkTheme {
    NAVBAR = 'navbar',
}
interface LinkProp extends LinkPropsRD {
    className?: string
    theme: LinkTheme
}
export const Link: FC<LinkProp> = (props) => {
    const {
        className,
        theme,
        to,
        children,
        ...otherProps
    } = props

    return (
        <LinkRD
            to={to}
            {...otherProps}
            className={classNames({ cls: styles.Link, additional: [className, styles[theme]] })}
        >
            {children}
        </LinkRD>
    )
}
