import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import { configRoutes } from 'app/Routes/libs/RoutesConfig'
import { Loading } from 'shared/ui/Loading/Loading'

export const AppRoutes = () => {
    const elements = useRoutes(configRoutes)
    return (
        <Suspense fallback={<Loading/>}>
            {elements}
        </Suspense>

    )
}
