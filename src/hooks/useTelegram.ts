import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

type TelegramInitData = {
  user?: {
    id: number
    first_name: string
    last_name?: string
    username?: string
    language_code?: string
  }
  auth_date?: number
  hash?: string
}

export const useTelegram = () => {
  const [initData, setInitData] = useState<TelegramInitData | null>(null)

  useEffect(() => {
    try {
      const parsedData: TelegramInitData = JSON.parse(JSON.stringify(Object.fromEntries(new URLSearchParams(WebApp.initData))))
      setInitData(parsedData)
    } catch (error) {
      console.error('Failed to parse Telegram initData:', error)
    }

    WebApp.ready()
    return () => WebApp.close()
  }, [])

  return { initData, WebApp }
}
