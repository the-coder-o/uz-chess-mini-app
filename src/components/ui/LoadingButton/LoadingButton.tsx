import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'

import { Button, ButtonProps } from '@/components/ui/button'

interface IProps extends ButtonProps {
  children: ReactNode
  isLoading: boolean
  className?: string
}

export const LoadingButton = ({ children, isLoading, className, variant, disabled, ...props }: IProps) => {
  return (
    <Button type="submit" variant={variant} className={className} disabled={disabled || isLoading} {...props}>
      {isLoading ? <Loader2 className="animate-spin" /> : children}
    </Button>
  )
}
