import { Navigate, useRoutes } from 'react-router-dom'
import { authRoutes } from './auth'

import { exposed } from '@/routes/sections/exposed'
import { useAuthContext } from '@/auth/hooks/useAuthContext'

export function Router() {
  const { authenticated } = useAuthContext()

  const routes = authenticated ? [...exposed, { path: '*', element: <Navigate to="/" replace /> }] : [...authRoutes, { path: '*', element: <Navigate to="/auth/sign-in" replace /> }]

  return useRoutes(routes)
}
