import { Helmet } from 'react-helmet-async'

import { CONFIG } from '@/config-global'
import { JWTSmsVerificationView } from '@/auth/view/sms-view.tsx'

const metadata = { title: `Sms verification - ${CONFIG.appName}` }

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <JWTSmsVerificationView />
    </>
  )
}
