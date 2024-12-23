import { Button } from './components/ui/button'
import { useTelegram } from './hooks/useTelegram'

const App = () => {
  const { initData, WebApp } = useTelegram()

  return (
    <div className="p-4">
      <div>
        <h1 className="text-2xl font-bold">Telegram Mini App</h1>
        <p className="mt-2">Hello, {initData?.user?.first_name || 'Guest'}!</p>
        <Button onClick={() => WebApp.close()}>Close App</Button>
      </div>
    </div>
  )
}

export default App
