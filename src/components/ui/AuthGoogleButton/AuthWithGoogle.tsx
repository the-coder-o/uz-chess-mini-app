import { useAuthGoogle } from '@/auth/hooks/useAuthGoogle'
import { Button } from '@/components/ui/button'

export const AuthWithGoogle = () => {
  const signInWithGoogle = useAuthGoogle()

  return (
    <Button onClick={signInWithGoogle} variant="outline" className="text-md w-full rounded-xl border-gray-200">
      <img src={'https://www.cdnlogo.com/logos/g/35/google-icon.svg'} alt={'google'} width={15} />
      Google
    </Button>
  )
}
