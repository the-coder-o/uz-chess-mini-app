import { Link, useLocation } from 'react-router-dom'

export const Footer = () => {
  const location = useLocation()

  const hiddenRoutes = ['/auth/sign-up', '/auth/sign-in', '/auth/sms-verification']
  if (hiddenRoutes.includes(location.pathname)) {
    return null
  }

  const navItems = [
    { path: '/', label: 'Sahifa', filledIcon: 'home_filled.svg', outlinedIcon: 'home_outlined.svg' },
    { path: '/courses', label: 'Kurslar', filledIcon: 'courses_filled.svg', outlinedIcon: 'courses_outlined.svg' },
    { path: '/game', label: "O'yin", filledIcon: 'game_filled.svg', outlinedIcon: 'game_outlined.svg' },
    { path: '/interactive', label: 'Interaktiv', filledIcon: 'puzzle_filled.svg', outlinedIcon: 'puzzle_outlined.svg' },
    { path: '/profile', label: 'Profil', filledIcon: 'profile_filled.svg', outlinedIcon: 'profile_outlined.svg' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white p-2 md:relative">
      <div className="max-w-screen-xl">
        <ul className="flex items-center justify-around">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="flex flex-col items-center gap-1 p-2 text-sm text-gray-600 hover:text-gray-900">
                <img src={`src/assets/svg/${location.pathname === item.path ? item.filledIcon : item.outlinedIcon}`} alt={item.label} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
