import styles from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ModalProps {
    className?: string
}
export const Modal = ({ className }: ModalProps) => {
    return (
        <div className={classNames({ cls: styles.Modal, additional: [className] })}>
        </div>
    )
}
