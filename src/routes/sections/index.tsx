import { Suspense } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { useAuthContext } from '@/auth/hooks/useAuthContext'

import { notFound } from './404'
import { authRoutes } from './auth'

export const Router = () => {
  const { authenticated } = useAuthContext()

  const routes = [
    ...(authenticated ? [{ path: '*', element: <Navigate to="/" /> }] : authRoutes),
    // ...(unauthenticated
    //   ? [{ path: "*", element: <Navigate to="/auth/sign-in" /> }]
    //   : dashboard),
    ...notFound,
  ]

  const router = createBrowserRouter(routes)

  return (
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  )
}
