import { Helmet } from 'react-helmet-async'

import { CONFIG } from '@/config-global'
import { JWTSignUpView } from '@/auth/view/sign-up-view.tsx'

const metadata = { title: `Sign up - ${CONFIG.appName}` }

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <JWTSignUpView />
    </>
  )
}
