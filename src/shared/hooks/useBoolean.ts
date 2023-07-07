import { useCallback, useState } from 'react'

export const useBoolean = (initialState: boolean): [boolean, () => void] => {
    const [boolean, setBoolean] = useState<boolean>(initialState)
    const toggle = useCallback(() => { setBoolean(boolean => !boolean) }, [])

    return [boolean, toggle]
}
