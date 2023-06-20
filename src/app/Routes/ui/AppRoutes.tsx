import { useRoutes } from 'react-router-dom'

import { Suspense } from 'react'
import { configRoutes } from 'app/Routes/libs/RoutesConfig'

export const AppRoutes = () => {
  const elements = useRoutes(configRoutes)
  return (
        <Suspense fallback={<div> загрузка... </div>}>
            {elements}
        </Suspense>

  )
}
