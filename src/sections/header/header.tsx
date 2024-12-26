import { Bell, Search } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Drawer, DrawerTrigger } from '@/components/ui/drawer'
import { SearchDrawer } from '@/components/search/search-drawer.tsx'
import { NotificationDrawer } from '@/components/notification/notification-drawer.tsx'

export const Header = () => {
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  const hiddenRoutes = ['/auth/sign-up', '/auth/sign-in', '/auth/sms-verification']
  if (hiddenRoutes.includes(location.pathname)) {
    return null
  }

  return (
    <header className={'container'}>
      <div className={'flex items-center justify-between pt-2'}>
        <img src="https://optim.tildacdn.one/tild3762-6136-4738-a564-353637656539/-/resize/72x/-/format/webp/FIDE_Grand_Swiss_202.png" alt="logo" width={50} />
        <div className={'flex items-center gap-2'}>
          <Drawer open={searchOpen} onOpenChange={setSearchOpen}>
            <DrawerTrigger asChild>
              <Search className="cursor-pointer" />
            </DrawerTrigger>
            <SearchDrawer />
          </Drawer>
          <Drawer open={notificationOpen} onOpenChange={setNotificationOpen}>
            <DrawerTrigger asChild>
              <Bell className="cursor-pointer" />
            </DrawerTrigger>
            <NotificationDrawer />
          </Drawer>
        </div>
      </div>
    </header>
  )
}
