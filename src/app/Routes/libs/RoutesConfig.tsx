import { RoutesName, RoutesPath } from 'shared/config/routesPath'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteObject } from 'react-router-dom'

export const configRoutes: RouteObject[] = [
  {
    path: RoutesPath[RoutesName.MAIN],
    element: <MainPage/>
  },
  {
    path: RoutesPath[RoutesName.ABOUT],
    element: <AboutPage/>
  },
  {
    path: RoutesPath[RoutesName.NOT_FOUND],
    element: <NotFoundPage/>
  }
]
