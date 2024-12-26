import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { GuestGuard } from '@/auth/guard'

const Jwt = {
  SignInPage: lazy(() => import('@/pages/auth/sign-in')),
  SignUpPage: lazy(() => import('@/pages/auth/sign-up')),
  SmsVerification: lazy(() => import('@/pages/auth/sms-verification')),
}

export const authRoutes: RouteObject[] = [
  {
    path: '/auth',
    children: [
      {
        path: 'sign-up',
        element: (
          <GuestGuard>
            <Jwt.SignUpPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sign-in',
        element: (
          <GuestGuard>
            <Jwt.SignInPage />
          </GuestGuard>
        ),
      },
      {
        path: 'sms-verification',
        element: (
          <GuestGuard>
            <Jwt.SmsVerification />
          </GuestGuard>
        ),
      },
    ],
  },
]
