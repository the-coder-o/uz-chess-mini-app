import { Navigate, useRoutes } from 'react-router-dom'
import { authRoutes } from './auth'

import { exposed } from '@/routes/sections/exposed'
import { useAuthContext } from '@/auth/hooks/useAuthContext'
import { notFound } from '@/routes/sections/404.tsx'

export function Router() {
  const { authenticated, unauthenticated } = useAuthContext()

  const routes = [...(authenticated ? [{ path: '*', element: <Navigate to="/" /> }] : authRoutes), ...(unauthenticated ? [{ path: '*', element: <Navigate to="/auth/sign-in" /> }] : exposed), ...notFound]

  return useRoutes(routes)
}
