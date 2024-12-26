import { Toaster } from 'sonner'
import { useScrollToTop } from '@/hooks/useScrollTop'
import { AuthProvider } from '@/auth/context'
import { Router } from '@/routes'
import { Header } from '@/sections/header/header.tsx'
import { Footer } from '@/sections/footer/footer.tsx'

const App = () => {
  useScrollToTop()

  return (
    <AuthProvider>
      <Header />
      <Toaster />
      <Router />
      <Footer />
    </AuthProvider>
  )
}

export default App
