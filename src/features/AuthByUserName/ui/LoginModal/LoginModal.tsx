import { LoginForm } from '../LoginForm/LoginForm'
import { Modal, type ModalProps } from 'shared/ui/Modal/ui/Modal'

interface LoginModalProps extends Omit<ModalProps, 'children'> {
    className?: string

}
export const LoginModal = (props: LoginModalProps) => {
    return (
        <Modal
            {...props}
        >
            <LoginForm/>
        </Modal>
    )
}
