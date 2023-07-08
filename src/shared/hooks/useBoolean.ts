import { useCallback, useState } from 'react'

type UseBoolean = [boolean, () => void, () => void ]

export const useBoolean = (initialState: boolean): UseBoolean => {
    const [boolean, setBoolean] = useState<boolean>(initialState)
    const setTrue = useCallback(() => { setBoolean(true) }, [])
    const setFalse = useCallback(() => { setBoolean(false) }, [])
    return [boolean, setTrue, setFalse]
}
