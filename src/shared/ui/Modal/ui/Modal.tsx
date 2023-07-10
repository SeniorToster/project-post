import styles from './Modal.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { type MouseEvent, type ReactNode, useCallback, useEffect, useRef } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'
import { useBoolean } from 'shared/hooks/useBoolean'

export interface ModalProps {
    className?: string
    children: ReactNode
    status: boolean
    onClose: () => void
}
const ANIMATION_DELAY = 500

export const Modal = ({ children, ...props }: ModalProps) => {
    return props.status && <ContentModal{...props}>{children}</ContentModal>
}
const ContentModal = ({ className, children, onClose }: ModalProps) => {
    const [opens, onOpens, offOpens] = useBoolean(false)
    const onClickContent = (e: MouseEvent) => { e.stopPropagation() }

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const onCloseHandle = useCallback(() => {
        offOpens()
        timerRef.current = setTimeout(onClose, ANIMATION_DELAY)
    }, [offOpens, onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandle()
        }
    }, [onCloseHandle])

    useEffect(() => {
        onOpens()
        window.addEventListener('keydown', onKeyDown)

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [onKeyDown, onOpens])

    return (
        <Portal>
            <div onClick={onCloseHandle} className={classNames({
                cls: styles.overlay,
                mods: {
                    [styles.overlay__opens]: opens
                },
                additional: [className]
            })
            }>
                <div
                    onClick={onClickContent}
                    className={classNames({
                        cls: styles.content,
                        mods: {
                            [styles.content__opens]: opens
                        },
                        additional: [className]
                    })
                    }>
                    {children}
                </div>
            </div>
        </Portal>
    )
}
