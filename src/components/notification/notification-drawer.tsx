import { ScrollArea } from '@/components/ui/scroll-area'
import { DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'

type Notification = {
  id: number
  title: string
  description: string
  time: string
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: 'New message',
    description: 'You have a new message from John Doe',
    time: '5 minutes ago',
  },
  {
    id: 2,
    title: 'Event reminder',
    description: "Your event 'Team Meeting' starts in 1 hour",
    time: '1 hour ago',
  },
  {
    id: 3,
    title: 'Task completed',
    description: "Your task 'Finish project proposal' has been marked as complete",
    time: '2 hours ago',
  },
]

export const NotificationDrawer = () => {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Notifications</DrawerTitle>
      </DrawerHeader>
      <ScrollArea className="h-[calc(100vh-150px)] px-4">
        {mockNotifications.map((notification) => (
          <div key={notification.id} className="mb-4 rounded-lg border p-4">
            <h3 className="font-semibold">{notification.title}</h3>
            <p className="text-sm text-gray-600">{notification.description}</p>
            <p className="mt-2 text-xs text-gray-400">{notification.time}</p>
          </div>
        ))}
      </ScrollArea>
    </DrawerContent>
  )
}
