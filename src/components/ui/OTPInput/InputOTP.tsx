import { OTPInput, OTPInputContext } from 'input-otp'
import * as React from 'react'

import { cn } from '@/lib/utils'

type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput> & {
  className?: string
  containerClassName?: string
}

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, InputOTPProps>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput ref={ref} containerClassName={cn('flex items-center gap-2 has-[:disabled]:opacity-50', containerClassName)} className={cn('disabled:cursor-not-allowed', className)} autoComplete="one-time-code" {...props} />
))
InputOTP.displayName = 'InputOTP'

type InputOTPGroupProps = React.ComponentPropsWithoutRef<'div'>

const InputOTPGroup = React.forwardRef<React.ElementRef<'div'>, InputOTPGroupProps>(({ className, ...props }, ref) => <div ref={ref} className={cn('flex items-center gap-2', className)} {...props} />)
InputOTPGroup.displayName = 'InputOTPGroup'

interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<'div'> {
  index: number
}

const InputOTPSlot = React.forwardRef<React.ElementRef<'div'>, InputOTPSlotProps>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        'border-border-primary text-text-brand-tertiary relative flex h-16 w-16 items-center justify-center rounded-xl border-2 text-4xl font-medium transition-all',
        {
          'focus:border-1 focus:border-border-brand z-10 ring-1 ring-primary focus:ring-2 focus:ring-offset-2': isActive,
        },
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<React.ElementRef<'div'>, React.ComponentPropsWithoutRef<'div'>>(({ ...props }, ref) => <div ref={ref} role="separator" {...props} className="mx-1 w-5 border-2" />)
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot }
