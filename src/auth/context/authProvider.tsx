import React, { useCallback, useEffect, useMemo, useReducer } from 'react'

import { ActionMapType, AuthStateType, Payload, Types } from '@/auth/types'
import { setSession } from '@/lib/utils'

import axios, { endpoints } from '@/services/axios'

import { AuthContext } from './authContext'

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>]

const initialState: AuthStateType = {
  user: null,
  loading: true,
}

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    }
  }
  if (action.type === Types.SIGN_UP_WITH_EMAIL) {
    return {
      ...state,
      user: action.payload.user,
    }
  }
  if (action.type === Types.SIGN_IN_WITH_EMAIL) {
    return {
      ...state,
      user: action.payload.user,
    }
  }
  if (action.type === Types.SEND_OTP_CODE) {
    return {
      loading: false,
      user: action.payload.user,
    }
  }
  if (action.type === Types.VERIFY_PHONE_OTP) {
    return {
      loading: false,
      user: action.payload.user,
    }
  }
  if (action.type === Types.SIGN_UP_WITH_PHONE) {
    return {
      loading: false,
      user: action.payload.user,
    }
  }
  if (action.type === Types.LOGOUT) {
    return {
      loading: false,
      user: null,
    }
  }
  return state
}

const STORAGE_KEY = 'access_token'

type Props = {
  children: React.ReactNode
}

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const initialize = useCallback(async () => {
    const accessToken = localStorage.getItem(STORAGE_KEY)

    if (accessToken) {
      try {
        const { data } = await axios.get(endpoints.auth.me)
        const { user } = data

        dispatch({
          type: Types.INITIAL,
          payload: { user: { ...user, accessToken } },
        })
      } catch (error) {
        dispatch({ type: Types.INITIAL, payload: { user: null } })
      }
    } else {
      dispatch({ type: Types.INITIAL, payload: { user: null } })
    }
  }, [])

  useEffect(() => {
    initialize()
  }, [initialize])

  const logout = useCallback(async () => {
    setSession(null)
    dispatch({
      type: Types.LOGOUT,
    })
  }, [])

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated'

  const status = state.loading ? 'loading' : checkAuthenticated

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      logout,
      dispatch,
    }),
    [logout, state.user, status, dispatch],
  )

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>
}
