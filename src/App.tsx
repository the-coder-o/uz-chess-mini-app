import ChessGame from '@/board/ChessboardComponent.tsx'
import { Footer } from '@/sections/footer/footer.tsx'
import { Header } from '@/sections/header/header.tsx'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ChessGame />
      <Footer />
    </BrowserRouter>
  )
}

export default App
