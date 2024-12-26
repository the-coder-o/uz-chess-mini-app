import { Toaster } from 'sonner'
import { AuthProvider } from '@/auth/context'
import { Router } from '@/routes'
import { Header } from '@/sections/header/header.tsx'
import { Footer } from '@/sections/footer/footer.tsx'

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Toaster />
      <Footer />
      <Router />
    </AuthProvider>
  )
}

export default App
