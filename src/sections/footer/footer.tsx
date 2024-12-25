import { Book, CastleIcon as ChessKnight, Grid2X2, Home, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white p-2 md:relative">
      <div className="max-w-screen-xl">
        <ul className="flex items-center justify-around">
          <li>
            <Link to="/" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-600 hover:text-gray-900">
              <Home className="h-5 w-5" />
              <span>Sahifa</span>
            </Link>
          </li>
          <li>
            <Link to="/courses" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-600 hover:text-gray-900">
              <Book className="h-5 w-5" />
              <span>Kurslar</span>
            </Link>
          </li>
          <li>
            <Link to="/game" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-600 hover:text-gray-900">
              <ChessKnight className="h-5 w-5" />
              <span>O&apos;yin</span>
            </Link>
          </li>
          <li>
            <Link to="/interactive" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-600 hover:text-gray-900">
              <Grid2X2 className="h-5 w-5" />
              <span>Interaktiv</span>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex flex-col items-center gap-1 p-2 text-sm text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
              <span>Profil</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
