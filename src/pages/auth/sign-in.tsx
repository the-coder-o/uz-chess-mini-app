import { Helmet } from 'react-helmet-async'

import { CONFIG } from '@/config-global'
import { JWTSignInView } from '@/auth/view/sign-in-view.tsx'

const metadata = { title: `Sign in - ${CONFIG.appName}` }

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <JWTSignInView />
    </>
  )
}
