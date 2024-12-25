import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { AuthContext } from '@/auth/context'
import { ISignInWithEmail, Types } from '@/auth/types'
import axios, { endpoints } from '@/services/axios'

export const useAuthSignInEmail = () => {
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)

  return useCallback(async (values: ISignInWithEmail) => {
    try {
      const res = await axios.post(endpoints.auth.sign_in_with_email, values)
      const { data } = res.data

      const { access_token: accessToken, refresh_token: refreshToken } = res.data.tokens

      localStorage.setItem('access_token', accessToken)
      localStorage.setItem('refresh_token', refreshToken)

      dispatch({
        type: Types.SIGN_IN_WITH_EMAIL,
        payload: {
          user: {
            ...data,
          },
        },
      })

      toast.success('You have successfully signed in.')

      navigate('/')
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Error from sign in')
    }
  }, [])
}
