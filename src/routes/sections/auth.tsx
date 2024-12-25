import { RouteObject } from 'react-router-dom'

export const authRoutes: RouteObject[] = [
  {
    path: '/auth',
    children: [
      {
        path: 'sign-up-phone',
        element: '',
      },
    ],
  },
]
