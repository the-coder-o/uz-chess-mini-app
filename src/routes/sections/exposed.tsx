import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const HomePage = lazy(() => import('@/pages/home/home'))

export const exposed: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
]
