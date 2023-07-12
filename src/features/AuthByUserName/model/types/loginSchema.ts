export interface LoginSchema {
    username: string
    password: string
    status: 'pending' | 'reject' | 'fulfilled'
    error?: string
}
