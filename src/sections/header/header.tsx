import { Bell, Search } from 'lucide-react'

export const Header = () => {
  return (
    <header className={'container'}>
      <div className={'flex items-center justify-end gap-2 pt-3'}>
        <Search />
        <Bell />
      </div>
    </header>
  )
}
