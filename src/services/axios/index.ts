import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

import { CONFIG } from 'src/config-global'
import { STORAGE_KEY } from '@/auth/context/constant'

const axiosInstance = axios.create({ baseURL: CONFIG.serverUrl })

axiosInstance.interceptors.request.use(
  (config) => {
    if (config.params) {
      const newParams: Record<string, any> = {}
      Object.keys(config.params).forEach((key) => {
        if (config.params[key] !== undefined && config.params[key] !== '' && config.params[key] !== null) {
          if (config.params[key] instanceof Array && config.params[key].length === 0) {
            return
          }
          newParams[key as string] = config.params[key]
        }
      })
      config.params = newParams
    }

    const token = localStorage.getItem(STORAGE_KEY)
    const newConfig = config

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    throw error
  },
)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error
  },
)

export default axiosInstance

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args]

    const res = await axiosInstance.get(url, { ...config })

    return res.data
  } catch (error) {
    console.error('Failed to fetch:', error)
    throw error
  }
}

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    // profile
    me: '/auth/me',
    // sign-up-with-phone-number
    verify_phone_otp: '/auth/verify-phone-otp',
    send_otp_code: '/auth/otp/phone',
    sign_up_phone: '/auth/signup-phone',
    sign_in_phone: '/auth/signin-phone',
    // sign-in-with-email
    sign_in_with_email: '/auth/signin-email',
    sign_up_with_email: '/auth/signup-email',
    // sign-in-with-google
    sign_in_with_google: '/auth/google/callback',
    // logout
    logout: '/auth/logout',
    // refresh-token
    refresh: '/auth/refresh',
  },
}
